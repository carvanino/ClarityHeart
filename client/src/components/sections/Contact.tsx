import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
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
                  <p className="text-white/60">hello@drloveday.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-4 text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-white/60">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-4 text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Office</h4>
                  <p className="text-white/60">Virtual Sessions Available Worldwide<br/>In-Person: New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">First Name</label>
                  <Input placeholder="Jane" className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Last Name</label>
                  <Input placeholder="Doe" className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Email</label>
                <Input type="email" placeholder="jane@example.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Message</label>
                <Textarea placeholder="Tell me a bit about what brings you here..." className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[120px]" />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
                Send Message
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
