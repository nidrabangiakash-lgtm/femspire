import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import GlowButton from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Rounds", href: "/#rounds" },
  { label: "Venue", href: "/#venue" },
  { label: "Contact", href: "/#coordinators" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg md:text-xl font-cinzel font-bold text-primary">
            ⚔️ CHAKRAVYUH 2K26
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
            >
              {link.label === "Home" ? (
                <Link to="/" className="text-inherit no-underline">{link.label}</Link>
              ) : (
                link.label
              )}
            </button>
          ))}
          <Link to="/register">
            <GlowButton size="sm">Register Now</GlowButton>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={cn("block h-0.5 bg-primary transition-all", mobileOpen && "rotate-45 translate-y-2")} />
            <span className={cn("block h-0.5 bg-primary transition-all", mobileOpen && "opacity-0")} />
            <span className={cn("block h-0.5 bg-primary transition-all", mobileOpen && "-rotate-45 -translate-y-2")} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-muted-foreground hover:text-primary text-left py-2 uppercase tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <Link to="/register" onClick={() => setMobileOpen(false)}>
              <GlowButton size="sm" className="w-full">Register Now</GlowButton>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
