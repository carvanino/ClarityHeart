import { motion } from "framer-motion";
import profileImg from "@assets/generated_images/professional_portrait_of_dr._loveday_based_on_user_photo.png";
import { Badge } from "@/components/ui/badge";

export function Bio() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src={profileImg} 
                alt="Dr. Loveday" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              About Loveday
            </h2>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Rational-Emotive Therapy</Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Relationship Clarity</Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Cognitive Clarity</Badge>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Loveday is a Rational-Emotive and Relationship Clarity Therapist who helps individuals and couples understand their emotional patterns, resolve conflict without escalation, and communicate in ways that strengthen trust.
              </p>
              
              <p>
                Known for his calm, structured, and deeply reflective approach, Loveday combines logic with emotional awareness. His clients describe him as the person who <strong className="text-foreground font-medium">“helps everything finally make sense.”</strong>
              </p>

              <p>
                Instead of overwhelming clients with jargon, he breaks emotional situations down into simple, understandable structures that reduce confusion and anxiety. His style is steady, direct, and grounded in the belief that understanding is the foundation of emotional stability.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="font-serif text-xl text-foreground mb-4">Approaches Blended</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center">• Cognitive Behavioral Therapy (CBT)</span>
                <span className="flex items-center">• Values-Based Conflict Mediation</span>
                <span className="flex items-center">• Rational Emotive Behavior Therapy (REBT)</span>
                <span className="flex items-center">• Trust-Centered Emotional Regulation</span>
                <span className="flex items-center">• Attachment Theory</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
