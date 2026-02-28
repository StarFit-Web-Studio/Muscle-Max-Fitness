import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="section-darker border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="Muscle Max" className="h-12 mb-4" />
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Premium fitness destination building champions since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {["About", "Programs", "Trainers", "Plans", "Schedule", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">WORKING HOURS</h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>Mon - Fri: 5:00 AM - 11:00 PM</li>
              <li>Saturday: 6:00 AM - 10:00 PM</li>
              <li>Sunday: 7:00 AM - 8:00 PM</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">NEWSLETTER</h4>
            <p className="font-body text-sm text-muted-foreground mb-4">
              Get fitness tips and exclusive offers.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed! 🎉");
              }}
              className="flex"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 bg-secondary/50 border border-border rounded-l-md px-4 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground font-heading tracking-wider px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
              >
                JOIN
              </button>
            </form>

            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/muscle_max.fitness/"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © 2025 Muscle Max Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
