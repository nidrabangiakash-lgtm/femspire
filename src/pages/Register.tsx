import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlowButton from "@/components/ui/GlowButton";

interface MemberFields {
  name: string;
  email: string;
  phone: string;
}

interface FormData {
  teamName: string;
  collegeName: string;
  members: MemberFields[];
}

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      teamName: "",
      collegeName: "",
      members: [
        { name: "", email: "", phone: "" },
        { name: "", email: "", phone: "" },
        { name: "", email: "", phone: "" },
        { name: "", email: "", phone: "" },
      ],
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      // In production, call registerTeam(data)
      const teamId = "CQ2K26-" + Math.random().toString(36).substring(2, 6).toUpperCase();
      toast.success("Registration submitted!");
      navigate(`/payment?teamId=${teamId}`);
    } catch {
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:glow-gold transition-all";
  const errorClasses = "text-xs text-destructive mt-1";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-gold-gradient mb-2">
              ENTER THE ARENA
            </h1>
            <p className="text-muted-foreground text-sm">Fill in your team details to begin</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >
            {/* Team Details */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h2 className="font-cinzel text-lg font-semibold text-foreground mb-2">⚔️ Team Details</h2>
              <div>
                <input
                  {...register("teamName", { required: "Team name is required", minLength: { value: 3, message: "Min 3 characters" } })}
                  placeholder="Team Name"
                  className={inputClasses}
                />
                {errors.teamName && <p className={errorClasses}>{errors.teamName.message}</p>}
              </div>
              <div>
                <input
                  {...register("collegeName", { required: "College name is required" })}
                  placeholder="College Name"
                  className={inputClasses}
                />
                {errors.collegeName && <p className={errorClasses}>{errors.collegeName.message}</p>}
              </div>
            </div>

            {/* Members */}
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h2 className="font-cinzel text-sm font-semibold text-foreground">
                  ⚔️ Member {i + 1} {i === 0 && "— Team Captain"}
                </h2>
                <div>
                  <input
                    {...register(`members.${i}.name` as const, { required: "Name is required" })}
                    placeholder="Full Name"
                    className={inputClasses}
                  />
                  {errors.members?.[i]?.name && <p className={errorClasses}>{errors.members[i]?.name?.message}</p>}
                </div>
                <div>
                  <input
                    {...register(`members.${i}.email` as const, {
                      required: "Email is required",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                    })}
                    placeholder="Email Address"
                    type="email"
                    className={inputClasses}
                  />
                  {errors.members?.[i]?.email && <p className={errorClasses}>{errors.members[i]?.email?.message}</p>}
                </div>
                <div>
                  <input
                    {...register(`members.${i}.phone` as const, {
                      required: "Phone is required",
                      pattern: { value: /^\d{10}$/, message: "Enter 10-digit number" },
                    })}
                    placeholder="Phone Number"
                    type="tel"
                    className={inputClasses}
                  />
                  {errors.members?.[i]?.phone && <p className={errorClasses}>{errors.members[i]?.phone?.message}</p>}
                </div>
              </div>
            ))}

            <GlowButton type="submit" size="lg" loading={loading} className="w-full">
              Proceed to Payment →
            </GlowButton>
          </motion.form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
