import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Verma",
    text: "Muscle Max completely transformed my life. I lost 20 kg in 6 months and gained confidence I never thought possible. The trainers here genuinely care.",
    role: "Member since 2021",
  },
  {
    name: "Sneha Kapoor",
    text: "The energy in this gym is unmatched. From the equipment to the coaches, everything is premium. I've tried many gyms but nothing comes close.",
    role: "Member since 2022",
  },
  {
    name: "Amit Patel",
    text: "Best investment I've made. The personalized nutrition plan and dedicated coaching helped me prepare for my first marathon.",
    role: "Member since 2023",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 section-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-heading text-5xl md:text-6xl text-foreground">
            WHAT MEMBERS SAY
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto text-center relative">
          <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
              "{testimonials[current].text}"
            </p>
            <p className="font-heading text-xl text-primary">
              {testimonials[current].name}
            </p>
            <p className="font-body text-sm text-muted-foreground">
              {testimonials[current].role}
            </p>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
