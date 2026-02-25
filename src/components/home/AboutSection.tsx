import { motion } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";

const stats = [
  { icon: "👑", label: "Team Size", value: "4 Members" },
  { icon: "⏱️", label: "Duration", value: "2 Hours" },
  { icon: "💰", label: "Entry Fee", value: "₹150 per Team" },
  { icon: "🏆", label: "Rounds", value: "4 Rounds of Battle" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-arena-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-foreground mb-3">
            ABOUT THE EVENT
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              <span className="text-primary font-semibold">CHAKRAVYUH 2K26</span> is the ultimate battlefield
              for girl coders. Organized by <span className="text-secondary">FemSpire Club</span> at Raghu
              Engineering College, this event tests your logic, speed, and coding mastery across 4 intense
              rounds. Only the sharpest queens will conquer the Chakravyuh.
            </p>
            <p className="text-muted-foreground mt-4 text-sm">
              Gather your team of 4, sharpen your skills, and step into the arena. This is not just a
              competition — it's a battle royale of code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <GlowCard key={stat.label}>
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</div>
                <div className="text-sm font-semibold text-foreground">{stat.value}</div>
              </GlowCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
