import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";
import trainer1 from "@/assets/trainer1.jpg";
import trainer2 from "@/assets/trainer2.jpg";
import trainer3 from "@/assets/trainer3.jpg";

const trainers = [
  { name: "ARJUN MEHTA", role: "Strength & Conditioning", bio: "10+ years of competitive powerlifting experience. Certified NSCA coach.", img: trainer1 },
  { name: "PRIYA SHARMA", role: "HIIT & Functional Training", bio: "Former national-level athlete. Specializes in body transformation programs.", img: trainer2 },
  { name: "VIKRAM SINGH", role: "Boxing & MMA", bio: "Professional boxing coach with 8+ years of ring experience.", img: trainer3 },
];

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-24 section-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-heading text-5xl md:text-6xl text-foreground">
            MEET OUR TRAINERS
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay with bio */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                  <p className="font-body text-foreground text-center text-sm mb-4">
                    {t.bio}
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors">
                      <Instagram className="w-4 h-4 text-primary" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors">
                      <Twitter className="w-4 h-4 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl text-foreground">{t.name}</h3>
                <p className="font-body text-sm text-primary">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
