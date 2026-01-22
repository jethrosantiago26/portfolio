"use client";

import Image from "next/image";
import { Github, Mail, Facebook, FileDown} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const socialLinks = [
  { icon: Github, href: "https://github.com/jethrosantiago26", label: "GitHub" },
  { icon: Mail, href: "mailto:john.santiago@urios.edu.ph", label: "Mail" },
  { icon: Facebook, href: "https://www.facebook.com/Jethzki", label: "Facebook" },
];

export function HeroSection() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center">
      <div className="space-y-6">
        {/* Theme Toggle */}
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
        {/* Profile Image - Replace src with your image */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-primary/30 bg-muted">
          <Image
            src="/images/profile.jpg"
            alt="Profile photo"
            fill
            className="object-cover"
            priority
          />
          {/* Fallback placeholder when no image exists */}
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-3xl font-bold">

          </div>
        </div>

        <div className="space-y-2">
          <p className="text-primary text-sm font-medium tracking-wide uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight text-balance">
            John Jethro Santiago
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium">
            Full Stack Developer
          </p>
        </div>

        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
          I am an undergraduate IT student with hands-on experience in building
          functional and user-focused web applications. I have worked with various
          technologies, including the Laravel framework, where I developed a school
          profiling system that focused on clean design, usability, and efficient data
          management.
        </p>

        <p className="text-muted-foreground leading-relaxed max-w-2xl">
           I have also built desktop-based projects such as a library management system
           using Microsoft Visual Basic 2010 Express. I enjoy exploring different tech
           stacks, strengthening my problem-solving skills, and continuously learning
           modern technologies to create reliable and scalable software solutions.
        </p>

        <div className="flex items-center gap-4 pt-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
            
          ))}
          {
                    <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
            <a href="/resume.pdf" download>
              <FileDown className="w-4 h-4" />
              Resume
            </a>
          </Button>
}
        </div>
      </div>
    </section>
  );
}
