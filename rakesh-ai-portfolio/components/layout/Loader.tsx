"use client";

// ============================================================
// components/layout/Loader.tsx
// AI Boot Sequence Loader
// ============================================================

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Database, Network, Cpu, Activity } from "lucide-react";

import { useSystemStore } from "@/store/systemStore";

interface BootStep {
  id: number;
  icon: React.ElementType;
  label: string;
  delay: number;
}

const bootSteps: BootStep[] = [
  {
    id: 1,
    icon: Database,
    label: "LOADING KNOWLEDGE GRAPH",
    delay: 800,
  },
  {
    id: 2,
    icon: Network,
    label: "LOADING AGENT NETWORK",
    delay: 1600,
  },
  {
    id: 3,
    icon: Brain,
    label: "LOADING REASONING ENGINE",
    delay: 2400,
  },
  {
    id: 4,
    icon: Cpu,
    label: "INITIALIZING INFERENCE ENGINE",
    delay: 3200,
  },
  {
    id: 5,
    icon: Activity,
    label: "STARTING OBSERVABILITY SYSTEM",
    delay: 4000,
  },
];

export default function Loader() {
  const completeBoot = useSystemStore((state) => state.completeBoot);
  const loaderVisible = useSystemStore((state) => state.loaderVisible);

  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // Random binary stream
  const binary = useMemo(() => {
    return Array.from({ length: 160 }, () =>
      Math.random() > 0.5 ? "1" : "0"
    ).join("");
  }, []);

  useEffect(() => {
    let progressValue = 0;

    const interval = setInterval(() => {
      progressValue += Math.random() * 6;

      if (progressValue >= 100) {
        progressValue = 100;
      }

      setProgress(progressValue);

      const currentStep = Math.min(
        Math.floor(progressValue / 20),
        bootSteps.length
      );

      setActiveStep(currentStep);

      if (progressValue === 100) {
        clearInterval(interval);

        setTimeout(() => {
          completeBoot();
        }, 800);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [completeBoot]);

  return (
    <AnimatePresence>
      {loaderVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030405]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: {
              duration: 1,
            },
          }}
        >
          {/* Background Glow */}
          <div className="absolute h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />

          <div className="absolute h-[300px] w-[300px] rounded-full border border-cyan-400/10 animate-ping" />

          {/* Grid Overlay */}
          <div className="absolute inset-0 grid-background opacity-20" />

          {/* Main Content */}
          <div className="relative z-10 w-full max-w-3xl px-8">
            {/* Top Status */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-cyan-300/70"
            >
              <span>AI INFRASTRUCTURE BOOT</span>

              <span>{progress.toFixed(0)}%</span>
            </motion.div>

            {/* Core */}
            <div className="mb-12 flex flex-col items-center">
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  boxShadow: [
                    "0 0 10px rgba(34,211,238,.2)",
                    "0 0 60px rgba(34,211,238,.7)",
                    "0 0 10px rgba(34,211,238,.2)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10"
              >
                <Brain className="h-10 w-10 text-cyan-300" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="display-text text-center text-4xl md:text-6xl hero-gradient"
              >
                INITIALIZING SYSTEM
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="subtitle mt-4 text-center"
              >
                ENTERING AI INFRASTRUCTURE
              </motion.p>
            </div>

            {/* Progress Bar */}
            <div className="mb-12">
              <div className="mb-3 flex justify-between text-xs font-mono uppercase text-slate-500">
                <span>BOOT PROGRESS</span>
                <span>{progress.toFixed(0)}%</span>
              </div>

              <div className="h-[6px] overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500"
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Boot Steps */}
            <div className="space-y-4">
              {bootSteps.map((step, index) => {
                const Icon = step.icon;
                const completed = index < activeStep;
                const active = index === activeStep;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: completed || active ? 1 : 0.35,
                      x: 0,
                    }}
                    className={`glass-card flex items-center justify-between p-4 transition-all duration-500 ${
                      active
                        ? "border-cyan-400/40 bg-cyan-500/5"
                        : completed
                        ? "border-green-400/30 bg-green-500/5"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`rounded-full p-2 ${
                          completed
                            ? "bg-green-500/20 text-green-400"
                            : active
                            ? "bg-cyan-500/20 text-cyan-300"
                            : "bg-white/5 text-slate-500"
                        }`}
                      >
                        {/*<Icon size={18 />*/}
                      </div>

                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
                          MODULE {step.id}
                        </p>

                        <p className="mt-1 text-sm font-medium tracking-wide text-white">
                          {step.label}
                        </p>
                      </div>
                    </div>

                    <div className="font-mono text-xs uppercase">
                      {completed ? (
                        <span className="text-green-400">READY</span>
                      ) : active ? (
                        <motion.span
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                          }}
                          className="text-cyan-300"
                        >
                          LOADING
                        </motion.span>
                      ) : (
                        <span className="text-slate-600">PENDING</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Binary Stream */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              className="mt-12 overflow-hidden rounded-xl border border-white/5 bg-black/30 p-4"
            >
              <p className="font-mono text-[10px] leading-4 tracking-widest text-cyan-300/60 break-all">
                {binary}
              </p>
            </motion.div>

            {/* Footer */}
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="mt-8 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/60"
            >
              <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22D3EE]" />
              PRODUCTION AI ENGINEER SYSTEM
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}