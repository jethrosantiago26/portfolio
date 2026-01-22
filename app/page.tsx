"use client";

import { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { BigThreeSection } from "@/components/big-three-section";
import { GrowthSection } from "@/components/growth-section";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24">
          {/* Left Column - Fixed on Desktop */}
          <div className="lg:sticky lg:top-24 lg:h-fit space-y-2">
            <HeroSection />
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Right Column - Scrollable Content */}
          <div className="space-y-16 lg:pt-0">
            {activeTab === "about" && (
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">About Me</h2>
                <div className="prose prose-invert max-w-none space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I&apos;m a developer passionate about crafting accessible,
                    pixel-perfect user interfaces that blend thoughtful design
                    with robust engineering. My favorite work lies at the
                    intersection of design and development, creating experiences
                    that not only look great but are meticulously built for
                    performance and usability.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    In the past, I&apos;ve had the opportunity to develop software
                    across a variety of settings — from{" "}
                    <span className="text-foreground font-medium">startups</span> and{" "}
                    <span className="text-foreground font-medium">
                      small digital product studios
                    </span>{" "}
                    to{" "}
                    <span className="text-foreground font-medium">
                      large corporations
                    </span>
                    . Each experience has shaped my approach to building
                    software that scales.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    In my spare time, I&apos;m usually exploring new technologies,
                    contributing to open source, reading about software
                    architecture, or working on side projects that challenge my
                    skills.
                  </p>
                </div>
              </section>
            )}

            {activeTab === "projects" && <BigThreeSection />}

            {activeTab === "growth" && <GrowthSection />}
          </div>
        </div>
      </div>
    </main>
  );
}
