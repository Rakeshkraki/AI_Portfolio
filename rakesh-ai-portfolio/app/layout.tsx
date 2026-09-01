import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geist = Geist({
    variable: "--font-geist",
    subsets: ["latin"],
});

const mono = Geist_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://rakeshk.vercel.app"),

    title: {
        default: "Rakesh K — Production AI Engineer",
        template: "%s | Rakesh K",
    },

    description:
        "Production AI Engineer specializing in LLM Systems, GraphRAG, Multi-Agent AI, Knowledge Graphs, Vector Databases, LLMOps, and scalable AI Infrastructure.",

    keywords: [
        "Rakesh K",
        "Production AI Engineer",
        "LLM",
        "GenAI",
        "GraphRAG",
        "LangGraph",
        "LangChain",
        "Neo4j",
        "Qdrant",
        "Knowledge Graph",
        "Vector Database",
        "LLMOps",
        "FastAPI",
        "Python",
        "Machine Learning",
        "AI Infrastructure",
    ],

    authors: [{ name: "Rakesh K" }],
    creator: "Rakesh K",

    openGraph: {
        title: "Rakesh K — Production AI Engineer",
        description:
            "Building Production-Grade AI Systems using LLMs, RAG, Agents, Vector Databases and Knowledge Graphs.",
        siteName: "Rakesh K Portfolio",
        type: "website",
        locale: "en_US",
    },

    twitter: {
        card: "summary_large_image",
        title: "Rakesh K — Production AI Engineer",
        description:
            "Production AI Engineer building scalable AI infrastructure and LLM applications.",
    },

    robots: {
        index: true,
        follow: true,
    },

    icons: {
        icon: "/icons/favicon.ico",
        shortcut: "/icons/favicon.ico",
        apple: "/icons/apple-touch-icon.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`
          ${geist.variable}
          ${mono.variable}
          ${spaceGrotesk.variable}
          bg-background text-white antialiased overflow-x-hidden
        `}
        >
        {/* Global Background */}
        <div className="fixed inset-0 -z-50 bg-background">
            {/* Gradient */}
            <div className="absolute inset-0 gradient-background" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 grid-background opacity-30" />

            {/* Glow */}
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

            <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[160px]" />

            {/* Noise */}
            <div className="absolute inset-0 noise-background opacity-[0.04]" />
        </div>

        {/* Main App */}
        <main className="relative min-h-screen">{children}</main>
        </body>
        </html>
    );
}