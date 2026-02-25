import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINS" },
    { value: timeLeft.seconds, label: "SECS" },
  ];

  return (
    <div className="flex items-center gap-3 md:gap-4">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 md:gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-card border border-primary/30 rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-cinzel font-bold text-primary">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[10px] md:text-xs text-muted-foreground mt-1 tracking-widest">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-xl text-primary/50 font-bold mb-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
