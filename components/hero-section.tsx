"use client";

import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, Facebook } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/jethrosantiago26", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/YOUR_USERNAME", label: "LinkedIn" },
  { icon: Mail, href: "mailto:john.santiago@urios.edu.ph", label: "Email" },
  { icon: Facebook, href: "https://www.facebook.com/Jethzki", label: "Facebook" },
];

export function HeroSection() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center">
      <div className="space-y-6">
        {/* Profile Image - Replace src with your image */}
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-primary/30 bg-muted">
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
          I build accessible, pixel-perfect digital experiences for the web. My
          work lies at the intersection of design and development, creating
          experiences that not only look great but are meticulously built for
          performance and usability.
        </p>

        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Currently focused on building scalable web applications and exploring
          the latest in modern web technologies. I believe in continuous
          learning and pushing the boundaries of what&apos;s possible on the
          web.
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
        </div>
      </div>
    </section>
  );
}
