import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/soft_warm_minimalist_abstract_background.png";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Abstract calming background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background"></div>
      </div>

      <div className="container relative z-10 px-6 py-20 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase">
            Relationship Dynamics & Emotional Clarity
          </span>
          
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-foreground mb-8">
            Clarity for the Mind. <br />
            <span className="text-primary italic">Stability for the Heart.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Where logic meets emotional grounding. Helping you think clearer and feel steadier.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Begin the Journey
            </button>
            <button 
              onClick={() => document.getElementById('method')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full bg-white border border-border text-foreground font-medium text-lg hover:bg-secondary/50 transition-all"
            >
              Explore The Method
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 opacity-50" />
      </motion.div>
    </section>
  );
}
