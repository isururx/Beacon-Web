"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface MemoryItem {
  src: string;
  className: string;
  glowColor?: string;
  delay?: number;
}

const memories: MemoryItem[] = [
  {
    // 1. Top-Left
    src: "/images/memories/1.jpg",
    className:
      "left-[3%] top-[12%] w-24 xs:w-28 sm:w-36 md:left-[3%] md:top-[8%] md:w-44 lg:w-48 rotate-[-8deg] md:rotate-[-8deg]",
    glowColor: "rgba(56, 189, 248, 0.5)",
  },
  {
    // 2. Upper Mid-Left
    src: "/images/memories/2.jpg",
    className:
      "hidden md:block md:left-[21%] md:top-[11%] md:w-40 lg:w-44 md:rotate-[5deg]",
    glowColor: "rgba(96, 165, 250, 0.5)",
  },
  {
    // 3. Upper Mid-Right
    src: "/images/memories/3.jpg",
    className:
      "hidden md:block md:right-[21%] md:top-[9%] md:w-42 lg:w-46 md:rotate-[-4deg]",
    glowColor: "rgba(45, 212, 191, 0.45)",
  },
  {
    // 4. Top-Right
    src: "/images/memories/4.jpg",
    className:
      "right-[3%] top-[14%] w-24 xs:w-28 sm:w-36 md:right-[3%] md:top-[8%] md:w-44 lg:w-48 rotate-[7deg] md:rotate-[8deg]",
    glowColor: "rgba(59, 130, 246, 0.5)",
  },
  {
    // 5. Center-Left Flank
    src: "/images/memories/5.jpg",
    className:
      "left-[-2%] top-[44%] w-26 xs:w-30 sm:w-38 md:left-[1.5%] md:top-[42%] md:w-44 lg:w-50 rotate-[-5deg] md:rotate-[-6deg]",
    glowColor: "rgba(129, 140, 248, 0.5)",
  },
  {
    // 6. Center-Right Flank
    src: "/images/memories/6.jpg",
    className:
      "right-[-2%] top-[46%] w-26 xs:w-30 sm:w-38 md:right-[1.5%] md:top-[40%] md:w-44 lg:w-50 rotate-[6deg] md:rotate-[7deg]",
    glowColor: "rgba(56, 189, 248, 0.5)",
  },
  {
    // 7. Bottom-Left
    src: "/images/memories/7.jpg",
    className:
      "left-[4%] top-[72%] w-28 xs:w-32 sm:w-40 md:left-[4%] md:top-[74%] md:w-44 lg:w-48 rotate-[5deg] md:rotate-[6deg]",
    glowColor: "rgba(96, 165, 250, 0.5)",
  },
  {
    // 8. Lower Mid-Left
    src: "/images/memories/8.jpg",
    className:
      "hidden md:block md:left-[23%] md:top-[76%] md:w-44 lg:w-50 md:rotate-[-5deg]",
    glowColor: "rgba(45, 212, 191, 0.45)",
  },
  {
    // 9. Lower Mid-Right
    src: "/images/memories/9.jpg",
    className:
      "hidden md:block md:right-[23%] md:top-[75%] md:w-44 lg:w-50 md:rotate-[4deg]",
    glowColor: "rgba(59, 130, 246, 0.5)",
  },
  {
    // 10. Bottom-Right
    src: "/images/memories/10.jpg",
    className:
      "right-[4%] top-[73%] w-28 xs:w-32 sm:w-40 md:right-[4%] md:top-[72%] md:w-44 lg:w-48 rotate-[-5deg] md:rotate-[-7deg]",
    glowColor: "rgba(129, 140, 248, 0.5)",
  },
];

// Ambient drifting starlight motes distributed across the entire canvas
const ambientMotes = [
  { x: "8%", y: "15%", size: 4, duration: 5, delay: 0 },
  { x: "28%", y: "20%", size: 5, duration: 6.5, delay: 1 },
  { x: "50%", y: "10%", size: 6, duration: 4.8, delay: 0.5 },
  { x: "75%", y: "16%", size: 4, duration: 7, delay: 1.5 },
  { x: "92%", y: "26%", size: 5, duration: 5.5, delay: 0.8 },
  { x: "12%", y: "52%", size: 4, duration: 6, delay: 1.2 },
  { x: "88%", y: "54%", size: 6, duration: 4.5, delay: 0.3 },
  { x: "14%", y: "82%", size: 5, duration: 5.8, delay: 0.9 },
  { x: "42%", y: "86%", size: 4, duration: 6.2, delay: 1.4 },
  { x: "68%", y: "84%", size: 5, duration: 5.2, delay: 0.7 },
  { x: "86%", y: "80%", size: 4, duration: 6.8, delay: 1.1 },
];

