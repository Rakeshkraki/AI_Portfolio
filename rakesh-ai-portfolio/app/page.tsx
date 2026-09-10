
"use client";

import { motion } from "framer-motion";

// Sections

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import { Suspense } from "react";
import ErrorBoundary from "@/components/providers/ErrorBoundary";
import LoadingScreen from "@/components/effects/LoadingScreen";
import ParticleBackground from "@/components/effects/ParticleBackground";
import CursorGlow from "@/components/effects/CursorGlow";
import AIChatWidget from "@/components/ai/AIChatWidget";
// Effects

import SectionDivider from "@/components/ui/SectionDivider";
import ScrollReveal from "@/components/ui/ScrollReveal";

import { staggerContainer } from "@/lib/motion";

// ============================================================
// Background Decorations
// ============================================================

function PageDecorations() {
    return (
        <>
            {/* Top Glow */}

            <div className="pointer-events-none fixed left-0 top-0 -z-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

            {/* Right Glow */}

            <div className="pointer-events-none fixed right-0 top-[25%] -z-20 h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-[180px]" />

            {/* Bottom Glow */}

            <div className="pointer-events-none fixed bottom-0 left-[20%] -z-20 h-[550px] w-[550px] rounded-full bg-sky-500/10 blur-[180px]" />

            {/* Radial Overlay */}

            <div className="pointer-events-none fixed inset-0 -z-30 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.04),transparent_60%)]" />
        </>
    );
}
// ============================================================
// Section Wrapper
// ============================================================

function PortfolioSection({
                              children,
                          }: {
    children: React.ReactNode;
}) {
    return (
        <ScrollReveal>
            <section className="relative py-24 lg:py-32">
                {children}
            </section>
        </ScrollReveal>
    );
}
// ============================================================
// Hero Wrapper
// ============================================================

function LandingHero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden"
        >
            <HeroSection />
        </section>
    );
}
// ============================================================
// Page Fade Overlay
// ============================================================

function InitialFade() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="pointer-events-none fixed inset-0 z-[999] bg-[#050816]"
        />
    );
}
// ============================================================
// Decorative Grid Overlay
// ============================================================

function GridOverlay() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-20 opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
    );
}
// ============================================================
// Animated Section Heading Wrapper
// ============================================================

function SectionHeading({
                            label,
                            title,
                        }: {
    label: string;
    title: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
        >
            <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                {label}
            </p>

            <h2 className="hero-gradient mt-5 text-5xl font-bold">
                {title}
            </h2>
        </motion.div>
    );
}
// ============================================================
// Divider Wrapper
// ============================================================

function Divider() {
    return (
        <div className="container-ai py-10">
            <SectionDivider />
        </div>
    );
}
// ============================================================
// About Wrapper
// ============================================================

function AboutPortfolioSection() {
    return (
        <PortfolioSection>
            <div id="about" className="container-ai">
                <SectionHeading
                    label="ABOUT ME"
                    title="Building AI Systems That Scale"
                />

                <AboutSection />
            </div>
        </PortfolioSection>
    );
}
// ============================================================
// Projects Wrapper
// ============================================================

function ProjectsPortfolioSection() {
    return (
        <PortfolioSection>
            <div id="projects" className="container-ai">
                <SectionHeading
                    label="FEATURED AI PROJECTS"
                    title="Real AI Backend Engineering Projects"
                />

                <ProjectsSection />
            </div>
        </PortfolioSection>
    );
}
// ============================================================
// Experience Wrapper
// ============================================================

function ExperiencePortfolioSection() {
    return (
        <PortfolioSection>
            <div id="experience" className="container-ai">
                <SectionHeading
                    label="EXPERIENCE"
                    title="AI Engineering Journey"
                />

                <ExperienceSection />
            </div>
        </PortfolioSection>
    );
}
// ============================================================
// Skills Wrapper
// ============================================================

