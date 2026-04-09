import { Briefcase, QrCode, Truck, Leaf, Utensils } from "lucide-react";

export const iconMap = {
  Briefcase,
  QrCode,
  Truck,
  Leaf,
  Utensils,
};

export const projects = [

  {
    id: "1",
    title: "DigiPanchayath",
    descriptionRaw:
      "Problem: Rural governance across Telangana lacked a centralized issue-reporting infrastructure.\nApproach: Designed a mobile-first portal with routeing and scrolling.\nTech Stack: React, Tailwind CSS, Supabase.\nChallenges: Integrating secure role-based auth.\nSolution: Engineered full-stack architecture using Supabase.\nResults: Successfully deployed to 33 districts.",
    tech: ["HTML", "CSS", "Supabase", "React", "Tailwind CSS"],
    iconName: "Leaf",
    accent: "teal",
    link: "https://telangana.lovable.app/",
    github: "",
    screenshots: [
      "https://www.livemint.com/lm-img/img/2024/06/02/600x338/On-June-2--2014--Telangana-was-carved-out-as-a-sep_1717314327661_1717314371429.jpg",
    ],
  },
  {
    id: "2",
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
    id: "3",
    title: "Portfolio Website",
    descriptionRaw:
      "A personal portfolio website to showcase my skills and projects, featuring routeing and scrolling.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    iconName: "Briefcase",
    accent: "emerald",
    // link: "https://portfolio-xi-eight-y2b7w87clm.vercel.app/",
    link: "https://www.manchalaganesh.dev/",
    github: "",
    screenshots: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
    ],
  },
  {
    id: "4",
    title: "QR Code Generator",
    descriptionRaw:
      "A web app that generates QR codes for any link with download option.",
    tech: ["HTML", "CSS", "JavaScript"],
    iconName: "QrCode",
    accent: "teal",
    link: "",
    github: "",
    screenshots: [
      "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?w=1200&q=80"
    ],
  },
  {
    id: "5",
    title: "Delivery App",
    descriptionRaw:
      "A workplace food ordering application built for efficient delivery.",
    tech: ["React", "Node.js"],
    iconName: "Truck",
    accent: "emerald",
    link: "",
    github: "",
    screenshots: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80"
    ],
  },
  {
    id: "6",
    title: "Environmental Data App",
    descriptionRaw:
      "Developed during a hackathon to track environmental data.",
    tech: ["React", "Tailwind CSS"],
    iconName: "Leaf",
    accent: "teal",
    link: "",
    github: "",
    screenshots: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
    ],
  }
];
