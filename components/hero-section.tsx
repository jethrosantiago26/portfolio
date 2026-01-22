"use client";

import Image from "next/image";
import { Github, Mail, Facebook, FileDown} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/jethrosantiago26", label: "GitHub" },
  { icon: Mail, href: "mailto:john.santiago@urios.edu.ph", label: "Mail" },
  { icon: Facebook, href: "https://www.facebook.com/Jethzki", label: "Facebook" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function HeroSection() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center">
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Theme Toggle */}
        <motion.div className="flex justify-end" variants={itemVariants}>
          <ThemeToggle />
        </motion.div>
        {/* Profile Image - Replace src with your image */}
        <motion.div
          className="relative w-60 h-60 rounded-full overflow-hidden border-2 border-primary/30 bg-muted"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
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
        </motion.div>

        <motion.div className="space-y-2" variants={itemVariants}>
          <p className="text-primary text-sm font-medium tracking-wide uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight text-balance">
            John Jethro Santiago
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium">
            Full Stack Developer
          </p>
        </motion.div>

        <motion.p variants={itemVariants} className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
          I am an undergraduate IT student with hands-on experience in building
          functional and user-focused web applications. I have worked with various
          technologies, including the Laravel framework, where I developed a school
          profiling system that focused on clean design, usability, and efficient data
          management.
        </motion.p>

        <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed max-w-2xl">
           I have also built desktop-based projects such as a library management system
           using Microsoft Visual Basic 2010 Express. I enjoy exploring different tech
           stacks, strengthening my problem-solving skills, and continuously learning
           modern technologies to create reliable and scalable software solutions.
        </motion.p>

        <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label={link.label}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
              <a href="/resume.pdf" download>
                <FileDown className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