function SkillsPortfolioSection() {
    return (
        <PortfolioSection>
            <div id="skills" className="container-ai">
                <SectionHeading
                    label="AI SKILLS"
                    title="Modern AI Engineering Stack"
                />

                <SkillsSection />
            </div>
        </PortfolioSection>
    );
}
// ============================================================
// Contact Wrapper
// ============================================================

function ContactPortfolioSection() {
    return (
        <PortfolioSection>
            <div id="contact" className="container-ai">
                <SectionHeading
                    label="CONTACT"
                    title="Let's Build AI Together"
                />

                <ContactSection />
            </div>
        </PortfolioSection>
    );
}
// ============================================================
// Section Transition Glow
// ============================================================

function TransitionGlow() {
    return (
        <div className="pointer-events-none relative h-32 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-48 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
        </div>
    );
}
// ============================================================
// Floating Navigation Dots
// ============================================================

const navigationDots = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

function FloatingNavigation() {
    return (
        <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 lg:flex flex-col gap-4">
            {navigationDots.map((item) => (
                <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    whileHover={{ scale: 1.3 }}
                    className="group relative flex items-center"
                >
                    <div className="h-3 w-3 rounded-full bg-cyan-400/60 transition-all group-hover:bg-cyan-300 group-hover:shadow-[0_0_12px_rgba(34,211,238,.8)]" />

                    <span className="absolute right-6 rounded-full border border-cyan-400/20 bg-black/80 px-3 py-1 text-xs text-cyan-300 opacity-0 transition group-hover:opacity-100 whitespace-nowrap">
            {item.label}
          </span>
                </motion.a>
            ))}
        </div>
    );
}
// ============================================================
// Floating Scroll To Top
// ============================================================

function FloatingScrollTop() {
    return (
        <motion.a
            href="#home"
            whileHover={{ scale: 1.08, y: -4 }}
            className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-black/60 backdrop-blur-xl text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,.2)]"
        >
            ↑
        </motion.a>
    );
}
// ============================================================
// Command Palette Button
// ============================================================

function CommandPaletteButton() {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            className="fixed bottom-8 left-8 z-50 hidden lg:flex items-center gap-3 rounded-full border border-violet-400/20 bg-black/60 backdrop-blur-xl px-5 py-3 text-sm text-violet-300 shadow-[0_0_25px_rgba(139,92,246,.2)]"
        >
            ✨ AI Menu

            <span className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-400">
        Ctrl K
      </span>
        </motion.button>
    );
}
// ============================================================
// Parallax Background Layers
// ============================================================

function ParallaxLayers() {
    return (
        <>
            <motion.div
                animate={{ y: [0, -25, 0] }}
                transition={{ repeat: Infinity, duration: 12 }}
                className="pointer-events-none fixed left-[10%] top-[20%] -z-20 h-56 w-56 rounded-full bg-cyan-400/5 blur-[120px]"
            />

            <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ repeat: Infinity, duration: 14 }}
                className="pointer-events-none fixed right-[12%] top-[35%] -z-20 h-72 w-72 rounded-full bg-violet-500/5 blur-[150px]"
            />

            <motion.div
                animate={{ y: [0, -35, 0] }}
                transition={{ repeat: Infinity, duration: 16 }}
                className="pointer-events-none fixed left-[40%] bottom-[8%] -z-20 h-64 w-64 rounded-full bg-sky-500/5 blur-[150px]"
            />
        </>
    );
}
// ============================================================
// Floating Availability Badge
// ============================================================

function AvailabilityBadge() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="fixed left-1/2 top-6 z-50 hidden -translate-x-1/2 lg:flex items-center gap-3 rounded-full border border-green-400/20 bg-black/60 backdrop-blur-xl px-5 py-2"
        >
            <div className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,.8)] animate-pulse" />

            <span className="text-sm text-green-300">
        Available for AI Backend Engineer Roles
      </span>
        </motion.div>
    );
}
// ============================================================
// Progress HUD
// ============================================================

const portfolioSections = [
    "Hero",
    "About",
    "Projects",
    "Experience",
    "Skills",
    "Contact",
];

