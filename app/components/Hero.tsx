"use client";

import Button from "./Button";
import Image from "next/image";
//import InteractiveGrid from "./animata/bento-grid/interactive-grid";
import ThemeToggle from "./theme-toggle";

export default function Hero() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/cybersecurity-bg.jpg"
          alt="Cybersecurity Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
            Protecting India's Digital Frontier
          </h1>
          <p className="text-xl mb-8 text-black-300 max-w-2xl mx-auto">
            Join the fight against cybercrime. Report incidents, access
            resources, and stay informed about online safety.
          </p>
          <div className="space-x-4">
            <Button
              size="lg"
              variant="primary"
              onClick={() =>
                document
                  .getElementById("report")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Report a Crime
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
