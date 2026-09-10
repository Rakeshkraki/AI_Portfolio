"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Upload,
    FileText,
    CheckCircle2,
    AlertTriangle,
    Sparkles,
    TrendingUp,
    BrainCircuit,
} from "lucide-react";

const REQUIRED_SKILLS = [
    "Python",
    "FastAPI",
    "GraphRAG",
    "Neo4j",
    "LangChain",
    "LangGraph",
    "OpenAI API",
    "Docker",
    "PostgreSQL",
    "Redis",
    "Vector Database",
    "Kubernetes",
];

const SUGGESTIONS = [
    "Add measurable achievements for AI projects.",
    "Include GraphRAG and Knowledge Graph experience.",
    "Mention FastAPI microservices and async APIs.",
    "Highlight LLM integration (GPT-5 / Claude / Gemini).",
    "Include Docker, Redis, PostgreSQL, and deployment skills.",
];

export default function ResumeAnalyzer() {
    const [fileName, setFileName] = useState("");
    const [resumeText, setResumeText] = useState("");
    const [analyzed, setAnalyzed] = useState(false);

    const handleFileUpload = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setFileName(file.name);

        const text = await file.text();
        setResumeText(text);
        setAnalyzed(true);
    };

    const result = useMemo(() => {
        if (!resumeText) {
            return {
                atsScore: 0,
                matchedSkills: [],
                missingSkills: REQUIRED_SKILLS,
            };
        }

        const lower = resumeText.toLowerCase();

        const matchedSkills = REQUIRED_SKILLS.filter((skill) =>
            lower.includes(skill.toLowerCase())
        );

        const missingSkills = REQUIRED_SKILLS.filter(
            (skill) => !matchedSkills.includes(skill)
        );

        const atsScore = Math.min(
            100,
            Math.round((matchedSkills.length / REQUIRED_SKILLS.length) * 100)
        );

        return {
            atsScore,
            matchedSkills,
            missingSkills,
        };
    }, [resumeText]);

    return (
        <section className="glass-card rounded-card p-8">
            {/* Header */}

            <div className="text-center">
                <span className="badge-glow">AI Resume Analyzer</span>

                <h2 className="mt-6 text-3xl font-bold text-white">
                    ATS Resume Score for AI Backend Engineers
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-slate-400">
                    Upload a resume and instantly check ATS compatibility, AI skill
                    coverage, keyword match, missing technologies, and improvement
                    suggestions.
                </p>
            </div>

            {/* Upload */}

            <div className="mt-12 rounded-3xl border border-dashed border-cyan-400/20 bg-cyan-500/5 p-8 text-center">
                <label className="cursor-pointer">
                    <input
                        type="file"
                        accept=".txt,.md"
                        onChange={handleFileUpload}
                        className="hidden"
                    />

                    <div className="flex flex-col items-center gap-4">
                        <div className="icon-box h-16 w-16 rounded-full">
                            <Upload size={30} />
                        </div>

                        <h3 className="text-xl font-semibold text-white">
                            Upload Resume (.txt or .md)
                        </h3>

                        <p className="text-sm text-slate-400">
                            Frontend demo — later connect this to FastAPI/OpenAI for PDF/DOCX
                            parsing.
                        </p>

                        {fileName && (
                            <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">
                                {fileName}
                            </div>
                        )}
                    </div>
                </label>
            </div>

            {/* Results */}

            <AnimatePresence>
                {analyzed && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-14 space-y-10"
                    >
                        {/* ATS Score */}

                        <div className="dashboard-card rounded-card p-8 text-center">
                            <TrendingUp
                                size={42}
                                className="mx-auto text-cyan-400"
                            />

                            <h3 className="mt-4 text-lg text-slate-400">
                                ATS Compatibility Score
                            </h3>

                            <div className="mt-6 flex justify-center">
                                <div className="relative h-40 w-40">
                                    <svg viewBox="0 0 160 160">
                                        <circle
                                            cx="80"
                                            cy="80"
                                            r="68"
                                            stroke="rgba(255,255,255,0.08)"
                                            strokeWidth="10"
                                            fill="none"
                                        />

                                        <motion.circle
                                            cx="80"
                                            cy="80"
                                            r="68"
                                            stroke="#22d3ee"
                                            strokeWidth="10"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeDasharray={427}
                                            initial={{ strokeDashoffset: 427 }}
                                            animate={{
                                                strokeDashoffset:
                                                    427 -
                                                    (427 * result.atsScore) / 100,
                                            }}
                                            transition={{ duration: 1 }}
                                            transform="rotate(-90 80 80)"
                                        />

                                        <text
                                            x="80"
                                            y="88"
                                            textAnchor="middle"
                                            fill="#ffffff"
                                            fontSize="28"
                                            fontWeight="700"
                                        >
                                            {result.atsScore}
                                        </text>

                                        <text
                                            x="80"
                                            y="108"
                                            textAnchor="middle"
                                            fill="#94a3b8"
                                            fontSize="12"
                                        >
                                            ATS Score
                                        </text>
                                    </svg>
                                </div>
                            </div>

                            <p className="mt-4 text-cyan-300">
                                {result.matchedSkills.length} of{" "}
                                {REQUIRED_SKILLS.length} AI Backend skills detected.
                            </p>
                        </div>

                        {/* Skills */}

                        <div className="grid gap-8 lg:grid-cols-2">
                            {/* Matched */}

                            <div className="rounded-card border border-emerald-400/20 bg-emerald-500/5 p-6">
                                <div className="mb-6 flex items-center gap-3">
                                    <CheckCircle2 className="text-emerald-400" />

                                    <h3 className="text-xl font-semibold text-white">
                                        Matched Skills
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {result.matchedSkills.length > 0 ? (
                                        result.matchedSkills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300"
                                            >
                        {skill}
                      </span>
                                        ))
                                    ) : (
                                        <p className="text-slate-400">
                                            No matching AI backend skills found.
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Missing */}

                            <div className="rounded-card border border-orange-400/20 bg-orange-500/5 p-6">
                                <div className="mb-6 flex items-center gap-3">
                                    <AlertTriangle className="text-orange-400" />

                                    <h3 className="text-xl font-semibold text-white">
                                        Missing Keywords
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {result.missingSkills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full bg-orange-500/10 px-3 py-2 text-sm text-orange-300"
                                        >
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Suggestions */}

                        <div className="glass-card rounded-card p-8">
                            <div className="mb-6 flex items-center gap-3">
                                <Sparkles className="text-cyan-400" />

                                <h3 className="text-2xl font-semibold text-white">
                                    AI Resume Suggestions
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {SUGGESTIONS.map((tip) => (
                                    <div
                                        key={tip}
                                        className="flex items-start gap-3 rounded-xl border border-cyan-400/10 bg-cyan-500/5 p-4"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="mt-1 text-cyan-400"
                                        />

                                        <p className="text-slate-300">{tip}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Resume Preview */}

                        <div className="dashboard-card rounded-card p-8">
                            <div className="mb-5 flex items-center gap-3">
                                <FileText className="text-cyan-400" />

                                <h3 className="text-2xl font-semibold text-white">
                                    Resume Preview
                                </h3>
                            </div>

                            <div className="max-h-80 overflow-y-auto rounded-xl border border-white/10 bg-black/20 p-4">
                <pre className="whitespace-pre-wrap text-sm leading-7 text-slate-300">
                  {resumeText}
                </pre>
                            </div>
                        </div>

                        {/* AI Summary */}

                        <div className="rounded-card border border-cyan-400/15 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-8">
                            <div className="mb-5 flex items-center gap-3">
                                <BrainCircuit className="text-cyan-400" />

                                <h3 className="text-xl font-semibold text-white">
                                    AI Resume Summary
                                </h3>
                            </div>

                            <p className="leading-8 text-slate-300">
                                This resume demonstrates{" "}
                                <strong>{result.atsScore}%</strong> alignment with a modern AI
                                Backend Engineer role. Improve keyword coverage by mentioning
                                missing AI technologies, GraphRAG implementations, LLM APIs,
                                FastAPI microservices, Docker deployment, and measurable project
                                outcomes.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}