"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    // Github,
    // Linkedin,
    Send,
    MapPin,
    CheckCircle2,
    Loader2,
} from "lucide-react";

import emailjs from "@emailjs/browser";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const INITIAL_FORM: ContactForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export default function ContactSection() {
    const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

    const updateField = (
        field: keyof ContactForm,
        value: string
    ) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const validate = () => {
        return (
            form.name.trim() &&
            form.email.trim() &&
            form.subject.trim() &&
            form.message.trim()
        );
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!validate()) {
            setStatus("error");
            return;
        }

        setLoading(true);
        setStatus("idle");

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: form.name,
                    from_email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setStatus("success");
            setForm(INITIAL_FORM);
        } catch (error) {
            console.error(error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="section-spacing relative">
            <div className="container-ai">
                {/* Header */}

                <ScrollReveal>
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="badge-glow">Contact</span>

                        <h2 className="section-title mt-6">
                            Let's Build AI Products Together
                        </h2>

                        <p className="section-description mt-6">
                            I'm open to AI Backend Engineer, GenAI Platform Engineer,
                            GraphRAG Engineer, and LLM Infrastructure opportunities.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    {/* Left Panel */}

                    <ScrollReveal direction="left">
                        <div className="glass-card rounded-card h-full p-8">
                            <h3 className="text-2xl font-semibold text-white">
                                Contact Information
                            </h3>

                            <p className="mt-4 leading-8 text-slate-300">
                                Interested in AI backend development, GraphRAG,
                                enterprise LLM APIs, or AI infrastructure?
                                Feel free to reach out.
                            </p>

                            <div className="mt-10 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="icon-box-sm">
                                        <Mail size={20} />
                                    </div>

                                    <div>
                                        <p className="text-sm text-slate-400">Email</p>

                                        <a
                                            href={`mailto:${PERSONAL_INFO.email}`}
                                            className="text-white hover:text-cyan-400"
                                        >
                                            {PERSONAL_INFO.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="icon-box-sm">
                                        <MapPin size={20} />
                                    </div>

                                    <div>
                                        <p className="text-sm text-slate-400">Location</p>

                                        <p className="text-white">
                                            Bengaluru, Karnataka, India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Availability */}

                            <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5">
                                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                                    Availability
                                </p>

                                <h4 className="mt-3 text-xl font-semibold text-white">
                                    Available for Full-Time AI Backend Roles
                                </h4>

                                <p className="mt-3 text-slate-300">
                                    Open to remote, hybrid, and onsite AI engineering
                                    opportunities.
                                </p>
                            </div>

                            {/* Social Links */}

                            <div className="mt-10">
                                <h4 className="mb-4 text-white font-medium">
                                    Connect With Me
                                </h4>

                                <div className="flex gap-4">
                                    {SOCIAL_LINKS.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="icon-box-sm border-soft hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-400 transition"
                                        >
                                            {/*{social.icon === "github" && (*/}
                                            {/*     <Github size={20} />*/}
                                            {/*)}*/}

                                            {/*{social.icon === "linkedin" && (*/}
                                            {/*     <Linkedin size={20} />*/}
                                            {/*)}*/}

                                            {social.icon === "mail" && (
                                                <Mail size={20} />
                                            )}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact Form */}

                    <ScrollReveal direction="right">
                        <motion.form
                            onSubmit={handleSubmit}
                            className="glass-card rounded-card space-y-6 p-8"
                        >
                            <div>
                                <label className="mb-2 block text-sm text-slate-400">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) =>
                                        updateField("name", e.target.value)
                                    }
                                    placeholder="Rakesh K"
                                    className="input-field"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm text-slate-400">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) =>
                                        updateField("email", e.target.value)
                                    }
                                    placeholder="you@example.com"
                                    className="input-field"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm text-slate-400">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    value={form.subject}
                                    onChange={(e) =>
                                        updateField("subject", e.target.value)
                                    }
                                    placeholder="AI Backend Engineer Opportunity"
                                    className="input-field"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm text-slate-400">
                                    Message
                                </label>

                                <textarea
                                    rows={6}
                                    value={form.message}
                                    onChange={(e) =>
                                        updateField("message", e.target.value)
                                    }
                                    placeholder="Tell me about your AI project or opportunity..."
                                    className="input-field resize-none"
                                />
                            </div>

                            {/* Status Messages */}

                            {status === "success" && (
                                <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-emerald-300">
                                    <CheckCircle2 size={20} />

                                    <span>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                                </div>
                            )}

                            {status === "error" && (
                                <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-300">
                                    Please fill all fields correctly or try again later.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="btn-primary w-full justify-center"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </motion.form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}