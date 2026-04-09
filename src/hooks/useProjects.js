import { useState, useEffect } from "react";
import { Leaf, Utensils } from "lucide-react";

// For icons, we store strings in local storage and parse them into components
export const iconMap = {
  Leaf,
  Utensils,
};

const defaultProjects = [
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
      "Problem: Rural governance across Telangana lacked a centralized issue-reporting infrastructure.\nApproach: Designed a mobile-first portal with routeing and scrolling.\nTech Stack: React, Tailwind CSS, Supabase.\nChallenges: Integrating secure role-based auth.\nSolution: Engineered full-stack architecture using Supabase.\nResults: Successfully deployed to 33 districts.",
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

export function useProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("portfolio_projects");
    if (stored) {
      try {
        setProjects(JSON.parse(stored));
      } catch (e) {
        setProjects(defaultProjects);
      }
    } else {
      setProjects(defaultProjects);
      localStorage.setItem(
        "portfolio_projects",
        JSON.stringify(defaultProjects),
      );
    }
  }, []);

  const saveProjects = (newProjects) => {
    setProjects(newProjects);
    localStorage.setItem("portfolio_projects", JSON.stringify(newProjects));
  };

  const addProject = (project) => {
    const newProject = { ...project, id: Date.now().toString() };
    saveProjects([...projects, newProject]);
  };

  const editProject = (id, updatedProject) => {
    saveProjects(
      projects.map((p) => (p.id === id ? { ...updatedProject, id } : p)),
    );
  };

  const deleteProject = (id) => {
    saveProjects(projects.filter((p) => p.id !== id));
  };

  return { projects, addProject, editProject, deleteProject };
}
