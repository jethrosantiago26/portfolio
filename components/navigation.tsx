"use client";

import { cn } from "@/lib/utils";

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
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={cn(
            "flex items-center gap-3 text-xs font-medium tracking-widest transition-all duration-200 group",
            activeTab === item.id
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <span
            className={cn(
              "h-px bg-current transition-all duration-200",
              activeTab === item.id ? "w-16" : "w-8 group-hover:w-12"
            )}
          />
          {item.label}
        </button>
      ))}
    </nav>
  );
}
