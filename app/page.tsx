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
                    I&apos;m a third-year undergraduate IT student with a strong interest in
                    developing reliable and user-focused software solutions. I enjoy building
                    clean and functional interfaces while applying solid programming principles
                    to create applications that are both usable and maintainable.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Throughout my academic journey, I have worked with a variety of technologies,
                    including{" "}
                    <span className="text-foreground font-medium">React</span>,{" "}
                    <span className="text-foreground font-medium">PHP</span>,{" "}
                    <span className="text-foreground font-medium">JavaScript</span>,{" "}
                    <span className="text-foreground font-medium">HTML/CSS</span>,{" "}
                    <span className="text-foreground font-medium">Tailwind CSS</span>, and database
                    systems such as{" "}
                    <span className="text-foreground font-medium">MySQL</span> and{" "}
                    <span className="text-foreground font-medium">MariaDB</span>. These experiences
                    have strengthened my understanding of full-stack web development and
                    version control using{" "}
                    <span className="text-foreground font-medium">Git</span>.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    In my free time, I continue to improve my skills by exploring modern web
                    technologies, refining past projects, and building academic and personal
                    applications that challenge my problem-solving and technical abilities.
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
