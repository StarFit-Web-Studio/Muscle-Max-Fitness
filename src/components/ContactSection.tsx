import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 section-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-heading text-5xl md:text-6xl text-foreground">
            GET IN TOUCH
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden h-[400px] md:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.510984087725!2d73.8749363733494!3d18.460499471010095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebce1ae1913b%3A0x3080da68a08eccca!2sMuscle%20Max%20Fitness!5e0!3m2!1sen!2sin!4v1772258264723!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              title="Muscle Max Location"
            />
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-lg p-8 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-heading text-xl tracking-wider py-3 rounded-md glow-red-sm hover:scale-[1.02] transition-transform"
              >
                SEND MESSAGE
              </button>
            </form>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-body text-sm text-muted-foreground">+91 72100 73007</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-body text-sm text-muted-foreground">info@musclemax.in</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-body text-sm text-muted-foreground">Kondhwa, Pune, Maharashtra 411037</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-body text-sm text-muted-foreground">5 AM - 11 PM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
