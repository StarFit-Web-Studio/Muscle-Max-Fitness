import { motion } from "framer-motion";
import { Dumbbell, Flame, Zap, Heart, Swords, Wind, Bike, Trophy } from "lucide-react";

const programs = [
  { icon: Dumbbell, name: "STRENGTH TRAINING", desc: "Build raw power with progressive overload, compound lifts, and guided weight training sessions." },
  { icon: Flame, name: "HIIT / FAT LOSS", desc: "High-intensity circuits designed for maximum calorie burn and rapid fat loss results." },
  { icon: Zap, name: "CARDIO & TREADMILL", desc: "Dedicated cardio zone with treadmills, cross-trainers, and cycling machines." },
  { icon: Heart, name: "YOGA & MEDITATION", desc: "Morning yoga batches, pranayama, and guided meditation for mind-body balance." },
  { icon: Swords, name: "KICKBOXING & MMA", desc: "Self-defense training with kickboxing, MMA basics, and heavy bag workouts." },
  { icon: Wind, name: "FUNCTIONAL TRAINING", desc: "CrossFit-style functional movements with kettlebells, battle ropes, and TRX." },
  { icon: Bike, name: "ZUMBA & AEROBICS", desc: "High-energy Zumba, aerobics, and dance fitness classes — popular with all age groups." },
  { icon: Trophy, name: "PERSONAL TRAINING", desc: "1-on-1 customized training with certified coaches, diet chart, and weekly progress tracking." },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 section-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-heading text-5xl md:text-6xl text-foreground">
            OUR PROGRAMS
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Everything an Indian gym-goer needs — from weight training to Zumba, all under one roof.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-lg p-8 group hover:glow-border transition-all duration-300 cursor-pointer"
            >
              <prog.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-xl text-foreground mb-2">
                {prog.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                {prog.desc}
              </p>
              <span className="font-heading text-primary tracking-wider text-sm group-hover:tracking-widest transition-all">
                LEARN MORE →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
