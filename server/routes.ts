import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { getUncachableResendClient } from "./resend";
import { log } from "./index";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Save to storage
      const savedMessage = await storage.createContactMessage(validatedData);
      
      // Send email via Resend
      try {
        const { client, fromEmail } = await getUncachableResendClient();
        
        log(`Sending email from: ${fromEmail} to: akinolatofunmi04@gmail.com`);
        
        const emailResult = await client.emails.send({
          from: fromEmail,
          to: 'akinolatofunmi04@gmail.com',
          subject: `New Contact Form Message from ${validatedData.firstName} ${validatedData.lastName}`,
          html: `
            <div style="font-family: 'DM Sans', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #4a5d4e; font-family: 'Lora', serif;">New Contact Form Submission</h2>
              
              <div style="background: #f9f8f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 10px 0;"><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
              </div>
              
              <div style="margin: 20px 0;">
                <h3 style="color: #4a5d4e; font-family: 'Lora', serif;">Message:</h3>
                <p style="line-height: 1.6; color: #666;">${validatedData.message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;">
              
              <p style="font-size: 12px; color: #999;">
                This message was sent via the contact form on Dr. Loveday's website.
              </p>
            </div>
          `,
        });
        
        log(`Resend response: ${JSON.stringify(emailResult)}`);
        
        if (emailResult.error) {
          log(`Resend error: ${JSON.stringify(emailResult.error)}`, "error");
        } else {
          log(`Email sent successfully. ID: ${emailResult.data?.id}`);
        }
      } catch (emailError: any) {
        // Log email error but don't fail the request
        log(`Email sending failed: ${emailError?.message || emailError}`, "error");
      }
      
      res.status(200).json({ 
        success: true, 
        message: "Message received successfully" 
      });
      
    } catch (error) {
      log(`Contact form error: ${error}`, "error");
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data" 
      });
    }
  });

  return httpServer;
}
