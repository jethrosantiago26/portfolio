"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "growth", label: "GROWTH" },
];

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="flex flex-col gap-3 py-8">
      {navItems.map((item, index) => (
        <motion.button
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={cn(
            "flex items-center gap-3 text-xs font-medium tracking-widest transition-all duration-200 group",
            activeTab === item.id
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span
            className="h-px bg-current"
            animate={{ width: activeTab === item.id ? 64 : 32 }}
            whileHover={{ width: activeTab === item.id ? 64 : 48 }}
            transition={{ duration: 0.2 }}
          />
          {item.label}
        </motion.button>
      ))}
    </nav>
  );
}
