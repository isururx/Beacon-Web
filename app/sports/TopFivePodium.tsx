"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { FacultyStanding } from "@/app/data/sports";

type TopFivePodiumProps = {
  standings: FacultyStanding[];
};

const podiumConfig = {
  1: {
    height: "h-44 sm:h-52 md:h-64",
    width: "w-[38%] md:w-[190px]",
    label: "CHAMPION",
    glow: "bg-blue-400",
    border: "border-blue-300/30",
    text: "text-blue-200",
    shadow: "shadow-[0_0_70px_rgba(96,165,250,0.25)]",
  },

  2: {
    height: "h-32 sm:h-40 md:h-48",
    width: "w-[29%] md:w-[160px]",
    label: "2ND PLACE",
    glow: "bg-slate-300",
    border: "border-white/20",
    text: "text-white/70",
    shadow: "shadow-[0_0_50px_rgba(255,255,255,0.10)]",
  },

  3: {
    height: "h-28 sm:h-32 md:h-40",
    width: "w-[29%] md:w-[160px]",
    label: "3RD PLACE",
    glow: "bg-cyan-400",
    border: "border-cyan-300/20",
    text: "text-cyan-200",
    shadow: "shadow-[0_0_50px_rgba(34,211,238,0.12)]",
  },
};

