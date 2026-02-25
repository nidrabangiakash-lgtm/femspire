import { motion } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";
import CountdownTimer from "@/components/ui/CountdownTimer";

const VenueSection = () => {
  return (
    <section id="venue" className="py-20 md:py-28 bg-arena-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-foreground mb-3">
            THE ARENA
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <GlowCard className="text-center">
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-foreground">
                <span className="text-xl">📅</span>
                <span className="text-sm">Date: <span className="text-primary font-semibold">Coming Soon</span></span>
              </div>
              <div className="flex items-center justify-center gap-3 text-foreground">
                <span className="text-xl">⏰</span>
                <span className="text-sm">Time: <span className="text-primary font-semibold">To Be Announced</span></span>
              </div>
              <div className="flex items-center justify-center gap-3 text-foreground">
                <span className="text-xl">📍</span>
                <span className="text-sm">Raghu Engineering College, Visakhapatnam</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-foreground">
                <span className="text-xl">🏫</span>
                <span className="text-sm">CSE Department</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-foreground">
                <span className="text-xl">👩‍💻</span>
                <span className="text-sm">Organized by: FemSpire Club — 2nd Year CSE</span>
              </div>
            </div>
          </GlowCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="font-cinzel text-sm tracking-widest text-muted-foreground mb-6">BATTLE BEGINS IN</p>
          <div className="flex justify-center">
            <CountdownTimer targetDate="2026-03-15T09:00:00" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
