"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Code2, Lightbulb, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  category: string;
  categoryDescription: string;
  icon: React.ElementType;
  technologies: string[];
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store built with modern technologies. Demonstrates mastery of state management, API integration, and responsive design patterns.",
    category: "What I Know",
    categoryDescription: "Demonstrating current expertise",
    icon: Code2,
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
    image: "/images/project-1.jpg", // Replace with your project screenshot
  },
  {
    title: "Real-Time Dashboard",
    description:
      "A data visualization dashboard with WebSocket integration. Pushed my boundaries with complex state synchronization and performance optimization.",
    category: "What I Learned",
    categoryDescription: "Challenging growth experience",
    icon: Lightbulb,
    technologies: ["Next.js", "WebSockets", "D3.js", "Redis"],
    link: "#",
    image: "/images/project-2.jpg", // Replace with your project screenshot
  },
  {
    title: "AI-Powered Assistant",
    description:
      "An intelligent application leveraging machine learning APIs. Represents my aspiration to build at the intersection of AI and user experience.",
    category: "What I Aspire To",
    categoryDescription: "Future direction & ambition",
    icon: Rocket,
    technologies: ["AI SDK", "LLMs", "Vector DB", "Edge Functions"],
    link: "#",
    image: "/images/project-3.jpg", // Replace with your project screenshot
  },
];

export function BigThreeSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">The Big Three</h2>
        <p className="text-muted-foreground">
          Three projects that tell the story of my growth as a developer
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className="group block p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Project Image - Replace with your screenshots */}
              <div className="flex-shrink-0">
                <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden bg-muted border border-border">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover"
                  />
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-primary uppercase tracking-wide">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.categoryDescription}
                    </p>
                  </div>
                  <span className="text-muted-foreground text-sm tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