export default function TopFivePodium({
  standings,
}: TopFivePodiumProps) {
  const topFive = useMemo(
    () =>
      [...standings]
        .sort((a, b) => b.points - a.points)
        .slice(0, 5),
    [standings]
  );

  const [selectedFaculty, setSelectedFaculty] =
    useState<FacultyStanding | null>(null);

  if (topFive.length < 3) return null;

  const first = topFive[0];
  const second = topFive[1];
  const third = topFive[2];
  const fourth = topFive[3];
  const fifth = topFive[4];

  return (
    <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl">
      {/* ===================================================== */}
      {/* BACKGROUND ATMOSPHERE */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main blue atmosphere */}
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.10] blur-[130px]" />

        {/* Breathing cyan glow */}
        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [0.9, 1.05, 0.9],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[90px]"
        />

        {/* Floating particles */}
        {Array.from({ length: 18 }).map((_, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              y: 40,
              x: (index - 9) * 30,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [-20, -100],
              x: (index - 9) * 34,
            }}
            transition={{
              duration: 4 + (index % 3),
              delay: index * 0.25,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute bottom-20 left-1/2 h-1 w-1 rounded-full bg-blue-300"
          />
        ))}
      </div>

      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <div className="relative z-10 flex items-end justify-between border-b border-white/10 px-5 py-5 md:px-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400">
            Championship Podium
          </p>

          <h2 className="mt-1 text-lg font-medium text-white md:text-xl">
            Top Five Faculties
          </h2>
        </div>

        <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/20 sm:block">
          Current standings
        </span>
      </div>

      {/* ===================================================== */}
      {/* PODIUM AREA */}
      {/* ===================================================== */}

      <div className="relative z-10 min-w-0 px-3 pb-8 pt-16 sm:px-4 md:px-8 md:pt-20">
        {/* Spotlight beam */}
        <div className="pointer-events-none absolute left-1/2 top-5 h-[320px] w-[240px] -translate-x-1/2 bg-gradient-to-b from-blue-300/[0.08] via-blue-400/[0.025] to-transparent blur-xl [clip-path:polygon(35%_0,65%_0,100%_100%,0_100%)]" />

        {/* ================================================= */}
        {/* THREE PODIUM POSITIONS */}
        {/* ================================================= */}

        <div className="relative mx-auto flex w-full min-w-0 max-w-3xl items-end justify-center gap-1 sm:gap-3 md:gap-5">
          {/* SECOND */}
          <PodiumPlace
            faculty={second}
            position={2}
            config={podiumConfig[2]}
            onSelect={() => setSelectedFaculty(second)}
          />

          {/* FIRST */}
          <PodiumPlace
            faculty={first}
            position={1}
            config={podiumConfig[1]}
            onSelect={() => setSelectedFaculty(first)}
          />

          {/* THIRD */}
          <PodiumPlace
            faculty={third}
            position={3}
            config={podiumConfig[3]}
            onSelect={() => setSelectedFaculty(third)}
          />
        </div>

        {/* ================================================= */}
        {/* PODIUM FLOOR */}
        {/* ================================================= */}

        <div className="relative mx-auto mt-[-1px] max-w-3xl px-1">
          <div className="h-2 rounded-full border border-blue-300/10 bg-white/[0.05] shadow-[0_-10px_35px_rgba(59,130,246,0.08)]" />

          <div className="h-4 rounded-b-[1rem] bg-gradient-to-b from-white/[0.035] to-transparent" />

          <div className="mx-auto mt-[-1px] h-px w-[75%] bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
        </div>

        {/* ================================================= */}
        {/* 4TH + 5TH */}
        {/* ================================================= */}

        <div className="mt-8 grid grid-cols-2 gap-3 md:mx-auto md:max-w-xl">
          <SecondaryFaculty
            faculty={fourth}
            position={4}
            onSelect={() => setSelectedFaculty(fourth)}
          />

          <SecondaryFaculty
            faculty={fifth}
            position={5}
            onSelect={() => setSelectedFaculty(fifth)}
          />
        </div>
      </div>

      {/* ===================================================== */}
      {/* SELECTED FACULTY DETAILS */}
      {/* ===================================================== */}

      <motion.div
        layout
        className="relative z-10 border-t border-white/[0.06] bg-black/10 px-5 py-4 md:px-6"
      >
        {selectedFaculty ? (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between gap-2 sm:gap-4"
          >
            {/* Faculty identity */}
            <div className="flex min-w-0 items-center gap-3">
              <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/10">
                <img
                  src={selectedFaculty.logo}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="max-w-[130px] truncate text-[10px] font-medium text-white sm:max-w-none sm:text-xs">
                  {selectedFaculty.faculty}
                </p>

                <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                  {selectedFaculty.shortName}
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="flex shrink-0 gap-2 text-right sm:gap-4">
              <Stat
                label="Played"
                value={selectedFaculty.played}
              />

              <Stat
                label="Won"
                value={selectedFaculty.won}
              />

              <Stat
                label="Points"
                value={selectedFaculty.points}
                highlight
              />
            </div>
          </motion.div>
        ) : (
          <div className="flex items-center justify-between">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/20">
              Select a faculty
            </p>

            <p className="text-[9px] text-white/15">
              Explore standings
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

/* ============================================================ */
/* PODIUM POSITION */
/* ============================================================ */

function PodiumPlace({
  faculty,
  position,
  config,
  onSelect,
}: {
  faculty: FacultyStanding;
  position: 1 | 2 | 3;
  config: (typeof podiumConfig)[1 | 2 | 3];
  onSelect: () => void;
}) {
  const isFirst = position === 1;

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{
        opacity: 0,
        y: 70,
        scale: 0.88,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.75,
        delay:
          position === 1
            ? 0.15
            : position === 2
              ? 0
              : 0.3,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={`group relative flex shrink-0 flex-col items-center ${config.width} focus:outline-none`}
    >
      {/* =================================================== */}
      {/* CHAMPION CROWN */}
      {/* =================================================== */}

      {isFirst && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: [0, -4, 0],
          }}
          transition={{
            opacity: {
              delay: 0.8,
              duration: 0.5,
            },
            y: {
              delay: 1.2,
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute -top-11 z-40"
        >
          <div className="relative flex h-8 w-10 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl" />

            <span className="relative text-lg text-blue-200">
              ♛
            </span>
          </div>
        </motion.div>
      )}

      {/* =================================================== */}
      {/* FACULTY LOGO */}
      {/* =================================================== */}

      <motion.div
        className={`relative z-30 mb-[-16px] flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-[#07182b] ${config.border} ${config.shadow} sm:mb-[-20px] sm:h-20 sm:w-20 md:h-24 md:w-24`}
        animate={
          isFirst
            ? {
                boxShadow: [
                  "0 0 22px rgba(96,165,250,0.15)",
                  "0 0 48px rgba(96,165,250,0.32)",
                  "0 0 22px rgba(96,165,250,0.15)",
                ],
              }
            : undefined
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Logo glow */}
        <div
          className={`absolute inset-0 ${config.glow}/10 blur-2xl`}
        />

        {/* Faculty image */}
        <img
          src={faculty.logo}
          alt=""
          className="relative h-full w-full object-cover"
        />

        {/* Glass reflection */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
      </motion.div>

      {/* =================================================== */}
      {/* PODIUM BLOCK */}
      {/* =================================================== */}

      <div
        className={`relative w-full ${config.height} overflow-hidden rounded-t-[1.15rem] border ${config.border} bg-gradient-to-b from-white/[0.09] via-white/[0.045] to-black/30 ${config.shadow}`}
      >
        {/* Inner glass */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-black/20" />

        {/* Internal glow */}
        <motion.div
          animate={{
            opacity: [0.12, 0.28, 0.12],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute bottom-0 left-1/2 h-full w-16 -translate-x-1/2 ${config.glow}/10 blur-2xl`}
        />

        {/* Podium top edge */}
        <div className="absolute left-1/2 top-0 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* ================================================= */}
        {/* PODIUM CONTENT */}
        {/* ================================================= */}

        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-4 sm:pb-5">
          {/* Position label */}
          <span
            className={`mb-1 whitespace-nowrap text-[6px] font-semibold uppercase tracking-[0.16em] sm:text-[8px] md:text-[9px] md:tracking-[0.3em] ${config.text}`}
          >
            {config.label}
          </span>

          {/* Position number */}
          <span className="text-3xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-4xl md:text-5xl">
            {position}
          </span>

          {/* Faculty short name */}
          <span className="mt-1 text-[7px] uppercase tracking-[0.2em] text-white/25 sm:text-[8px]">
            {faculty.shortName}
          </span>
        </div>

        {/* Moving glass reflection */}
        <motion.div
          animate={{
            x: ["-140%", "170%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-y-0 w-12 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        />
      </div>

      {/* =================================================== */}
      {/* FACULTY NAME + POINTS */}
      {/* =================================================== */}

      <div className="mt-3 w-full px-0.5 text-center sm:mt-4">
        <p className="line-clamp-2 min-h-[24px] text-[8px] font-medium leading-3 text-white sm:min-h-[28px] sm:text-[10px] md:text-xs md:leading-4">
          {faculty.faculty}
        </p>

        <div className="mt-1 flex items-center justify-center gap-1.5">
          <span
            className={`text-base font-bold sm:text-lg ${config.text}`}
          >
            {faculty.points}
          </span>

          <span className="text-[7px] uppercase tracking-wider text-white/25">
            PTS
          </span>
        </div>
      </div>
    </motion.button>
  );
}

/* ============================================================ */
/* 4TH / 5TH FACULTY */
/* ============================================================ */

function SecondaryFaculty({
  faculty,
  position,
  onSelect,
}: {
  faculty: FacultyStanding;
  position: number;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.8 + position * 0.08,
        duration: 0.5,
      }}
      whileHover={{
        y: -4,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3 text-left transition-colors duration-300 hover:border-blue-400/20 hover:bg-blue-400/[0.04]"
    >
      <div className="flex items-center gap-3">
        {/* Faculty image */}
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">
          <img
            src={faculty.logo}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />

          {/* Image glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
        </div>

        {/* Information */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-white/20">
              0{position}
            </span>

            <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">
              Place
            </span>
          </div>

          <p className="truncate text-[10px] font-medium text-white md:text-xs">
            {faculty.faculty}
          </p>

          <p className="mt-0.5 text-[9px] text-white/30">
            {faculty.points} points
          </p>
        </div>
      </div>

      {/* Bottom hover light */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />
    </motion.button>
  );
}

/* ============================================================ */
/* STAT */
/* ============================================================ */

function Stat({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: number;
  highlight?: boolean;
}) {
  return (
    <div>
      <p className="text-[7px] uppercase tracking-[0.15em] text-white/20">
        {label}
      </p>

      <p
        className={`mt-0.5 text-xs font-semibold ${
          highlight ? "text-blue-300" : "text-white/70"
        }`}
      >
        {value}
      </p>
    </div>
  );
}