function PortfolioHUD() {
    return (
        <div className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
            <div className="glass-card rounded-[24px] border border-cyan-400/10 p-5">
                <p className="mono mb-4 text-xs tracking-[0.35em] text-cyan-300/70">
                    PORTFOLIO
                </p>

                <div className="space-y-3">
                    {portfolioSections.map((section, index) => (
                        <div key={section} className="flex items-center gap-3">
                            <div
                                className={`h-2 w-2 rounded-full ${
                                    index === 0
                                        ? "bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,.8)]"
                                        : "bg-slate-600"
                                }`}
                            />

                            <span className="text-xs text-slate-400">
                {section}
              </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
// ============================================================
// Mobile Safe Padding
// ============================================================

function MobileSafeArea({
                            children,
                        }: {
    children: React.ReactNode;
}) {
    return (
        <div className="pb-24 md:pb-28">
            {children}
        </div>
    );
}

// ============================================================
// Homepage
// ============================================================
// ============================================================
// Hidden SEO Heading
// ============================================================

function SEOHeading() {
    return (
        <h1 className="sr-only">
            Rakesh K — AI Backend Engineer specializing in GraphRAG, GPT-5,
            LangGraph, FastAPI, Neo4j, Qdrant and AI Infrastructure.
        </h1>
    );
}
// ============================================================
// Suspense Wrapper
// ============================================================

function PageSuspense({
                          children,
                      }: {
    children: React.ReactNode;
}) {
    return (
        <Suspense fallback={<LoadingScreen />}>
            {children}
        </Suspense>
    );
}
// ============================================================
// Error Boundary Wrapper
// ============================================================

function SafePage({
                      children,
                  }: {
    children: React.ReactNode;
}) {
    return <ErrorBoundary>{children}</ErrorBoundary>;
}
// ============================================================
// End of Portfolio Banner
// ============================================================

function EndBanner() {
    return (
        <section className="relative overflow-hidden py-28">
            <div className="container-ai">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[44px] border border-cyan-400/15 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-sky-500/10 p-12 text-center"
                >
                    <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300 text-3xl"
                    >
                        ✨
                    </motion.div>

                    <p className="mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
                        THANK YOU
                    </p>

                    <h2 className="hero-gradient mt-5 text-5xl font-bold">
                        Let's Build Intelligent AI Together
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Passionate about GraphRAG, Agentic AI, AI Infrastructure,
                        FastAPI, Retrieval Systems and scalable backend engineering.
                    </p>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="#contact"
                        className="btn-primary mt-10 inline-flex items-center gap-3"
                    >
                        Contact Me →
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
// ============================================================
// Scroll Restoration
// ============================================================

function ScrollRestoration() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-x-0 top-0 z-[999]"
        />
    );
}

export default function HomePage() {
    return (
        <main className="relative overflow-hidden bg-[#050816] text-white">
            {/* Floating UI */}

            <ParticleBackground/>
            <CursorGlow/>
            <ScrollRestoration/>

            <AIChatWidget />

            <InitialFade/>

            <PageDecorations/>

            <GridOverlay/>

            <ParallaxLayers/>

            <AvailabilityBadge/>

            <FloatingNavigation/>

            <PortfolioHUD/>

            <CommandPaletteButton/>

            <FloatingScrollTop/>

            <MobileSafeArea>
                <SafePage>
                    <PageSuspense>
                        <SEOHeading/>

                        <motion.div
                            variants={staggerContainer(0.12)}
                            initial="hidden"
                            animate="visible"
                        >
                            {/* Hero */}

                            <LandingHero/>

                            <Divider/>

                            <AboutPortfolioSection/>

                            <TransitionGlow/>

                            <ProjectsPortfolioSection/>

                            <TransitionGlow/>

                            <ExperiencePortfolioSection/>

                            <TransitionGlow/>

                            <SkillsPortfolioSection/>

                            <TransitionGlow/>

                            <ContactPortfolioSection/>

                            <EndBanner/>

                            <Footer/>
                        </motion.div>
                    </PageSuspense>
                </SafePage>
            </MobileSafeArea>
        </main>
    );
}
