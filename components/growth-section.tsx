"use client";

import React from "react"

import { BookOpen, Target, Zap, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface LearningItem {
  title: string;
  description: string;
  progress: number;
  status: "In Progress" | "Starting Soon" | "Exploring";
  icon: React.ElementType;
  resources: string[];
}

const learningItems: LearningItem[] = [
  {
    title: "System Design",
    description:
      "Deep diving into distributed systems, microservices architecture, and scalability patterns. Understanding how to design systems that handle millions of users.",
    progress: 65,
    status: "In Progress",
    icon: Target,
    resources: ["Designing Data-Intensive Applications", "System Design Interview"],
  },
  {
    title: "Rust Programming",
    description:
      "Learning Rust for high-performance applications and WebAssembly. Exploring memory safety without garbage collection and building blazingly fast tools.",
    progress: 30,
    status: "In Progress",
    icon: Zap,
    resources: ["The Rust Book", "Rustlings", "Rust by Example"],
  },
  {
    title: "Machine Learning Fundamentals",
    description:
      "Building a foundation in ML to better understand AI integrations. Focus on practical applications rather than pure theory.",
    progress: 15,
    status: "Starting Soon",
    icon: TrendingUp,
    resources: ["Fast.ai Course", "Hands-On ML with Scikit-Learn"],
  },
];

export function GrowthSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Currently Learning</h2>
        </div>
        <p className="text-muted-foreground">
          Growth is a continuous journey. Here&apos;s what I&apos;m actively exploring.
        </p>
      </div>

      <div className="space-y-6">
        {learningItems.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-lg bg-card border border-border"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <Badge
                      variant={item.status === "In Progress" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {item.status}
                    </Badge>
                  </div>
                </div>
                <span className="text-sm font-medium text-primary tabular-nums">
                  {item.progress}%
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-2">
                <Progress value={item.progress} className="h-2" />
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Resources
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.resources.map((resource) => (
                    <Badge key={resource} variant="outline" className="text-xs">
                      {resource}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-lg bg-secondary/50 border border-border">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Learning Philosophy</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I believe in learning by building. Every new concept I explore gets
              applied to a real project. This hands-on approach helps cement
              knowledge and creates tangible evidence of growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
