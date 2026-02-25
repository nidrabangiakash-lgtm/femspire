import { motion } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";

const rounds = [
  {
    num: "01",
    title: "MCQ Questions",
    icon: "🧠",
    glow: "purple" as const,
    desc: "Test your theoretical knowledge across CS fundamentals. Speed and accuracy will define your rank.",
  },
  {
    num: "02",
    title: "Code Puzzle",
    icon: "🔐",
    glow: "gold" as const,
    desc: "Decode complex programming puzzles. Think outside the box and crack the pattern.",
  },
  {
    num: "03",
    title: "Code Debugging",
    icon: "🐛",
    glow: "pink" as const,
    desc: "Hunt down bugs hidden in broken code. Fix it fast or fall behind.",
  },
  {
    num: "04",
    title: "Blind Coding",
    icon: "⚔️",
    glow: "gold" as const,
    desc: "The final test. Code without seeing the output. Pure instinct. Pure skill. Pure queen energy.",
  },
];

const RoundsSection = () => {
  return (
    <section id="rounds" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-foreground mb-2">
            THE BATTLEFIELD
          </h2>
          <p className="text-muted-foreground text-sm">4 Rounds of Pure Combat</p>
          <div className="w-24 h-0.5 bg-primary mx-auto mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {rounds.map((round, i) => (
            <motion.div
              key={round.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlowCard glowColor={round.glow} className="h-full">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{round.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-cinzel text-primary/60 tracking-wider">ROUND {round.num}</span>
                    </div>
                    <h3 className="font-cinzel text-lg font-bold text-foreground mb-2">{round.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{round.desc}</p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoundsSection;
