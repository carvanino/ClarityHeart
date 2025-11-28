import { Quote } from "lucide-react";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Quote size={48} className="text-accent opacity-30 rotate-180" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-foreground mb-10">
            "Loveday believes that most emotional pain comes from misinterpretation, unspoken expectations, and unresolved internal conflicts."
          </h2>
          
          <div className="h-px w-24 bg-primary/30 mx-auto mb-10"></div>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            His work centers on restoring calm and clarity so clients can see their relationships and decisions without emotional fog.
          </p>
          
          <p className="text-lg font-medium text-foreground">
            Goal: Long-term emotional stability, not temporary relief.
          </p>
        </div>
      </div>
    </section>
  );
}
