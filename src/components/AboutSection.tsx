import { motion } from "framer-motion";
import aboutImg from "@/assets/about-gym.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-darker">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={aboutImg}
              alt="Inside Muscle Max Fitness"
              className="rounded-lg w-full object-cover aspect-[4/5]"
            />
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-12 h-1 bg-primary mb-6" />
            <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
              OUR STORY
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Founded in 2020, Muscle Max Fitness was born from a single belief:
              that everyone deserves access to world-class training. What started
              as a small garage gym has grown into a premium fitness destination
              serving over 500 dedicated members.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Our state-of-the-art facility features the latest equipment,
              expert coaches, and a community that pushes you beyond your limits.
              We don't just build bodies — we build champions.
            </p>
            <blockquote className="border-l-4 border-primary pl-6">
              <p className="font-body text-foreground italic text-lg">
                "Strength doesn't come from what you can do. It comes from
                overcoming the things you once thought you couldn't."
              </p>
              <cite className="font-body text-primary mt-2 block text-sm not-italic">
                — Founder, Muscle Max Fitness
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
