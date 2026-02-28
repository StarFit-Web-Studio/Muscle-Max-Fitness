import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Plans", href: "#plans" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Muscle Max Fitness" className="h-10 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-lg tracking-wider text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#plans"
            className="bg-primary text-primary-foreground font-heading text-lg tracking-wider px-6 py-2 rounded-md hover:bg-primary/90 transition-colors glow-red-sm"
          >
            JOIN NOW
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass mt-2 mx-4 rounded-lg p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-heading text-xl tracking-wider text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#plans"
            onClick={() => setOpen(false)}
            className="bg-primary text-primary-foreground font-heading text-xl tracking-wider px-6 py-3 rounded-md text-center"
          >
            JOIN NOW
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
