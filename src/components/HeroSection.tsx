import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gym.jpg";

const stats = [
  { value: "500+", label: "Members" },
  { value: "20+", label: "Expert Trainers" },
  { value: "5", label: "Years of Excellence" },
  { value: "50+", label: "Classes Weekly" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG Image */}
      <img
        src={heroImg}
        alt="Muscle Max Gym"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center pt-20 pb-72 sm:pb-56 md:pb-40">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide text-foreground leading-none mb-4"
        >
          FORGE YOUR{" "}
          <span className="text-gradient">LEGACY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Push beyond limits at Muscle Max Fitness with elite coaching, high-energy classes, and real results that last.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#plans"
            className="bg-primary text-primary-foreground font-heading text-2xl tracking-wider px-10 py-4 rounded-md glow-red hover:scale-105 transition-transform"
          >
            JOIN NOW
          </a>
          <a
            href="#programs"
            className="glass font-heading text-2xl tracking-wider px-10 py-4 rounded-md text-foreground hover:bg-foreground/10 transition-colors"
          >
            EXPLORE PLANS
          </a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-0 left-0 right-0 glass"
      >
        <div className="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl md:text-4xl text-primary">
                {stat.value}
              </p>
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
