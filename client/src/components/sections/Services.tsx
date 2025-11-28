import { Check } from "lucide-react";

export function Services() {
  const specializations = [
    "Relationship conflicts & communication",
    "Emotional misinterpretations",
    "Overthinking & mental overload",
    "Slow emotional processors",
    "High-logic individuals struggling with feelings",
    "Trust-building in romantic relationships",
    "Decision-making clarity at life crossroads",
  ];

  const clients = [
    "Deep thinkers",
    "Emotionally self-aware but overwhelmed",
    "People-pleasers struggling to set boundaries",
    "Individuals afraid of conflict",
    "Partners navigating mismatched expectations",
    "Those who “think fast but feel slow”",
    "High-responsibility individuals who need emotional grounding",
  ];

  return (
    <section id="specializations" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-serif text-4xl mb-10 text-white">Specializations</h2>
            <ul className="space-y-6">
              {specializations.map((item, i) => (
                <li key={i} className="flex items-start group">
                  <span className="mr-4 mt-1 p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Check size={16} className="text-white" />
                  </span>
                  <span className="text-xl font-light text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 p-10 rounded-3xl backdrop-blur-sm border border-white/10">
            <h3 className="font-serif text-3xl mb-8 text-white">Who Works Best with Loveday?</h3>
            <p className="mb-8 text-white/70">
              People who feel understood by Loveday are often:
            </p>
            <ul className="space-y-4">
              {clients.map((item, i) => (
                <li key={i} className="flex items-center text-white/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-4"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
