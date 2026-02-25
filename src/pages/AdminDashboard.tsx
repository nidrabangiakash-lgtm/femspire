import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import GlowCard from "@/components/ui/GlowCard";

interface Registration {
  id: string;
  teamName: string;
  college: string;
  members: { name: string; email: string; phone: string }[];
  utr: string;
  screenshot: string;
  status: "Pending" | "Approved" | "Rejected";
}

const demoData: Registration[] = [
  {
    id: "CQ2K26-A1B2",
    teamName: "Code Queens",
    college: "Raghu Engineering College",
    members: [
      { name: "Priya S", email: "priya@mail.com", phone: "9876543210" },
      { name: "Sneha R", email: "sneha@mail.com", phone: "9876543211" },
      { name: "Divya K", email: "divya@mail.com", phone: "9876543212" },
      { name: "Meera P", email: "meera@mail.com", phone: "9876543213" },
    ],
    utr: "123456789012",
    screenshot: "",
    status: "Pending",
  },
  {
    id: "CQ2K26-C3D4",
    teamName: "Binary Blaze",
    college: "GITAM University",
    members: [
      { name: "Ananya T", email: "ananya@mail.com", phone: "9876543220" },
      { name: "Riya M", email: "riya@mail.com", phone: "9876543221" },
      { name: "Kavya N", email: "kavya@mail.com", phone: "9876543222" },
      { name: "Sana A", email: "sana@mail.com", phone: "9876543223" },
    ],
    utr: "987654321098",
    screenshot: "",
    status: "Approved",
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState<Registration[]>(demoData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [rejectModal, setRejectModal] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) navigate("/admin/login");
  }, [navigate]);

  const filteredRegs = registrations.filter((r) => {
    const matchesSearch =
      r.teamName.toLowerCase().includes(search.toLowerCase()) ||
      r.college.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || r.status === filter;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: registrations.length,
    pending: registrations.filter((r) => r.status === "Pending").length,
    approved: registrations.filter((r) => r.status === "Approved").length,
    rejected: registrations.filter((r) => r.status === "Rejected").length,
  };

  const handleApprove = (id: string) => {
    setRegistrations((prev) => prev.map((r) => (r.id === id ? { ...r, status: "Approved" } : r)));
    toast.success("Registration approved");
  };

  const handleReject = () => {
    if (!rejectModal || !rejectReason.trim()) { toast.error("Enter a reason"); return; }
    setRegistrations((prev) => prev.map((r) => (r.id === rejectModal ? { ...r, status: "Rejected" } : r)));
    setRejectModal(null);
    setRejectReason("");
    toast.success("Registration rejected");
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    navigate("/admin/login");
  };

  const statusBadge = (status: string) => {
    const colors: Record<string, string> = {
      Pending: "bg-primary/20 text-primary",
      Approved: "bg-green-500/20 text-green-400",
      Rejected: "bg-destructive/20 text-destructive",
    };
    return <span className={`text-xs px-2 py-0.5 rounded-full ${colors[status] || ""}`}>{status}</span>;
  };

  const inputClasses =
    "bg-muted border border-border rounded-lg px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all";

  return (
    <div className="min-h-screen bg-background">
      {/* Top nav */}
      <div className="sticky top-0 z-40 bg-card/90 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-14">
          <span className="font-cinzel text-sm font-bold text-primary">⚔️ CHAKRAVYUH ADMIN PANEL</span>
          <button onClick={handleLogout} className="text-xs text-muted-foreground hover:text-destructive transition-colors">
            Logout
          </button>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: "Total", value: stats.total, color: "text-foreground" },
            { label: "Pending", value: stats.pending, color: "text-primary" },
            { label: "Approved", value: stats.approved, color: "text-green-400" },
            { label: "Rejected", value: stats.rejected, color: "text-destructive" },
          ].map((s) => (
            <GlowCard key={s.label}>
              <div className={`text-2xl font-bold font-cinzel ${s.color}`}>{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </GlowCard>
          ))}
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by team or college..."
            className={`${inputClasses} flex-1`}
          />
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className={inputClasses}>
            <option>All</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
          <GlowButton size="sm" variant="outline" onClick={() => toast.info("CSV export coming soon")}>
            📥 Download CSV
          </GlowButton>
        </div>

        {/* Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          {/* Desktop header */}
          <div className="hidden md:grid grid-cols-7 gap-4 px-4 py-3 bg-muted text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            <span>Team ID</span>
            <span>Team Name</span>
            <span>College</span>
            <span>UTR</span>
            <span>Status</span>
            <span className="col-span-2 text-right">Actions</span>
          </div>

          {filteredRegs.map((reg) => (
            <div key={reg.id} className="border-t border-border">
              <div
                className="grid grid-cols-1 md:grid-cols-7 gap-2 md:gap-4 px-4 py-3 cursor-pointer hover:bg-muted/50 transition-colors items-center"
                onClick={() => setExpandedId(expandedId === reg.id ? null : reg.id)}
              >
                <span className="text-xs text-primary font-mono">{reg.id}</span>
                <span className="text-sm text-foreground font-semibold">{reg.teamName}</span>
                <span className="text-xs text-muted-foreground">{reg.college}</span>
                <span className="text-xs text-muted-foreground font-mono">{reg.utr}</span>
                <div>{statusBadge(reg.status)}</div>
                <div className="col-span-2 flex gap-2 justify-end" onClick={(e) => e.stopPropagation()}>
                  {reg.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleApprove(reg.id)}
                        className="text-xs px-3 py-1 rounded bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors"
                      >
                        ✅ Approve
                      </button>
                      <button
                        onClick={() => setRejectModal(reg.id)}
                        className="text-xs px-3 py-1 rounded bg-destructive/20 text-destructive hover:bg-destructive/30 transition-colors"
                      >
                        ❌ Reject
                      </button>
                    </>
                  )}
                </div>
              </div>

              {expandedId === reg.id && (
                <div className="px-4 pb-4">
                  <div className="bg-muted rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {reg.members.map((m, i) => (
                      <div key={i} className="text-xs space-y-0.5">
                        <div className="font-semibold text-foreground">
                          {i === 0 ? "👑" : "⚔️"} Member {i + 1}{i === 0 && " (Captain)"}
                        </div>
                        <div className="text-muted-foreground">{m.name}</div>
                        <div className="text-muted-foreground">{m.email}</div>
                        <div className="text-muted-foreground">{m.phone}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {filteredRegs.length === 0 && (
            <div className="px-4 py-12 text-center text-muted-foreground text-sm">No registrations found</div>
          )}
        </div>
      </main>

      {/* Reject modal */}
      {rejectModal && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <GlowCard className="w-full max-w-md" glowColor="pink">
            <h3 className="font-cinzel text-lg font-bold text-foreground mb-3">Reject Registration</h3>
            <p className="text-sm text-muted-foreground mb-4">Enter reason for rejection:</p>
            <textarea
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="Reason..."
              className={`${inputClasses} w-full min-h-[80px] resize-none`}
            />
            <div className="flex gap-3 mt-4 justify-end">
              <GlowButton variant="outline" size="sm" onClick={() => { setRejectModal(null); setRejectReason(""); }}>
                Cancel
              </GlowButton>
              <button
                onClick={handleReject}
                className="text-sm px-4 py-2 rounded-lg bg-destructive text-destructive-foreground hover:opacity-90 transition-opacity"
              >
                Confirm Reject
              </button>
            </div>
          </GlowCard>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
