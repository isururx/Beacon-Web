"use client";

import { motion } from "framer-motion";
import type { FacultyStanding } from "@/app/data/sports";

type FacultyPointsTableProps = {
  standings: FacultyStanding[];
};

export default function FacultyPointsTable({
  standings,
}: FacultyPointsTableProps) {
  const sortedStandings = [...standings].sort(
    (a, b) => b.points - a.points
  );

  return (
    <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl">

      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/[0.08] blur-[80px] transition duration-700 group-hover:bg-blue-400/[0.14]" />

      {/* Header */}
      <div className="relative flex items-end justify-between border-b border-white/10 px-5 py-5 md:px-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400">
            Championship Table
          </p>

          <h2 className="mt-1 text-lg font-medium text-white md:text-xl">
            Faculty Standings
          </h2>
        </div>

        <span className="text-[10px] uppercase tracking-widest text-white/25">
          PTS
        </span>
      </div>

      {/* Table */}
      <div className="relative">

        {/* Column labels */}
        <div className="grid grid-cols-[38px_1fr_42px_42px_55px] items-center gap-2 px-5 py-2.5 text-[9px] uppercase tracking-wider text-white/25 md:px-6">
          <span>#</span>
          <span>Faculty</span>
          <span className="text-center">P</span>
          <span className="text-center">W</span>
          <span className="text-right">PTS</span>
        </div>

        {/* Rows */}
        {sortedStandings.map((faculty, index) => (
          <motion.div
            key={faculty.id}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.06,
            }}
            whileHover={{
              x: 4,
            }}
            className="group/row relative grid grid-cols-[38px_1fr_42px_42px_55px] items-center gap-2 border-t border-white/[0.055] px-5 py-3.5 transition-colors duration-300 hover:bg-blue-400/[0.045] md:px-6"
          >
            {/* Position */}
            <span
              className={`text-xs font-medium ${
                index === 0
                  ? "text-blue-300"
                  : "text-white/25"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Faculty */}
            <div className="flex min-w-0 items-center gap-3">
              <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">
                <img
                  src={faculty.logo}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-white md:text-sm">
                  {faculty.faculty}
                </p>

                <p className="text-[9px] uppercase tracking-wider text-white/25">
                  {faculty.shortName}
                </p>
              </div>
            </div>

            {/* Played */}
            <span className="text-center text-xs text-white/45">
              {faculty.played}
            </span>

            {/* Won */}
            <span className="text-center text-xs text-white/45">
              {faculty.won}
            </span>

            {/* Points */}
            <span
              className={`text-right text-sm font-semibold ${
                index === 0
                  ? "text-blue-300"
                  : "text-white/75"
              }`}
            >
              {faculty.points}
            </span>

            {/* Active row indicator */}
            <div className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 bg-blue-400 transition-transform duration-300 group-hover/row:scale-y-100" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}