import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";

const RegisterCTA = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(51_100%_50%_/_0.05)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-gold-gradient mb-4">
            ARE YOU READY, QUEEN?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 text-sm md:text-base">
            Gather your team of 4 and enter the arena. Registration fee: ₹150 per team.
          </p>
          <Link to="/register">
            <GlowButton size="lg" className="animate-gold-pulse">⚔️ REGISTER NOW — ₹150</GlowButton>
          </Link>
          <p className="text-xs text-muted-foreground mt-6 tracking-wider">
            Limited Slots Available • Girls Only • Team of 4
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterCTA;
