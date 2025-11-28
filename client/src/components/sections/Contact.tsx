import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. Dr. Loveday will get back to you shortly.",
    });

    // Reset form (optional, but good UX)
    (e.target as HTMLFormElement).reset();
    setIsSubmitting(false);
  };

  return (
    <footer id="contact" className="bg-foreground text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="font-serif text-4xl mb-6">Start Your Journey</h2>
            <p className="text-white/60 text-lg mb-10 max-w-md">
              Ready to find clarity and stability? Reach out to schedule a consultation or ask a question.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="mr-4 text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-white/60">akinolatofunmi04@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-4 text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-white/60">+234 812 260 3628</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-4 text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Office</h4>
                  <p className="text-white/60">Virtual Sessions Available Worldwide<br/>In-Person: Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">First Name</label>
                  <Input required placeholder="Jane" className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Last Name</label>
                  <Input required placeholder="Doe" className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Email</label>
                <Input required type="email" placeholder="jane@example.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Message</label>
                <Textarea required placeholder="Tell me a bit about what brings you here..." className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[120px]" />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Dr. Loveday. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
