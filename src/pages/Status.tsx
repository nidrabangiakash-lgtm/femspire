import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlowButton from "@/components/ui/GlowButton";
import GlowCard from "@/components/ui/GlowCard";

const Status = () => {
  const [teamId, setTeamId] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { teamName: string; status: string; message: string }>(null);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamId.trim()) { toast.error("Enter your Team ID"); return; }
    setLoading(true);
    try {
      // In production, call checkStatus(teamId)
      await new Promise((r) => setTimeout(r, 1000));
      setStatus({ teamName: "Demo Team", status: "Pending", message: "Your registration is under review." });
    } catch {
      toast.error("Could not find team");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:glow-gold transition-all";

  const statusColors: Record<string, string> = {
    Pending: "bg-primary/20 text-primary",
    Approved: "bg-green-500/20 text-green-400",
    Rejected: "bg-destructive/20 text-destructive",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="font-cinzel text-3xl font-bold text-gold-gradient mb-2">CHECK STATUS</h1>
            <p className="text-muted-foreground text-sm">Enter your Team ID to check registration status</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <GlowCard>
              <form onSubmit={handleCheck} className="space-y-4">
                <input
                  value={teamId}
                  onChange={(e) => setTeamId(e.target.value)}
                  placeholder="Enter Team ID (e.g. CQ2K26-XXXX)"
                  className={inputClasses}
                />
                <GlowButton type="submit" loading={loading} className="w-full">
                  🔍 Check Status
                </GlowButton>
              </form>

              {status && (
                <div className="mt-6 p-4 bg-muted rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-cinzel text-sm font-semibold text-foreground">{status.teamName}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${statusColors[status.status] || ""}`}>
                      {status.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{status.message}</p>
                </div>
              )}
            </GlowCard>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Status;
