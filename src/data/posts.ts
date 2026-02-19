export interface Post {
  title: string;
  description: string;
  date: string;
  slug: string;
  category: string;
}

export const posts: Post[] = [
  {
    title: "The art of minimalist design",
    description: "Exploring why less is more in modern digital products and how to achieve it.",
    date: "Feb 15, 2026",
    slug: "art-of-minimalist-design",
    category: "Design",
  },
  {
    title: "Building scalable Astro applications",
    description: "Lessons learned from architecting high-performance web applications using Astro 5.",
    date: "Feb 10, 2026",
    slug: "scalable-astro-applications",
    category: "Technology",
  },
  {
    title: "The shift towards Serif typography",
    description: "How serif fonts are making a comeback in premium brand identities.",
    date: "Feb 05, 2026",
    slug: "serif-typography-comeback",
    category: "Design",
  },
];
