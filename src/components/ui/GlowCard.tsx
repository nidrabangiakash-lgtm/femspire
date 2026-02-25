import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "gold" | "purple" | "pink";
}

const GlowCard = ({ children, className, glowColor = "gold" }: GlowCardProps) => {
  const glowClasses = {
    gold: "hover:glow-gold border-primary/20 hover:border-primary/50",
    purple: "hover:glow-purple border-secondary/20 hover:border-secondary/50",
    pink: "hover:glow-pink border-accent/20 hover:border-accent/50",
  };

  return (
    <div
      className={cn(
        "relative bg-card rounded-lg border p-6 transition-all duration-500 hover:-translate-y-1",
        glowClasses[glowColor],
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlowCard;
