"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BeaconHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;

    if (!section || !title) return;

    const animation = gsap.fromTo(
      title,
      {
        scale: 1,
        y: 0,
      },
      {
        scale: 0.35,
        y: -250,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-[#020817] px-6 text-white"
    >
      <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]" />

      <h1
        ref={titleRef}
        className="relative z-10 text-center text-[15vw] font-bold uppercase leading-none tracking-tighter"
      >
        Beacon
      </h1>

      <div className="absolute bottom-10 text-sm uppercase tracking-[0.3em] text-gray-500">
        Scroll to explore
      </div>
    </section>
  );
}