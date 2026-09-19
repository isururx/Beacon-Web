"use client";

import { motion } from "framer-motion";
import type { UpcomingMatch } from "@/app/data/sports";

type UpcomingMatchesProps = {
  matches: UpcomingMatch[];
};

type UpcomingMatchCardProps = {
  match: UpcomingMatch;
  index: number;
};

/* ============================================================ */
/* UPCOMING MATCHES SECTION */
/* ============================================================ */

export default function UpcomingMatches({
  matches,
}: UpcomingMatchesProps) {
  /*
   * Remove any invalid / undefined entries.
   *
   * This protects the UI if the data array accidentally
   * contains an empty item.
   */
  const upcomingMatches = matches.filter(
    (match): match is UpcomingMatch => Boolean(match)
  );

  if (upcomingMatches.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-4 md:px-8 md:pb-16 md:pt-6 lg:px-12">
      {/* ====================================================== */}
      {/* BACKGROUND */}
      {/* ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/[0.045] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* ==================================================== */}
        {/* HEADER */}
        {/* ==================================================== */}

        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400">
              03 / Fixtures
            </p>

            <h2 className="mt-1 text-2xl font-medium tracking-[-0.03em] text-white md:text-3xl">
              Upcoming Matches
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <motion.span
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.7)]"
            />

            <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
              Next Fixtures
            </span>
          </div>
        </div>

        {/* ==================================================== */}
        {/* MATCHES */}
        {/* ==================================================== */}

        <div className="grid gap-3 lg:grid-cols-2">
          {upcomingMatches.map((match, index) => (
            <UpcomingMatchCard
              key={match.id}
              match={match}
              index={index}
            />
          ))}
        </div>

        {/* ==================================================== */}
        {/* FOOTER */}
        {/* ==================================================== */}

        <div className="mt-5 flex items-center justify-between border-t border-white/[0.05] pt-4">
          <span className="text-[8px] uppercase tracking-[0.25em] text-white/15">
            University of Colombo
          </span>

          <span className="text-[8px] uppercase tracking-[0.2em] text-white/15">
            {upcomingMatches.length} Fixtures
          </span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* UPCOMING MATCH CARD */
/* ============================================================ */

function UpcomingMatchCard({
  match,
  index,
}: UpcomingMatchCardProps) {
  /*
   * This should NEVER happen now because the parent filters
   * invalid entries before rendering.
   *
   * The guard is still here as an additional safety layer.
   */
  if (!match) {
    return null;
  }

  /* ========================================================== */
  /* DATE */
  /* ========================================================== */

  const [year, monthNumber, day] = match.date.split("-");

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month =
    monthNames[Number(monthNumber) - 1] ?? "";

  /*
   * We only use Date for the weekday.
   *
   * Noon is used instead of midnight to avoid timezone
   * shifting the date in some browsers.
   */
  const weekday = new Date(
    `${year}-${monthNumber}-${day}T12:00:00`
  ).toLocaleDateString("en-US", {
    weekday: "short",
  });

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
      }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] backdrop-blur-xl transition-colors duration-500 hover:border-blue-400/20 hover:bg-white/[0.05]"
    >
      {/* ====================================================== */}
      {/* HOVER GLOW */}
      {/* ====================================================== */}

      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-blue-500/[0.08] blur-[70px] opacity-0 transition duration-700 group-hover:opacity-100" />

      {/* ====================================================== */}
      {/* TOP LIGHT */}
      {/* ====================================================== */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* ====================================================== */}
      {/* CONTENT */}
      {/* ====================================================== */}

      <div className="relative flex min-h-[150px] items-stretch">
        {/* ================================================== */}
        {/* DATE */}
        {/* ================================================== */}

        <div className="flex w-[76px] shrink-0 flex-col items-center justify-center border-r border-white/[0.07] bg-white/[0.015] px-2 sm:w-[88px]">
          <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-blue-400">
            {weekday}
          </span>

          <span className="mt-1 text-3xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-4xl">
            {day}
          </span>

          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.25em] text-white/25">
            {month}
          </span>
        </div>

        {/* ================================================== */}
        {/* MATCH INFORMATION */}
        {/* ================================================== */}

        <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-5 sm:px-5">
          {/* Sport */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.7)]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-blue-300">
              {match.sport}
            </span>
          </div>

          {/* Title */}
          <p className="mt-2 text-lg font-medium tracking-[-0.02em] text-white sm:text-xl">
            Upcoming Match
          </p>

          {/* Venue */}
          <div className="mt-3 flex min-w-0 items-center gap-2 text-white/30">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-3.5 w-3.5 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
              />

              <circle
                cx="12"
                cy="9"
                r="2.2"
              />
            </svg>

            <span className="truncate text-[10px] sm:text-xs">
              {match.venue}
            </span>
          </div>
        </div>

        {/* ================================================== */}
        {/* TIME */}
        {/* ================================================== */}

        <div className="flex w-[78px] shrink-0 flex-col items-end justify-center border-l border-white/[0.07] px-3 sm:w-[100px] sm:px-5">
          <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">
            Start
          </span>

          <span className="mt-1 text-sm font-semibold text-white sm:text-base">
            {match.time}
          </span>

          <span className="mt-2 rounded-full border border-blue-400/10 bg-blue-400/[0.05] px-2 py-1 text-[7px] uppercase tracking-[0.15em] text-blue-300/70">
            Upcoming
          </span>
        </div>
      </div>

      {/* ====================================================== */}
      {/* BOTTOM LIGHT */}
      {/* ====================================================== */}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]">
        <motion.div
          initial={{
            width: "0%",
          }}
          whileInView={{
            width: "100%",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.3 + index * 0.1,
            ease: "easeOut",
          }}
          className="h-full bg-gradient-to-r from-blue-400/40 via-cyan-300/20 to-transparent"
        />
      </div>
    </motion.article>
  );
}