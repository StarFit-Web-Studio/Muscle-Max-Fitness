import { motion } from "framer-motion";

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

type ClassEntry = { time: string; name: string; color: string };

const schedule: Record<string, ClassEntry[]> = {
  MON: [
    { time: "6:00 AM", name: "Strength", color: "bg-primary/20 text-primary" },
    { time: "8:00 AM", name: "Yoga", color: "bg-green-500/20 text-green-400" },
    { time: "5:00 PM", name: "HIIT", color: "bg-orange-500/20 text-orange-400" },
    { time: "7:00 PM", name: "Boxing", color: "bg-blue-500/20 text-blue-400" },
  ],
  TUE: [
    { time: "6:00 AM", name: "Cardio", color: "bg-yellow-500/20 text-yellow-400" },
    { time: "9:00 AM", name: "CrossFit", color: "bg-purple-500/20 text-purple-400" },
    { time: "5:00 PM", name: "Strength", color: "bg-primary/20 text-primary" },
    { time: "7:00 PM", name: "Yoga", color: "bg-green-500/20 text-green-400" },
  ],
  WED: [
    { time: "6:00 AM", name: "HIIT", color: "bg-orange-500/20 text-orange-400" },
    { time: "8:00 AM", name: "Boxing", color: "bg-blue-500/20 text-blue-400" },
    { time: "5:00 PM", name: "Cardio", color: "bg-yellow-500/20 text-yellow-400" },
    { time: "7:00 PM", name: "Strength", color: "bg-primary/20 text-primary" },
  ],
  THU: [
    { time: "6:00 AM", name: "Yoga", color: "bg-green-500/20 text-green-400" },
    { time: "9:00 AM", name: "Strength", color: "bg-primary/20 text-primary" },
    { time: "5:00 PM", name: "CrossFit", color: "bg-purple-500/20 text-purple-400" },
    { time: "7:00 PM", name: "HIIT", color: "bg-orange-500/20 text-orange-400" },
  ],
  FRI: [
    { time: "6:00 AM", name: "Boxing", color: "bg-blue-500/20 text-blue-400" },
    { time: "8:00 AM", name: "Cardio", color: "bg-yellow-500/20 text-yellow-400" },
    { time: "5:00 PM", name: "Strength", color: "bg-primary/20 text-primary" },
    { time: "7:00 PM", name: "CrossFit", color: "bg-purple-500/20 text-purple-400" },
  ],
  SAT: [
    { time: "7:00 AM", name: "HIIT", color: "bg-orange-500/20 text-orange-400" },
    { time: "9:00 AM", name: "Yoga", color: "bg-green-500/20 text-green-400" },
    { time: "11:00 AM", name: "Boxing", color: "bg-blue-500/20 text-blue-400" },
  ],
  SUN: [
    { time: "8:00 AM", name: "Yoga", color: "bg-green-500/20 text-green-400" },
    { time: "10:00 AM", name: "Open Gym", color: "bg-muted text-muted-foreground" },
  ],
};

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-24 section-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-heading text-5xl md:text-6xl text-foreground">
            CLASS SCHEDULE
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="min-w-[700px] grid grid-cols-7 gap-3">
            {days.map((day) => (
              <div key={day}>
                <div className="font-heading text-lg text-primary text-center mb-4">
                  {day}
                </div>
                <div className="space-y-2">
                  {schedule[day].map((entry, i) => (
                    <div
                      key={i}
                      className={`rounded-md p-3 ${entry.color} text-center cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-200`}
                    >
                      <p className="font-heading text-sm">{entry.name}</p>
                      <p className="font-body text-xs opacity-70">{entry.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