export default function MemoryGallery() {
  return (
    <div className="memory-gallery-container pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      {/* Floating Ambient Sparkles / Light Motes */}
      {ambientMotes.map((mote, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.9)]"
          style={{
            left: mote.x,
            top: mote.y,
            width: `${mote.size}px`,
            height: `${mote.size}px`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.3, 0.9, 0.3],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: mote.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: mote.delay,
          }}
        />
      ))}

      {memories.map((memory, index) => {
        const floatDuration = 6 + (index % 4) * 0.8;
        const pulseDuration = 3.5 + (index % 3) * 0.7;

        return (
          <motion.div
            key={memory.src}
            className={`
              group
              pointer-events-auto
              cursor-pointer
              absolute
              aspect-[4/3]
              overflow-visible
              ${memory.className}
            `}
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.88,
            }}
            animate={{
              opacity: [0.85, 0.98, 0.85],
              y: [0, -12, 0, 8, 0],
              scale: 1,
            }}
            whileHover={{
              scale: 1.12,
              y: -16,
              rotate: 0,
              zIndex: 35,
              transition: { duration: 0.35, ease: "easeOut" },
            }}
            whileTap={{
              scale: 0.96,
              transition: { duration: 0.15 },
            }}
            transition={{
              opacity: {
                duration: pulseDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              },
              y: {
                duration: floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: 1,
                delay: index * 0.08,
                ease: "easeOut",
              },
            }}
          >
            {/* 1. Deep Atmospheric Outer Volumetric Bloom */}
            <motion.div
              className="absolute -inset-4 sm:-inset-8 rounded-3xl bg-gradient-to-r from-blue-600/40 via-cyan-500/45 to-indigo-600/40 blur-xl sm:blur-2xl -z-20 pointer-events-none"
              animate={{
                opacity: [0.45, 0.8, 0.45],
                scale: [0.95, 1.1, 0.95],
              }}
              transition={{
                duration: pulseDuration + 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            />

            {/* 2. Concentrated Electric Neon Aura */}
            <motion.div
              className="absolute -inset-2 sm:-inset-3 rounded-2xl bg-gradient-to-tr from-cyan-400/70 via-sky-300/50 to-blue-500/70 blur-md sm:blur-lg -z-10 pointer-events-none group-hover:blur-xl group-hover:opacity-100 transition-all duration-300"
              animate={{
                opacity: [0.65, 0.95, 0.65],
                scale: [0.98, 1.05, 0.98],
              }}
              transition={{
                duration: pulseDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            />

            {/* 3. Volumetric Downward Light Projection / Beacon Underglow */}
            <div
              className="
                absolute
                left-1/2
                -bottom-6 sm:-bottom-10
                -z-10
                h-10 sm:h-16
                w-[100%] sm:w-[110%]
                -translate-x-1/2
                rounded-full
                bg-gradient-to-b
                from-cyan-400/50
                via-blue-600/30
                to-transparent
                blur-lg sm:blur-xl
                pointer-events-none
                group-hover:h-14 sm:group-hover:h-20
                group-hover:from-cyan-300/80
                transition-all
                duration-300
              "
            />

            {/* 4. Glowing Framed Chassis */}
            <div
              className="
                relative
                h-full
                w-full
                rounded-2xl
                p-[1.5px]
                bg-gradient-to-br
                from-cyan-300/90
                via-blue-400/50
                to-indigo-500/30
                shadow-[0_0_16px_rgba(56,189,248,0.45),0_8px_18px_rgba(2,8,23,0.85)]
                sm:shadow-[0_0_25px_rgba(56,189,248,0.5),0_12px_28px_rgba(2,8,23,0.85)]
                group-hover:from-cyan-200
                group-hover:via-cyan-400
                group-hover:to-blue-400
                group-hover:shadow-[0_0_35px_rgba(56,189,248,0.85),0_0_70px_rgba(37,99,235,0.45)]
                transition-all
                duration-300
              "
            >
              {/* Inner Chassis Container */}
              <div className="relative h-full w-full overflow-hidden rounded-[12px] sm:rounded-[14px] bg-[#071426] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.4),inset_0_0_20px_rgba(56,189,248,0.25)]">
                {/* Photo with subtle zoom on hover */}
                <Image
                  src={memory.src}
                  alt="Colombo Beacon Memory"
                  fill
                  sizes="(max-width: 640px) 120px, (max-width: 1024px) 180px, 240px"
                  className="
                    object-cover
                    brightness-[1.03]
                    contrast-[1.08]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Rich Atmospheric Color Grade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/75 via-transparent to-cyan-900/20 mix-blend-multiply pointer-events-none" />

                {/* Glass Reflection / Specular Highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/25 opacity-50 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />

                {/* Shimmering Diagonal Light Beam Sweep */}
                <motion.div
                  className="absolute -inset-[150%] bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent rotate-45 pointer-events-none"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 5 + (index % 3) * 1.5,
                    repeat: Infinity,
                    repeatDelay: 2 + (index % 4),
                    ease: "easeInOut",
                  }}
                />

                {/* Futuristic Luminous Corner Reticles */}
                <div className="absolute top-2 left-2 h-2.5 w-2.5 border-t-2 border-l-2 border-cyan-300/85 drop-shadow-[0_0_6px_rgba(56,189,248,1)] pointer-events-none" />
                <div className="absolute top-2 right-2 h-2.5 w-2.5 border-t-2 border-r-2 border-cyan-300/85 drop-shadow-[0_0_6px_rgba(56,189,248,1)] pointer-events-none" />
                <div className="absolute bottom-2 left-2 h-2.5 w-2.5 border-b-2 border-l-2 border-cyan-300/85 drop-shadow-[0_0_6px_rgba(56,189,248,1)] pointer-events-none" />
                <div className="absolute bottom-2 right-2 h-2.5 w-2.5 border-b-2 border-r-2 border-cyan-300/85 drop-shadow-[0_0_6px_rgba(56,189,248,1)] pointer-events-none" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}