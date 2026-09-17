"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MemoryGallery from "./MemoryGallery";

gsap.registerPlugin(ScrollTrigger);

export default function BeaconExperience() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
            reduceMotion: boolean;
          };

          if (reduceMotion) return;

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: isDesktop ? "+=1800" : "+=1100",
              scrub: isDesktop ? 1 : 0.8,
              pin: true,
              anticipatePin: 1,
            },
          });

          timeline
            // Main typography
            .to(".beacon-title", {
              scale: isDesktop ? 0.28 : 0.36,
              yPercent: isDesktop ? -120 : -140,
              duration: 1,
              ease: "power2.inOut",
            })

            // Secondary navigation text exits sideways
            .to(
              ".beacon-navigation",
              {
                xPercent: isDesktop ? -150 : -100,
                opacity: 0,
                duration: 0.8,
                ease: "power2.in",
              },
              "<"
            )

            // Memories gracefully fade out during the scroll transition
            .to(
              ".memory-gallery-container",
              {
                opacity: 0,
                scale: isDesktop ? 0.92 : 0.86,
                duration: 0.7,
                ease: "power2.in",
              },
              "<"
            )

            // Background expands
            .to(
              ".beacon-glow",
              {
                scale: isDesktop ? 2.2 : 1.7,
                opacity: 0.5,
                duration: 1,
                ease: "power2.inOut",
              },
              "<"
            )

            // Reveal second message
            .fromTo(
              ".beacon-message",
              {
                y: isDesktop ? 100 : 50,
                opacity: 0,
                scale: 0.88,
              },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power3.out",
              }
            )

            // Final transition
            .to(".beacon-message", {
              y: isDesktop ? -100 : -60,
              opacity: 0,
              scale: 1.08,
              duration: 0.8,
              ease: "power2.in",
            });

          return () => {
            timeline.kill();
          };
        }
      );

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen h-[100dvh] overflow-hidden bg-[#020817] text-white"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            beacon-glow
            absolute left-1/2 top-1/2
            h-[85vw] w-[85vw] sm:h-[60vw] sm:w-[60vw] md:h-[45vw] md:w-[45vw]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-blue-600/25
            blur-[70px] sm:blur-[100px]
            will-change-transform
          "
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020817_75%)]" />
      </div>

      {/* Navigation text */}
      <div
        className="
          beacon-navigation
          absolute left-5 sm:left-[8vw] top-[6vh] sm:top-[16vh] md:top-[22vh]
          text-[10px] sm:text-xs uppercase
          tracking-[0.35em] sm:tracking-[0.5em]
          text-blue-400
          will-change-transform
          z-20
        "
      >
        Navigation
      </div>

      {/* Floating Glowing Memory Gallery */}
      <MemoryGallery />

      {/* Main title */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
        <h1
          className="
            beacon-title
            relative z-10
            text-[21vw] sm:text-[18vw]
            font-black
            uppercase
            leading-none
            tracking-[-0.05em] sm:tracking-[-0.08em]
            will-change-transform
            select-none
          "
        >
          Beacon
        </h1>
      </div>

      {/* Message */}
      <div
        className="
          beacon-message
          pointer-events-none
          absolute inset-0
          flex items-center justify-center
          px-5 sm:px-6 text-center
          opacity-0
          will-change-transform
          z-20
        "
      >
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 sm:mb-6 text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.45em] text-blue-400">
            Colombo Beacon
          </p>

          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-9xl sm:leading-[0.9]">
            Where ideas
            <br />
            become impact.
          </h2>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-gray-500">
            Scroll
          </span>

          <div className="h-7 sm:h-10 w-px bg-white/20" />
        </div>
      </div>
    </section>
  );
}