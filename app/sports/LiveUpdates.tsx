"use client";

import { motion } from "framer-motion";
import type { LiveUpdate } from "@/app/data/sports";

type LiveUpdatesProps = {
  updates: LiveUpdate[];
};

export default function LiveUpdates({
  updates,
}: LiveUpdatesProps) {
  if (!updates || updates.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-4 md:px-8 md:pb-20 lg:px-12">
      {/* ===================================================== */}
      {/* BACKGROUND ATMOSPHERE */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/[0.045] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* =================================================== */}
        {/* HEADER */}
        {/* =================================================== */}

        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400">
              05 / Live Updates
            </p>

            <h2 className="mt-1 text-2xl font-medium tracking-[-0.03em] text-white md:text-3xl">
              Tournament Live
            </h2>

            <p className="mt-2 max-w-xl text-xs leading-5 text-white/30">
              Follow match activity and the latest updates as
              the tournament unfolds.
            </p>
          </div>

          {/* Live indicator */}

          <div className="flex items-center gap-2 self-start rounded-full border border-red-400/10 bg-red-400/[0.04] px-3 py-2 md:self-end">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-50" />

              <span className="relative h-2 w-2 rounded-full bg-red-400" />
            </span>

            <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-red-300">
              Live Now
            </span>
          </div>
        </div>

        {/* =================================================== */}
        {/* LIVE UPDATE STREAM */}
        {/* =================================================== */}

        <div className="relative">
          {/* Timeline */}

          <div className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-blue-400/30 via-white/[0.06] to-transparent md:left-[23px]" />

          <div className="space-y-3">
            {updates.map((update, index) => (
              <LiveUpdateCard
                key={update.id}
                update={update}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* LIVE UPDATE CARD */
/* ============================================================ */

function LiveUpdateCard({
  update,
  index,
}: {
  update: LiveUpdate;
  index: number;
}) {
  const isLive = update.status === "live";

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: -25,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        x: 4,
      }}
      className="group relative pl-10 md:pl-12"
    >
      {/* ================================================== */}
      {/* TIMELINE DOT */}
      {/* ================================================== */}

      <div className="absolute left-[11px] top-6 z-10 flex h-[17px] w-[17px] items-center justify-center rounded-full border border-[#061426] bg-[#0c213b] md:left-[15px]">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isLive
              ? "bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.8)]"
              : "bg-blue-400"
          }`}
        />
      </div>

      {/* ================================================== */}
      {/* CARD */}
      {/* ================================================== */}

      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] backdrop-blur-xl transition-all duration-500 group-hover:border-blue-400/20 group-hover:bg-white/[0.045]">
        {/* Glow */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-500/[0.07] blur-[80px] opacity-0 transition duration-700 group-hover:opacity-100" />

        {/* ================================================= */}
        {/* CARD CONTENT */}
        {/* ================================================= */}

        <div className="relative grid md:grid-cols-[130px_minmax(0,1fr)_220px]">
          {/* ================================================= */}
          {/* SPORT / TIME */}
          {/* ================================================= */}

          <div className="flex flex-row items-center justify-between border-b border-white/[0.06] px-4 py-4 md:flex-col md:items-start md:justify-center md:border-b-0 md:border-r">
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isLive
                      ? "bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.7)]"
                      : "bg-blue-400"
                  }`}
                />

                <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-blue-300">
                  {update.sport}
                </span>
              </div>

              <p className="mt-1 text-[10px] text-white/25">
                {update.time}
              </p>
            </div>

            {isLive && (
              <span className="rounded-full border border-red-400/10 bg-red-400/[0.05] px-2 py-1 text-[7px] uppercase tracking-[0.15em] text-red-300 md:mt-4">
                Live
              </span>
            )}
          </div>

          {/* ================================================= */}
          {/* MATCH INFORMATION */}
          {/* ================================================= */}

          <div className="min-w-0 px-4 py-5 md:px-6">
            <h3 className="text-sm font-medium leading-5 text-white md:text-base">
              {update.title}
            </h3>

            <p className="mt-2 text-[10px] leading-4 text-white/30">
              {update.description}
            </p>

            <div className="mt-3 flex items-center gap-2 text-white/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-3 w-3 shrink-0"
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

              <span className="truncate text-[9px]">
                {update.venue}
              </span>
            </div>
          </div>

          {/* ================================================= */}
          {/* SCORE */}
          {/* ================================================= */}

          {update.score && (
            <div className="flex items-center border-t border-white/[0.06] bg-white/[0.015] px-5 py-4 md:border-l md:border-t-0">
              <div className="flex w-full items-center justify-between md:flex-col md:items-stretch">
                <div>
                  <p className="text-[7px] uppercase tracking-[0.2em] text-white/20">
                    Current Score
                  </p>
                </div>

                <div className="mt-2 flex items-center gap-4 md:gap-6">
                  <Score
                    value={update.score.home}
                    active={isLive}
                  />

                  <span className="text-[8px] text-white/15">
                    VS
                  </span>

                  <Score
                    value={update.score.away}
                    active={isLive}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ================================================= */}
        {/* LIVE ANIMATION */}
        {/* ================================================= */}

        {isLive && (
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "100%",
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute bottom-0 h-px w-1/3 bg-gradient-to-r from-transparent via-red-400/50 to-transparent"
          />
        )}
      </div>
    </motion.article>
  );
}

/* ============================================================ */
/* SCORE */
/* ============================================================ */

function Score({
  value,
  active,
}: {
  value: string;
  active: boolean;
}) {
  return (
    <span
      className={`text-xl font-semibold tracking-[-0.05em] md:text-2xl ${
        active ? "text-white" : "text-white/70"
      }`}
    >
      {value}
    </span>
  );
}