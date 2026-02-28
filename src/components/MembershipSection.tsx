import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    duration: "1 Month",
    price: "₹1,999",
    popular: false,
    features: ["Full Gym Access", "Locker Facility", "1 Fitness Assessment", "Basic Workout Plan"],
  },
  {
    name: "PRO",
    duration: "3 Months",
    price: "₹4,999",
    popular: true,
    features: ["Full Gym Access", "All Group Classes", "Personal Trainer (2x/week)", "Nutrition Guidance", "Locker + Towel Service", "Monthly Body Analysis"],
  },
  {
    name: "ELITE",
    duration: "6 Months",
    price: "₹8,999",
    popular: false,
    features: ["Full Gym Access", "Unlimited Group Classes", "Personal Trainer (4x/week)", "Custom Nutrition Plan", "Premium Locker", "Sauna & Steam Access"],
  },
];

const annualPlan = {
  name: "CHAMPION",
  duration: "12 Months",
  price: "₹14,999",
  bonus: "3 Months FREE",
  features: [
    "Everything in ELITE",
    "Unlimited Personal Training",
    "Priority Class Booking",
    "Free Merchandise Kit",
    "Guest Passes (4/month)",
    "24/7 Gym Access",
    "Quarterly Health Checkup",
  ],
};

const MembershipSection = () => {
  return (
    <section id="plans" className="py-24 section-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-heading text-5xl md:text-6xl text-foreground">
            MEMBERSHIP PLANS
          </h2>
          <p className="font-body text-muted-foreground mt-4">
            Choose the plan that fits your goals
          </p>
        </motion.div>

        {/* 3 tier grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass rounded-lg p-8 relative flex flex-col ${
                plan.popular ? "glow-border" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-heading text-sm tracking-wider px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="font-heading text-2xl text-foreground">{plan.name}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4">{plan.duration}</p>
              <p className="font-heading text-5xl text-foreground mb-1">{plan.price}</p>
              <p className="font-body text-xs text-muted-foreground mb-6">per {plan.duration.toLowerCase()}</p>
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center font-heading text-lg tracking-wider py-3 rounded-md transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground glow-red-sm hover:scale-105"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                GET STARTED
              </a>
            </motion.div>
          ))}
        </div>

        {/* Annual plan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-lg p-8 md:p-12 glow-border relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground font-heading tracking-wider px-6 py-2 rounded-bl-lg text-sm">
            {annualPlan.bonus}
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-3xl text-foreground mb-1">
                {annualPlan.name} — {annualPlan.duration}
              </h3>
              <p className="font-heading text-5xl text-gradient mb-2">{annualPlan.price}</p>
              <p className="font-body text-muted-foreground text-sm">
                Best value • Includes {annualPlan.bonus}
              </p>
            </div>
            <div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {annualPlan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-block bg-primary text-primary-foreground font-heading text-xl tracking-wider px-10 py-3 rounded-md glow-red hover:scale-105 transition-transform"
              >
                CLAIM THIS DEAL
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipSection;
