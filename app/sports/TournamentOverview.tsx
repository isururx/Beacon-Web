"use client";

import { motion } from "framer-motion";
import FacultyPointsTable from "./FacultyPointsTable";
import TopFivePodium from "./TopFivePodium";
import type { Tournament } from "@/app/data/sports";

type TournamentOverviewProps = {
  tournament: Tournament;
};

export default function TournamentOverview({
  tournament,
}: TournamentOverviewProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-8 md:px-8 md:pb-12 md:pt-10 lg:px-12">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* =======================================================
            TOURNAMENT IDENTITY
        ======================================================= */}

        <div className="mb-7">
          <div className="min-w-0">
            {/* Section label */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-3 text-[11px] font-medium uppercase tracking-[0.35em] text-blue-400"
            >
              01 / Sports
            </motion.p>

            {/* =================================================
                TOURNAMENT TITLE
            ================================================= */}

            <motion.div
              initial="hidden"
              animate="visible"
              className="relative mt-2 overflow-hidden"
            >
              {/* Soft ambient glow behind title */}
              <div className="pointer-events-none absolute -left-10 top-1/2 h-24 w-72 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[70px] md:h-32 md:w-[28rem]" />

              {/* Small championship label */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.1,
                    },
                  },
                }}
                className="relative mb-2 flex items-center gap-2"
              >
                <span className="h-px w-8 bg-blue-400 md:w-12" />

                <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-blue-300/70 md:text-[10px]">
                  University Championship
                </span>
              </motion.div>

              {/* Tournament title */}
              <div className="relative">
                <motion.h1
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 35,
                      filter: "blur(10px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  className="
                    relative
                    max-w-full
                    text-[clamp(2.7rem,10vw,6.8rem)]
                    font-semibold
                    uppercase
                    leading-[0.88]
                    tracking-[-0.055em]
                    text-white
                  "
                >
                  {tournament.name}
                </motion.h1>

                {/* Animated light sweep */}
                <motion.div
                  initial={{ x: "-120%" }}
                  animate={{ x: "120%" }}
                  transition={{
                    duration: 1.4,
                    delay: 0.8,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    w-24
                    rotate-[12deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    blur-md
                  "
                />
              </div>

              {/* =================================================
                  TOURNAMENT METADATA
              ================================================= */}

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.45,
                    },
                  },
                }}
                className="relative mt-4 flex flex-wrap items-center gap-x-3 gap-y-2"
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40 md:text-xs">
                  Colombo Beacon
                </span>

                <span className="h-1 w-1 rounded-full bg-blue-400/60" />

                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-blue-300/70 md:text-xs">
                  University of Colombo
                </span>

                <span className="h-1 w-1 rounded-full bg-white/20" />

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/30 md:text-xs">
                  {tournament.year}
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* =======================================================
            MAIN TOURNAMENT OVERVIEW
        ======================================================= */}

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Podium — LEFT */}
          <TopFivePodium standings={tournament.standings} />

          {/* Faculty Table — RIGHT */}
          <FacultyPointsTable standings={tournament.standings} />
        </div>
      </div>
    </section>
  );
}