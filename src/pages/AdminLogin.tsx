import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import GlowCard from "@/components/ui/GlowCard";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) { toast.error("Fill all fields"); return; }
    setLoading(true);
    try {
      // Validate admin credentials
      const ADMIN_USERNAME = "FemSpire";
      const ADMIN_PASSWORD = "akash@1.2";
      
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        await new Promise((r) => setTimeout(r, 1000));
        localStorage.setItem("admin_token", "demo-token");
        navigate("/admin/dashboard");
        toast.success("Login successful");
      } else {
        toast.error("Invalid credentials");
      }
    } catch {
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:glow-gold transition-all";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        <GlowCard className="text-center">
          <div className="text-3xl mb-3">⚔️</div>
          <h1 className="font-cinzel text-xl font-bold text-foreground mb-1">CHAKRAVYUH ADMIN</h1>
          <p className="text-xs text-muted-foreground mb-6">FemSpire Control Panel</p>
          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className={inputClasses}
            />
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={inputClasses}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-primary"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <GlowButton type="submit" loading={loading} className="w-full">
              LOGIN
            </GlowButton>
          </form>
        </GlowCard>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
