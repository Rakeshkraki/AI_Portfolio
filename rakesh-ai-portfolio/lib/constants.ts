
export const PROFILE = {
    name: "Rakesh Kumar",
    title: "AI Backend Engineer",

    subtitle:
        "Building GraphRAG systems, AI Agents, LLM APIs and Enterprise AI Backend platforms.",

    email: "rakeshkumar@example.com",

    location: "Bengaluru, Karnataka, India",

    status: "Available for Opportunities",

    resume: "/resume/Rakesh-Kumar-AI-Backend-Engineer.pdf",

    github: "https://github.com/yourusername",

    linkedin: "https://linkedin.com/in/yourlinkedin",
};

export const PERSONAL_INFO = PROFILE;

export const HERO_METRICS = [
    { label: "AI Projects", value: "20+" },
    { label: "FastAPI APIs", value: "15+" },
    { label: "GraphRAG Pipelines", value: "06" },
    { label: "Experience", value: "3+ Years" },
];

export const SYSTEM_STATUS = [
    { label: "GPT-5 API", status: "Online" },
    { label: "Neo4j Graph", status: "Healthy" },
    { label: "Vector Database", status: "Connected" },
    { label: "FastAPI Backend", status: "Running" },
];

export const NAV_ITEMS = [
    { id: "home", label: "Home", href: "home" },
    { id: "about", label: "About", href: "about" },
    { id: "experience", label: "Experience", href: "experience" },
    { id: "projects", label: "Projects", href: "projects" },
    { id: "skills", label: "Skills", href: "skills" },
    { id: "dashboard", label: "Dashboard", href: "dashboard" },
    { id: "contact", label: "Contact", href: "contact" },
];

export const NAV_LINKS = NAV_ITEMS;

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: "github",
        url: PROFILE.github,
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        url: PROFILE.linkedin,
    },
    {
        name: "Email",
        icon: "mail",
        url: `mailto:${PROFILE.email}`,
    },
];