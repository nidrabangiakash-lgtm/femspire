import { motion } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";

const coordinators = [
  { name: "R AADHYA REDDY", role: "Event Coordinator", dept: "2nd Year CSE, Raghu Engineering College", icon: "👑", initials: "AR" },
  { name: "NIDRABANGHIAAKSH", role: "Event Coordinator", dept: "2nd Year CSE, Raghu Engineering College", icon: "⚔️", initials: "NA", phone: "9573309882" },
  { name: "P RAJKUMAR", role: "Technical Head", dept: "2nd Year CSE, Raghu Engineering College", icon: "🛡️", initials: "PR" },
];

const CoordinatorsSection = () => {
  return (
    <section id="coordinators" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-foreground mb-3">
            YOUR COMMANDERS
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {coordinators.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlowCard className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-primary/50 flex items-center justify-center mx-auto mb-4 bg-muted">
                  <span className="font-cinzel text-sm font-bold text-primary">{c.initials}</span>
                </div>
                <div className="text-lg mb-1">{c.icon}</div>
                <h3 className="font-cinzel text-sm font-bold text-foreground mb-1">{c.name}</h3>
                <p className="text-xs text-primary mb-1">{c.role}</p>
                <p className="text-xs text-muted-foreground">{c.dept}</p>
                {c.phone && <p className="text-xs text-muted-foreground mt-2">📞 {c.phone}</p>}
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href="https://www.instagram.com/chakravyuh_official_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            📸 @chakravyuh_official_
          </a>
          <a
            href="https://www.instagram.com/__mr_akash__782"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            📸 @__mr_akash__782
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;
