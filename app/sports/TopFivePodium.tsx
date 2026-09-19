"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { FacultyStanding } from "@/app/data/sports";

type TopFivePodiumProps = {
  standings: FacultyStanding[];
};

export default function TopFivePodium({
  standings,
}: TopFivePodiumProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const topFive = [...standings]
    .sort((a, b) => b.points - a.points)
    .slice(0, 5);

  const selectedFaculty = topFive.find(
    (faculty) => faculty.id === selectedId
  );

  const first = topFive[0];
  const remaining = topFive.slice(1);

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl">

      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.07, 0.12, 0.07],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-400 blur-[100px]"
      />

      {/* Header */}
      <div className="relative flex items-end justify-between px-5 pb-2 pt-5 md:px-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400">
            Current Leaders
          </p>

          <h2 className="mt-1 text-lg font-medium text-white md:text-xl">
            Top 5
          </h2>
        </div>

        <span className="text-[10px] uppercase tracking-widest text-white/25">
          RANKING
        </span>
      </div>

      {/* Leader */}
      {first && (
        <motion.button
          layout
          onClick={() =>
            setSelectedId(
              selectedId === first.id ? null : first.id
            )
          }
          className="relative mx-auto mt-5 block w-[min(70%,260px)] text-center"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Rank */}
          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-blue-300/30 bg-blue-400/10 shadow-[0_0_60px_rgba(96,165,250,0.12)] md:h-28 md:w-28"
          >
            <div className="h-20 w-20 overflow-hidden rounded-full border border-white/15 md:h-24 md:w-24">
              <img
                src={first.logo}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <span className="absolute -bottom-2 rounded-full border border-blue-300/20 bg-[#061426] px-3 py-1 text-[9px] font-semibold uppercase tracking-widest text-blue-300">
              01
            </span>
          </motion.div>

          <h3 className="mt-5 truncate text-base font-medium text-white">
            {first.faculty}
          </h3>

          <p className="mt-1 text-2xl font-semibold tracking-tight text-blue-300">
            {first.points}
            <span className="ml-1 text-[10px] font-normal uppercase tracking-widest text-white/30">
              pts
            </span>
          </p>
        </motion.button>
      )}

      {/* Remaining Top 4 */}
      <div className="relative grid grid-cols-4 gap-2 px-4 pb-5 pt-8 md:px-6">
        {remaining.map((faculty, index) => {
          const position = index + 2;
          const isSelected = faculty.id === selectedId;

          return (
            <motion.button
              key={faculty.id}
              layout
              onClick={() =>
                setSelectedId(
                  isSelected ? null : faculty.id
                )
              }
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.96 }}
              className={`rounded-2xl border p-2.5 transition-colors duration-300 ${
                isSelected
                  ? "border-blue-400/30 bg-blue-400/[0.09]"
                  : "border-white/[0.06] bg-white/[0.025] hover:border-blue-400/20 hover:bg-white/[0.05]"
              }`}
            >
              <div className="mx-auto h-10 w-10 overflow-hidden rounded-full border border-white/10">
                <img
                  src={faculty.logo}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-2 text-[9px] font-medium text-white/60">
                {String(position).padStart(2, "0")}
              </p>

              <p className="mt-1 truncate text-[10px] text-white/45">
                {faculty.shortName}
              </p>

              <p className="mt-1 text-xs font-semibold text-blue-300">
                {faculty.points}
              </p>
            </motion.button>
          );
        })}
      </div>

      {/* Selected details */}
      <AnimatePresence mode="wait">
        {selectedFaculty && (
          <motion.div
            key={selectedFaculty.id}
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="overflow-hidden border-t border-white/10"
          >
            <div className="grid grid-cols-4 gap-2 px-5 py-4 md:px-6">
              <Detail
                label="Played"
                value={selectedFaculty.played}
              />

              <Detail
                label="Won"
                value={selectedFaculty.won}
              />

              <Detail
                label="Lost"
                value={selectedFaculty.lost}
              />

              <Detail
                label="Drawn"
                value={selectedFaculty.drawn}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="relative pb-4 text-center text-[9px] uppercase tracking-[0.2em] text-white/20">
        Select a faculty to view performance
      </p>
    </div>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl bg-white/[0.035] px-2 py-2.5 text-center">
      <p className="text-sm font-medium text-white">
        {value}
      </p>

      <p className="mt-1 text-[8px] uppercase tracking-wider text-white/25">
        {label}
      </p>
    </div>
  );
}