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

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">

      {/* Header */}
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
          Current Leaders
        </p>

        <h3 className="mt-1 text-xl font-semibold text-white">
          Top 5
        </h3>
      </div>

      {/* Ranking */}
      <div className="space-y-3">
        {topFive.map((faculty, index) => {
          const position = index + 1;
          const isSelected = faculty.id === selectedId;

          return (
            <motion.button
              key={faculty.id}
              layout
              onClick={() =>
                setSelectedId(isSelected ? null : faculty.id)
              }
              className={`w-full rounded-2xl border p-4 text-left transition ${
                isSelected
                  ? "border-blue-400/40 bg-blue-400/10"
                  : "border-white/5 bg-white/[0.02] hover:border-blue-400/20 hover:bg-white/[0.04]"
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4">

                {/* Position */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    position === 1
                      ? "bg-blue-400 text-[#071A33]"
                      : "bg-white/5 text-white/60"
                  }`}
                >
                  {position}
                </div>

                {/* Logo */}
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10">
                  <img
                    src={faculty.logo}
                    alt={faculty.faculty}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Faculty */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-white">
                    {faculty.faculty}
                  </p>

                  <p className="text-xs text-white/35">
                    {faculty.shortName}
                  </p>
                </div>

                {/* Points */}
                <div className="text-right">
                  <p className="text-lg font-semibold text-blue-300">
                    {faculty.points}
                  </p>

                  <p className="text-[10px] uppercase tracking-wider text-white/30">
                    points
                  </p>
                </div>
              </div>

              {/* Expandable Details */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                      <MiniStat
                        label="Played"
                        value={faculty.played}
                      />

                      <MiniStat
                        label="Won"
                        value={faculty.won}
                      />

                      <MiniStat
                        label="Lost"
                        value={faculty.lost}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      {/* Selected Faculty */}
      {selectedFaculty && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-5 text-center text-xs text-white/30"
        >
          Showing detailed performance for{" "}
          <span className="text-blue-300">
            {selectedFaculty.faculty}
          </span>
        </motion.p>
      )}
    </div>
  );
}

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl bg-white/[0.03] px-3 py-2 text-center">
      <p className="text-sm font-medium text-white">
        {value}
      </p>

      <p className="mt-1 text-[9px] uppercase tracking-wider text-white/30">
        {label}
      </p>
    </div>
  );
}