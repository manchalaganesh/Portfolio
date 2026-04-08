import { Leaf, Utensils } from "lucide-react";

export const iconMap = {
  Leaf,
  Utensils,
};

export const projects = [
  {
    id: "1",
    title: "Food Munch",
    descriptionRaw:
      "A responsive and user-friendly food enthusiast platform featuring curated recipes, restaurant reviews, and culinary blogs.",
    tech: ["HTML", "CSS", "Bootstrap"],
    iconName: "Utensils",
    accent: "emerald",
    link: "https://foodonfoodmunch.niat.tech/",
    github: "",
    screenshots: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
    ],
  },
  {
    id: "2",
    title: "DigiPanchayath",
    descriptionRaw:
      "Problem: Rural governance across Telangana lacked a centralized issue-reporting infrastructure.\nApproach: Designed a mobile-first portal with auto-routing.\nTech Stack: React, Tailwind CSS, Supabase.\nChallenges: Integrating secure role-based auth.\nSolution: Engineered full-stack architecture using Supabase.\nResults: Successfully deployed to 33 districts.",
    tech: ["HTML", "CSS", "Supabase", "React", "Tailwind CSS"],
    iconName: "Leaf",
    accent: "teal",
    link: "https://telangana.lovable.app/",
    github: "",
    screenshots: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    ],
  },
];
