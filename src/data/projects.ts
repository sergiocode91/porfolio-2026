export interface Project {
  name: string;
  description: string;
  year: string;
  tech: string[];
  link: string;
  image: string;
  category: string;
}

export const projects: Project[] = [
  {
    name: "Nexus Platform",
    description: "A comprehensive dashboard for managing enterprise cloud infrastructure with real-time monitoring.",
    year: "2025",
    tech: ["Astro", "React", "Tailwind"],
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=450",
    category: "Development",
  },
  {
    name: "Aura Design System",
    description: "A headless, minimalist design system focused on accessibility and motion design.",
    year: "2024",
    tech: ["TypeScript", "CSS", "Storybook"],
    link: "#",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800&h=450",
    category: "Design",
  },
  {
    name: "Pulse Analytics",
    description: "High-performance data visualization engine for financial market analysis.",
    year: "2024",
    tech: ["Next.js", "D3.js", "Trpc"],
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=450",
    category: "Development",
  },
];
