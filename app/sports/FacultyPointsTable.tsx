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

      {/* Ambient glow */}
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

        <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
          9 Faculties
        </span>

      </div>


      {/* Table header */}
      <div className="grid grid-cols-[28px_minmax(0,1fr)_28px_28px_28px_28px_45px] items-center gap-1 px-4 py-3 text-[8px] uppercase tracking-wider text-white/25 md:grid-cols-[38px_minmax(0,1fr)_36px_36px_36px_36px_55px] md:gap-2 md:px-6">

        <span>#</span>

        <span>Faculty</span>

        <span className="text-center">
          P
        </span>

        <span className="text-center">
          W
        </span>

        <span className="text-center">
          L
        </span>

        <span className="text-center">
          D
        </span>

        <span className="text-right">
          PTS
        </span>

      </div>


      {/* Faculty rows */}
      <div>
        {sortedStandings.map((faculty, index) => (

          <motion.div
            key={faculty.id}

            initial={{
              opacity: 0,
              x: -15,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.4,
              delay: index * 0.06,
            }}

            whileHover={{
              x: 4,
            }}

            className="group/row relative grid grid-cols-[28px_minmax(0,1fr)_28px_28px_28px_28px_45px] items-center gap-1 border-t border-white/[0.055] px-4 py-3 transition-colors duration-300 hover:bg-blue-400/[0.045] md:grid-cols-[38px_minmax(0,1fr)_36px_36px_36px_36px_55px] md:gap-2 md:px-6 md:py-3.5"
          >

            {/* Rank */}
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
            <div className="flex min-w-0 items-center gap-2 md:gap-3">

              <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">

                <img
                  src={faculty.logo}
                  alt=""
                  className="h-full w-full object-cover"
                />

              </div>


              <div className="min-w-0">

                <p className="truncate text-[10px] font-medium text-white md:text-sm">
                  {faculty.faculty}
                </p>

                <p className="text-[8px] uppercase tracking-wider text-white/25 md:text-[9px]">
                  {faculty.shortName}
                </p>

              </div>

            </div>


            {/* Played */}
            <span className="text-center text-[10px] text-white/45 md:text-xs">
              {faculty.played}
            </span>


            {/* Won */}
            <span className="text-center text-[10px] text-white/45 md:text-xs">
              {faculty.won}
            </span>


            {/* Lost */}
            <span className="text-center text-[10px] text-white/45 md:text-xs">
              {faculty.lost}
            </span>


            {/* Drawn */}
            <span className="text-center text-[10px] text-white/45 md:text-xs">
              {faculty.drawn}
            </span>


            {/* Points */}
            <span
              className={`text-right text-sm font-bold ${
                index === 0
                  ? "text-blue-300"
                  : "text-white/80"
              }`}
            >
              {faculty.points}
            </span>


            {/* Hover indicator */}
            <div className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 bg-blue-400 transition-transform duration-300 group-hover/row:scale-y-100" />

          </motion.div>

        ))}
      </div>


      {/* Footer */}
      <div className="border-t border-white/[0.05] px-5 py-3 md:px-6">

        <p className="text-[8px] uppercase tracking-[0.25em] text-white/20">
          All Faculties • One Championship
        </p>

      </div>

    </div>
  );
}