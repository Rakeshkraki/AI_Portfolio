import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";

import "./globals.css";

import Providers from "@/components/providers/Providers";
import AnalyticsProvider from "@/components/providers/AnalyticsProvider";

import CursorGlow from "@/components/effects/CursorGlow";
import ScrollProgress from "@/components/effects/ScrollProgress";
import AnimatedBackground from "@/components/effects/AnimatedBackground";
import PageTransition from "@/components/effects/PageTransition";
import LoadingScreen from "@/components/effects/LoadingScreen";
import FloatingParticles from "@/components/effects/FloatingParticles";
import KeyboardShortcuts from "@/components/effects/KeyboardShortcuts";


// ============================================================
// Fonts
// ============================================================

const geist = Geist({
    variable: "--font-geist",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

// ============================================================
// Site Configuration
// ============================================================

const siteConfig = {
    name: "Rakesh Kumar",
    shortName: "Rakesh K",
    title: "AI Backend Engineer",
    url: "https://yourdomain.com",
    description:
        "AI Backend Engineer specializing in GraphRAG, LangGraph, GPT-5, FastAPI, Neo4j, Qdrant, AI Infrastructure and Multi-Agent Systems.",
    locale: "en_US",
    image: "/og-image.png",
    profileImage: "/profile.png",
    github: "https://github.com/rakesh-ai",
    linkedin: "https://linkedin.com/in/rakesh-ai",
};

// ============================================================
// Viewport
// ============================================================

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    colorScheme: "dark",
    themeColor: "#050816",
};

// ============================================================
// SEO Metadata
// ============================================================

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),

    title: {
        default: `${siteConfig.shortName} | ${siteConfig.title}`,
        template: `%s | ${siteConfig.shortName}`,
    },

    description: siteConfig.description,

    keywords: [
        "AI Backend Engineer",
        "GenAI Engineer",
        "GraphRAG",
        "LangGraph",
        "GPT-5",
        "FastAPI",
        "Neo4j",
        "Qdrant",
        "Vector Database",
        "AI Infrastructure",
        "Multi-Agent Systems",
        "Python AI",
        "LLM Backend",
        "RAG Engineer",
        "Retrieval Augmented Generation",
    ],

    authors: [
        {
            name: siteConfig.name,
        },
    ],

    creator: siteConfig.name,
    publisher: siteConfig.name,

    alternates: {
        canonical: "/",
    },

    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    referrer: "origin-when-cross-origin",

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },

    manifest: "/site.webmanifest",

    appleWebApp: {
        capable: true,
        title: `${siteConfig.name} AI Portfolio`,
        statusBarStyle: "black-translucent",
    },

    openGraph: {
        title: `${siteConfig.name} | ${siteConfig.title}`,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: `${siteConfig.name} Portfolio`,
        locale: siteConfig.locale,
        type: "website",

        images: [
            {
                url: siteConfig.image,
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} - ${siteConfig.title}`,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.name} | ${siteConfig.title}`,
        description: siteConfig.description,

        images: [siteConfig.image],
    },

    robots: {
        index: true,
        follow: true,

        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    verification: {
        // Replace this with your real Google Search Console verification code.
        google: "GOOGLE_SEARCH_CONSOLE_CODE",
    },
};

// ============================================================
// Person JSON-LD
// ============================================================

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: siteConfig.name,
    jobTitle: siteConfig.title,

    description: siteConfig.description,

    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.profileImage}`,

    sameAs: [
        siteConfig.github,
        siteConfig.linkedin,
    ],

    knowsAbout: [
        "GraphRAG",
        "LangGraph",
        "GPT-5",
        "FastAPI",
        "Neo4j",
        "Qdrant",
        "Vector Databases",
        "AI Infrastructure",
        "Multi-Agent Systems",
        "Retrieval-Augmented Generation",
        "Python",
        "Large Language Models",
    ],

    address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressCountry: "India",
    },
};

// ============================================================
// Website JSON-LD
// ============================================================

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: `${siteConfig.name} AI Portfolio`,
    url: siteConfig.url,

    description:
        "Portfolio of an AI Backend Engineer building GraphRAG systems, AI infrastructure, LangGraph workflows and scalable FastAPI services.",

    inLanguage: "en-US",

    author: {
        "@type": "Person",
        name: siteConfig.name,
    },
};

// ============================================================
// Global Background
// ============================================================

function GlobalBackground() {
    return (
        <>
            {/* Base background */}
            <div className="fixed inset-0 -z-50 bg-[#050816]" />

            {/* Cyan glow */}
            <div
                className="
                    fixed
                    left-[-10%]
                    top-0
                    -z-40
                    h-[600px]
                    w-[600px]
                    rounded-full
                    bg-cyan-500/10
                    blur-[140px]
                "
            />

            {/* Purple glow */}
            <div
                className="
                    fixed
                    bottom-[-15%]
                    right-[-10%]
                    -z-40
                    h-[600px]
                    w-[600px]
                    rounded-full
                    bg-violet-600/10
                    blur-[180px]
                "
            />

            {/* Center radial gradient */}
            <div
                className="
                    fixed
                    inset-0
                    -z-40
                    bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_60%)]
                "
            />

            {/* Noise */}
            <div
                className="
                    pointer-events-none
                    fixed
                    inset-0
                    -z-30
                    bg-[url('/noise.png')]
                    opacity-[0.03]
                    mix-blend-soft-light
                "
            />
        </>
    );
}

// ============================================================
// Global Effects
// ============================================================

function GlobalEffects() {
    return (
        <>
            <AnimatedBackground />
            <FloatingParticles />
            <CursorGlow />
            <ScrollProgress />

            {/* Ambient top glow */}
            <div
                className="
                    pointer-events-none
                    fixed
                    inset-0
                    -z-20
                    bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.05),transparent_50%)]
                "
            />

            {/* Ambient bottom glow */}
            <div
                className="
                    pointer-events-none
                    fixed
                    bottom-0
                    left-0
                    right-0
                    -z-20
                    h-[300px]
                    bg-gradient-to-t
                    from-cyan-500/5
                    to-transparent
                "
            />
        </>
    );
}

// ============================================================
// Accessibility
// ============================================================

function SkipNavigation() {
    return (
        <a
            href="#home"
            className="
                sr-only
                focus:not-sr-only
                focus:fixed
                focus:left-6
                focus:top-6
                focus:z-[9999]
                focus:rounded-full
                focus:bg-cyan-400
                focus:px-5
                focus:py-3
                focus:font-medium
                focus:text-black
                focus:outline-none
                focus:ring-2
                focus:ring-white
            "
        >
            Skip to content
        </a>
    );
}

// ============================================================
// Layout
// ============================================================

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className="scroll-smooth"
        >
        <head>
            {/* JSON-LD: Person */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personSchema),
                }}
            />

            {/* JSON-LD: Website */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
        </head>

        <body
            className={`
                    ${geist.variable}
                    ${geistMono.variable}
                    ${spaceGrotesk.variable}

                    min-h-screen
                    overflow-x-hidden
                    bg-[#050816]
                    text-white
                    antialiased

                    selection:bg-cyan-400/30
                    selection:text-white
                `}
        >

        <Providers>
            <SkipNavigation />

            <GlobalBackground />

            <LoadingScreen />

            <GlobalEffects />

            <KeyboardShortcuts />

            <PageTransition>
                <main className="relative z-20">
                    {children}
                </main>
            </PageTransition>

            <AnalyticsProvider />
        </Providers>
        </body>
        </html>
    );
}
