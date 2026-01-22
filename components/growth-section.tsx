"use client";

import React from "react"

import { BookOpen, Target, Zap, TrendingUp, Monitor } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

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
    title: "Cybersecurity Fundamentals",
    description:
      "Learning the fundamentals of cybersecurity, including network security, basic threat analysis, and secure system practices. Focused on understanding common vulnerabilities and how to protect applications and data.",
    progress: 30,
    status: "In Progress",
    icon: Zap,
    resources: [
      "OWASP Top 10",
      "Cisco Networking Academy",
      "Introduction to Cybersecurity"
    ],
  },
  {
  title: "CompTIA A+ Fundamentals",
  description:
    "Preparing for the CompTIA A+ certification by studying Core 1 and Core 2 topics. Core 1 focuses on hardware, networking, and mobile devices, while Core 2 covers operating systems, security fundamentals, software troubleshooting, and operational procedures.",
  progress: 0,
  status: "Starting Soon",
  icon: Monitor,
  resources: [
    "CompTIA A+ Official Study Guide",
    "Professor Messer A+ (Core 1 & Core 2)",
    "Exam Cram CompTIA A+"
  ],
},
  {
    title: "Machine Learning Fundamentals",
    description:
      "Building a foundation in ML to better understand AI integrations. Focus on practical applications rather than pure theory.",
    progress: 10,
    status: "Starting Soon",
    icon: TrendingUp,
    resources: ["Fast.ai Course", "Hands-On ML with Scikit-Learn"],
  },
];

export function GrowthSection() {
  return (
    <section className="space-y-8">
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Currently Learning</h2>
        </div>
        <p className="text-muted-foreground">
          Growth is a continuous journey. Here&apos;s what I&apos;m actively exploring.
        </p>
      </motion.div>

      <div className="space-y-6">
        {learningItems.map((item, index) => (
          <motion.div
            key={item.title}
            className="p-6 rounded-lg bg-card border border-border"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.01 }}
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
          </motion.div>
        ))}
      </div>

      <motion.div
        className="p-6 rounded-lg bg-secondary/50 border border-border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
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
      </motion.div>
    </section>
  );
}
