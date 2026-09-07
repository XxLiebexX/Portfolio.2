export interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  highlights: string[];
  tech: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: { name: string; level?: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Yuvraj Singh",
    handle: "XxLiebexX",
    role: "AI/ML Enthusiast | Full-Stack Developer",
    status: "Open to AI/ML, Software Engineering & Full-Stack Internships",
    location: "Greater Noida, India",
    education: "B.Tech in Computer Science & Engineering (Bennett University, 2023–2027)",
    cgpa: "7.9 CGPA",
    bio: "Building intelligent systems, real-time applications, and quantum research — turning ambitious ideas into production-ready software.",
    socials: {
      github: "https://github.com/XxLiebexX",
      leetcode: "https://leetcode.com/u/Liebe_/",
      linkedin: "https://www.linkedin.com/in/yuvraj-singh-31a691282/",
      portfolio: "https://portfolio-three-ashen-87.vercel.app/",
      email: "yuv21998@gmail.com",
      resume: "https://github.com/XxLiebexX",
    },
  },

  skills: [
    {
      title: "AI & Machine Learning",
      icon: "Brain",
      color: "from-cyan-500/20 to-blue-600/20 border-cyan-500/30",
      skills: [
        { name: "Python" },
        { name: "Scikit-learn" },
        { name: "Pandas & NumPy" },
        { name: "Matplotlib & Seaborn" },
        { name: "Generative AI" },
        { name: "LLM APIs & Prompting" },
        { name: "RAG Pipelines" },
        { name: "LangGraph" },
      ],
    },
    {
      title: "Full-Stack Development",
      icon: "Code2",
      color: "from-purple-500/20 to-indigo-600/20 border-purple-500/30",
      skills: [
        { name: "React.js" },
        { name: "Next.js (App Router)" },
        { name: "TypeScript" },
        { name: "FastAPI" },
        { name: "Node.js" },
        { name: "WebSockets" },
        { name: "Tailwind CSS" },
        { name: "REST APIs" },
      ],
    },
    {
      title: "Quantum Computing & Research",
      icon: "Atom",
      color: "from-emerald-500/20 to-teal-600/20 border-emerald-500/30",
      skills: [
        { name: "Qiskit" },
        { name: "Quantum Key Distribution (QKD)" },
        { name: "BB84 & B92 Protocols" },
        { name: "QBER Analysis" },
        { name: "Shannon Entropy" },
        { name: "Quantum Error Modeling" },
      ],
    },
    {
      title: "Databases & Systems",
      icon: "Database",
      color: "from-amber-500/20 to-orange-600/20 border-amber-500/30",
      skills: [
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "MySQL" },
        { name: "SQLite" },
        { name: "Normalized DB Design" },
        { name: "Git & GitHub CI" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "customer-churn",
      title: "Customer Churn Prediction Engine",
      category: "AI / Machine Learning",
      badge: "87% ROC-AUC",
      description:
        "End-to-end machine learning pipeline identifying customers at risk of churn with advanced feature engineering, model tuning, and low-latency inference.",
      highlights: [
        "Trained ensemble models (Random Forest, Gradient Boosting) achieving 87% ROC-AUC.",
        "Built automated data cleaning, imputation, and feature transformation pipeline.",
        "Deployed high-throughput FastAPI inference endpoint for real-time risk scoring.",
      ],
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "FastAPI", "SQL"],
      metrics: [
        { label: "ROC-AUC Score", value: "87%" },
        { label: "Inference Latency", value: "< 25ms" },
        { label: "Feature Pipeline", value: "End-to-End" },
      ],
      githubUrl: "https://github.com/XxLiebexX/customer-churn-predictor",
      featured: true,
    },
    {
      id: "qkd-platform",
      title: "Quantum Key Distribution (QKD) Simulator",
      category: "Quantum Research / Information Theory",
      badge: "4 Protocols Simulated",
      description:
        "Interactive quantum cryptography research platform simulating secure key exchange, eavesdropping detection, and channel noise analysis.",
      highlights: [
        "Implemented BB84, B92, and decoy-state protocols using IBM Qiskit quantum circuits.",
        "Calculated Quantum Bit Error Rate (QBER) and theoretical Shannon mutual information.",
        "Modeled depolarizing noise channels and Eve intercept-resend attack scenarios.",
      ],
      tech: ["Python", "Qiskit", "NumPy", "Pandas", "Matplotlib", "Information Theory"],
      metrics: [
        { label: "Simulated Trials", value: "500+" },
        { label: "Error Reduction", value: "18%" },
        { label: "Analysis Speedup", value: "3x" },
      ],
      githubUrl: "https://github.com/XxLiebexX/QKD",
      liveUrl: "https://qbit-secure-5.vercel.app/",
      featured: true,
    },
    {
      id: "signal-clone",
      title: "Signal Real-Time Messenger Architecture",
      category: "Full-Stack / Real-Time Systems",
      badge: "WebSockets Engine",
      description:
        "Full-stack secure messaging web application inspired by Signal, featuring ultra-low latency duplex communication, robust session management, and persistent messaging.",
      highlights: [
        "Architected real-time WebSocket communication engine with auto-reconnection and heartbeat pinging.",
        "Engineered normalized 7-table database schema with optimized indexing for message retrieval.",
        "Developed 20+ backend REST & WebSocket endpoints using FastAPI and TypeScript.",
      ],
      tech: ["Next.js", "TypeScript", "FastAPI", "WebSockets", "SQLite", "Tailwind CSS"],
      metrics: [
        { label: "Backend Endpoints", value: "20+" },
        { label: "DB Schema", value: "7 Normalized Tables" },
        { label: "Messaging Latency", value: "< 15ms" },
      ],
      githubUrl: "https://github.com/XxLiebexX/signal-clone",
      liveUrl: "https://signal-clone-by1nvehln-yuv21998-gmailcoms-projects.vercel.app/",
      featured: true,
    },
  ] as Project[],

  experience: [
    {
      period: "2025 (Jan – May)",
      role: "AI & Quantum Research Engineer",
      organization: "Quantum Computing Lab — Bennett University",
      location: "Greater Noida, India",
      description:
        "Conducted deep computational simulations on quantum key distribution protocols and cryptographic security under decoherence channels.",
      highlights: [
        "Executed 500+ quantum protocol simulations across 4 standard QKD configurations.",
        "Achieved an 18% quantum key error rate reduction through optimized reconciliation thresholds.",
        "Accelerated post-simulation statistical analysis pipeline by 3x using vectorization.",
      ],
      tags: ["Qiskit", "Quantum Cryptography", "Python", "Statistical Modeling"],
    },
    {
      period: "2023 — 2027",
      role: "B.Tech in Computer Science & Engineering",
      organization: "Bennett University (Times Group)",
      location: "Greater Noida, India",
      description:
        "Specializing in Artificial Intelligence, Machine Learning, Data Structures, and Systems Architecture. Active contributor to technical research projects.",
      highlights: [
        "Current CGPA: 7.9 / 10.0",
        "Focused coursework: Data Structures, Machine Learning, Operating Systems, Database Management Systems.",
      ],
      tags: ["Computer Science", "Algorithms", "Software Engineering"],
    },
  ] as ExperienceItem[],
};
