import { motion } from "framer-motion";
import { Shield, Users, Clock, Apple, Dumbbell, HeartPulse } from "lucide-react";

const features = [
  { icon: Dumbbell, title: "ELITE EQUIPMENT", desc: "Premium machines and free weights from top global brands." },
  { icon: Users, title: "EXPERT COACHES", desc: "Certified trainers with years of competitive experience." },
  { icon: Clock, title: "FLEXIBLE TIMINGS", desc: "Open 5 AM to 11 PM, seven days a week." },
  { icon: Apple, title: "NUTRITION GUIDANCE", desc: "Personalized diet plans crafted by certified nutritionists." },
  { icon: Shield, title: "SAFE ENVIRONMENT", desc: "Sanitized, spacious, and well-ventilated training zones." },
  { icon: HeartPulse, title: "HEALTH TRACKING", desc: "Smart body composition analysis and progress tracking." },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 section-darker relative overflow-hidden">
      {/* Subtle glow bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-heading text-5xl md:text-6xl text-foreground">
            WHY CHOOSE US
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:glow-red-sm transition-all">
                <feat.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">
                {feat.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
