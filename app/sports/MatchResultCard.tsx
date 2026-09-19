"use client";

import { motion } from "framer-motion";
import type { RecentMatch } from "@/app/data/sports";

type MatchResultCardProps = {
  match: RecentMatch;
  index: number;
};

export default function MatchResultCard({
  match,
  index,
}: MatchResultCardProps) {
  const sortedPlacements = [...match.placements].sort(
    (a, b) => a.position - b.position
  );

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/[0.06] blur-[90px] transition-all duration-700 group-hover:bg-blue-400/[0.14]" />

      {/* Header */}
      <div className="relative flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400">
            {match.sport}
          </p>

          <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/25">
            Completed
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

          <span className="text-[8px] uppercase tracking-[0.2em] text-white/30">
            Final
          </span>
        </div>
      </div>

      {/* Podium */}
      <div className="relative px-4 pb-5 pt-8">

        {/* Horizontal glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-24 w-[70%] -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-[70px]" />

        <div className="relative grid grid-cols-3 items-end gap-2">

          {sortedPlacements.map((placement) => (
            <Placement
              key={placement.position}
              placement={placement}
            />
          ))}

        </div>
      </div>

      {/* Match information */}
      <div className="border-t border-white/[0.07] px-5 py-4">

        <div className="flex items-center justify-between gap-3">
          <span className="truncate text-[9px] text-white/35">
            {match.venue}
          </span>

          <span className="shrink-0 text-[9px] uppercase tracking-wider text-white/25">
            {formatDate(match.date)}
          </span>
        </div>

        <p className="mt-1 text-[9px] text-white/20">
          {match.time}
        </p>

      </div>

      {/* Bottom animated line */}
      <motion.div
        initial={{
          scaleX: 0.25,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.45,
        }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"
      />
    </motion.article>
  );
}


/* =============================================================== */
/* PLACEMENT                                                       */
/* =============================================================== */

function Placement({
  placement,
}: {
  placement: RecentMatch["placements"][number];
}) {
  const isFirst = placement.position === 1;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: placement.position * 0.12,
      }}
      whileHover={{
        y: -7,
      }}
      className={`relative text-center ${
        isFirst ? "pb-0" : "pb-2"
      }`}
    >
      {/* Position */}
      <motion.div
        animate={
          isFirst
            ? {
                y: [0, -3, 0],
              }
            : {}
        }
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`relative mx-auto flex items-center justify-center rounded-full border bg-[#07182d] ${
          isFirst
            ? "h-[76px] w-[76px] border-blue-300/50 shadow-[0_0_35px_rgba(96,165,250,0.25)]"
            : "h-[58px] w-[58px] border-white/10"
        }`}
      >
        {/* Photo */}
        <div
          className={`overflow-hidden rounded-full ${
            isFirst
              ? "h-[64px] w-[64px]"
              : "h-[48px] w-[48px]"
          }`}
        >
          <img
            src={placement.photo}
            alt=""
            className="h-full w-full object-cover transition duration-500 hover:scale-110"
          />
        </div>

        {/* Rank badge */}
        <span
          className={`absolute -bottom-2 rounded-full border bg-[#061426] px-2 py-1 text-[8px] font-bold ${
            isFirst
              ? "border-blue-300/40 text-blue-300"
              : "border-white/10 text-white/50"
          }`}
        >
          {String(placement.position).padStart(2, "0")}
        </span>
      </motion.div>

      {/* Faculty */}
      <p
        className={`mt-4 truncate px-1 font-medium ${
          isFirst
            ? "text-xs text-white"
            : "text-[10px] text-white/55"
        }`}
      >
        {placement.faculty}
      </p>

      {/* Points */}
      <div className="mt-1 flex items-baseline justify-center gap-1">
        <motion.span
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.4,
            delay: placement.position * 0.15,
          }}
          className={`font-bold tracking-tight ${
            isFirst
              ? "text-xl text-blue-300"
              : "text-sm text-white/70"
          }`}
        >
          {placement.points}
        </motion.span>

        <span className="text-[7px] uppercase tracking-widest text-white/20">
          PTS
        </span>
      </div>

      {/* Podium base */}
      <motion.div
        animate={
          isFirst
            ? {
                opacity: [0.2, 0.5, 0.2],
              }
            : {
                opacity: [0.08, 0.2, 0.08],
              }
        }
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`mx-auto mt-3 rounded-t-xl border border-white/10 bg-white/[0.025] ${
          isFirst
            ? "h-8 w-[90%] border-blue-400/20"
            : "h-5 w-[80%]"
        }`}
      />
    </motion.div>
  );
}


/* =============================================================== */
/* HELPERS                                                         */
/* =============================================================== */

function formatDate(date: string) {
  const parsedDate = new Date(date);

  return parsedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}