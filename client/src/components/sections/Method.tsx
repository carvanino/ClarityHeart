import { motion } from "framer-motion";
import { Brain, Heart, MessageCircle } from "lucide-react";

export function Method() {
  const pillars = [
    {
      id: 1,
      title: "Interpretive Awareness",
      subtitle: "“What you felt came from what you thought it meant.”",
      icon: Brain,
      description: "Clients learn to separate the event from the interpretation and the emotional response. This restores clarity and prevents emotional overreaction."
    },
    {
      id: 2,
      title: "Trust-Centered Regulation",
      subtitle: "“Anchor your emotions in what you know, not what you fear.”",
      icon: Heart,
      description: "Clients develop personal emotional anchors based on known truths, personal values, and relationship trust. This reduces impulsive reactions."
    },
    {
      id: 3,
      title: "Constructive Expression",
      subtitle: "“Communicate to build, not to unload.”",
      icon: MessageCircle,
      description: "Clients learn how to communicate emotions in a way that prevents escalation, respects both sides, and builds deeper connection."
    }
  ];

  return (
    <section id="method" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">A Psychological Framework</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-3 mb-6">The Loveday Method™</h2>
          <p className="text-lg text-muted-foreground">
            A rational-emotive framework that helps individuals understand and restructure their emotional responses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <pillar.icon size={28} strokeWidth={1.5} />
              </div>
              
              <div className="mb-4">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Pillar {pillar.id}</span>
                <h3 className="font-serif text-2xl text-foreground mt-2">{pillar.title}</h3>
              </div>
              
              <blockquote className="border-l-2 border-accent pl-4 mb-6 italic text-foreground/80 font-serif">
                {pillar.subtitle}
              </blockquote>
              
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 p-10 bg-secondary/20 rounded-3xl text-center max-w-4xl mx-auto"
        >
          <h3 className="font-serif text-2xl mb-6">Outcome of the Method</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {["Clear thinkers", "Calm responders", "Emotionally grounded partners", "Better communicators", "More self-aware"].map((item) => (
              <div key={item} className="flex items-center text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
