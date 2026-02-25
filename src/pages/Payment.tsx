import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlowButton from "@/components/ui/GlowButton";
import GlowCard from "@/components/ui/GlowCard";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const teamId = searchParams.get("teamId") || "";
  const [utr, setUtr] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File must be under 5MB");
      return;
    }
    setScreenshot(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!utr.trim()) { toast.error("Enter UTR number"); return; }
    if (!screenshot) { toast.error("Upload payment screenshot"); return; }
    setLoading(true);
    try {
      // In production, call submitPayment(formData)
      await new Promise((r) => setTimeout(r, 1500));
      setSubmitted(true);
      toast.success("Payment submitted!");
    } catch {
      toast.error("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:glow-gold transition-all";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-gold-gradient mb-2">
              COMPLETE YOUR PAYMENT
            </h1>
            <p className="text-muted-foreground text-sm">Scan the QR code and pay ₹150</p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <GlowCard className="text-center max-w-lg mx-auto">
                <div className="text-4xl mb-4">🎉</div>
                <h2 className="font-cinzel text-xl font-bold text-foreground mb-2">Payment Submitted!</h2>
                <p className="text-muted-foreground text-sm mb-4">
                  Your registration is under review.<br />
                  Team ID: <span className="text-primary font-semibold">{teamId}</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  You will receive confirmation emails once approved.<br />
                  For queries: 9573309882 (NIDRABANGHIAAKSH)
                </p>
              </GlowCard>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <GlowCard>
                  <h2 className="font-cinzel text-lg font-semibold text-foreground mb-4">💳 Payment QR</h2>
                  <div className="bg-muted rounded-lg p-2 flex items-center justify-center mb-4 border border-border min-h-[200px]">
                    <img
                      src="/qr-payment.jpg"
                      alt="Payment QR Code"
                      className="max-w-full h-auto rounded-lg shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.setAttribute('style', 'display: block');
                      }}
                    />
                    <div className="text-center hidden">
                      <div className="text-6xl mb-3">📱</div>
                      <p className="text-xs text-muted-foreground">QR Code Image</p>
                      <p className="text-xs text-muted-foreground">(Place qr-payment.jpg in /public)</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">UPI ID: <span className="text-foreground font-mono">9573309882@mbkns</span></p>
                    <p className="text-muted-foreground">Name: <span className="text-foreground uppercase">NIDRABANGHIAAKSH</span></p>
                    <p className="text-muted-foreground">Amount: <span className="text-primary font-bold">₹150</span></p>
                    <p className="text-xs text-muted-foreground italic">Scan the QR or use details above</p>
                  </div>
                </GlowCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <GlowCard>
                  <h2 className="font-cinzel text-lg font-semibold text-foreground mb-4">Confirm Your Payment</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Team ID</label>
                      <input value={teamId} readOnly className={`${inputClasses} opacity-60`} />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">UTR / Transaction ID</label>
                      <input
                        value={utr}
                        onChange={(e) => setUtr(e.target.value)}
                        placeholder="Enter 12-digit UTR number"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Payment Screenshot</label>
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/jpg"
                        onChange={handleFileChange}
                        className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-border file:text-sm file:bg-muted file:text-foreground hover:file:bg-primary/10 file:transition-colors"
                      />
                      {preview && (
                        <img src={preview} alt="Preview" className="mt-3 rounded-lg max-h-40 border border-border" />
                      )}
                    </div>
                    <GlowButton type="submit" size="lg" loading={loading} className="w-full">
                      ✅ Submit Payment Proof
                    </GlowButton>
                  </form>
                </GlowCard>
              </motion.div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
