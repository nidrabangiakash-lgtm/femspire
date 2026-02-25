import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  size?: "default" | "lg" | "sm";
  loading?: boolean;
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "primary", size = "default", loading, children, disabled, ...props }, ref) => {
    const baseClasses =
      "relative inline-flex items-center justify-center gap-2 font-cinzel font-semibold tracking-wider uppercase transition-all duration-300 rounded-lg disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-primary text-primary-foreground hover:glow-gold-strong glow-gold border border-primary/50",
      outline:
        "bg-transparent text-primary border border-primary/60 hover:bg-primary/10 hover:glow-gold",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      default: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

GlowButton.displayName = "GlowButton";
export default GlowButton;
