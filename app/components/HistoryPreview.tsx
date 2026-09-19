"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { historyData } from "../data/history";

export default function HistoryPreview() {
  const [selectedYear, setSelectedYear] = useState(
    historyData[historyData.length - 1].year
  );

  const timelineRef = useRef<HTMLDivElement>(null);

  const selectedIndex = historyData.findIndex(
    (item) => item.year === selectedYear
  );

  const selected = historyData[selectedIndex];

  const goPrevious = () => {
    if (selectedIndex > 0) {
      setSelectedYear(historyData[selectedIndex - 1].year);
    }
  };

  const goNext = () => {
    if (selectedIndex < historyData.length - 1) {
      setSelectedYear(historyData[selectedIndex + 1].year);
    }
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!timelineRef.current) return;

    timelineRef.current.scrollLeft += event.deltaY;
  };

  return (
    <section className="relative overflow-hidden px-6 py-16 md:py-24">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.05] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ========================================= */}
        {/* HEADER */}
        {/* ========================================= */}

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
              The Beacon Archive
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Our story,
              <br />
              <span className="text-blue-400">
                year by year.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-7 text-gray-500 md:text-base">
              Explore the people, leadership, events and memories that shaped
              Colombo Beacon throughout the years.
            </p>

            <Link
              href="/history"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Open full archive
              <span>→</span>
            </Link>
          </div>

        </div>

        {/* ========================================= */}
        {/* YEAR TIMELINE */}
        {/* ========================================= */}

        <div className="mt-12 md:mt-16">

          {/* Timeline controls */}
          <div className="mb-4 flex items-center justify-between">

            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-gray-600">
              Drag timeline
            </p>

            <div className="flex gap-2">

              <button
                type="button"
                onClick={goPrevious}
                disabled={selectedIndex === 0}
                aria-label="Previous year"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-all hover:border-blue-400/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                ←
              </button>

              <button
                type="button"
                onClick={goNext}
                disabled={selectedIndex === historyData.length - 1}
                aria-label="Next year"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-all hover:border-blue-400/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                →
              </button>

            </div>
          </div>

          {/* Timeline */}
          <div
            ref={timelineRef}
            onWheel={handleWheel}
            className="overflow-x-auto scrollbar-hide"
          >
            <div className="relative flex min-w-max items-center px-8 py-7">

              {/* Timeline line */}
              <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10" />

              {historyData.map((item) => {
                const active = item.year === selectedYear;

                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => setSelectedYear(item.year)}
                    className="group relative z-10 flex w-40 flex-col items-center gap-4 px-5 md:w-56"
                  >

                    {/* Year */}
                    <motion.span
                      animate={{
                        scale: active ? 1.15 : 1,
                      }}
                      className={`text-sm font-semibold tracking-[0.2em] transition-colors ${
                        active
                          ? "text-blue-400"
                          : "text-gray-600 group-hover:text-gray-300"
                      }`}
                    >
                      {item.year}
                    </motion.span>

                    {/* Node */}
                    <motion.span
                      animate={{
                        scale: active ? 1.25 : 1,
                      }}
                      className={`relative flex h-6 w-6 items-center justify-center rounded-full border bg-[#020817] transition-all duration-300 ${
                        active
                          ? "border-blue-400 shadow-[0_0_30px_rgba(96,165,250,0.45)]"
                          : "border-white/20 group-hover:border-blue-400/50"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full transition-colors ${
                          active
                            ? "bg-blue-400"
                            : "bg-gray-700 group-hover:bg-blue-400"
                        }`}
                      />
                    </motion.span>

                    {/* Theme */}
                    <span
                      className={`text-xs transition-colors ${
                        active
                          ? "text-gray-300"
                          : "text-gray-700 group-hover:text-gray-500"
                      }`}
                    >
                      {item.theme}
                    </span>

                  </button>
                );
              })}

            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* SELECTED YEAR */}
        {/* ========================================= */}

        <motion.div
          key={selected.year}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >

          <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-8 lg:grid-cols-12">

            {/* Year */}
            <div className="lg:col-span-3">

              <span className="text-[10px] uppercase tracking-[0.3em] text-blue-400">
                Selected year
              </span>

              <p className="mt-2 text-6xl font-bold tracking-[-0.05em] text-white md:text-7xl">
                {selected.year}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {selected.theme}
              </p>

            </div>

            {/* Description */}
            <div className="lg:col-span-6 lg:border-l lg:border-white/10 lg:pl-8">

              <p className="text-base leading-8 text-gray-400 md:text-lg">
                {selected.summary}
              </p>

            </div>

            {/* Explore */}
            <div className="flex items-end lg:col-span-3 lg:justify-end">

              <Link
                href={`/history/${selected.year}`}
                className="inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-sm font-medium text-blue-300 transition-all hover:border-blue-400 hover:bg-blue-500/20 hover:text-white"
              >
                Explore {selected.year}
                <span>→</span>
              </Link>

            </div>

          </div>

        </motion.div>

        {/* ========================================= */}
        {/* EXCO */}
        {/* ========================================= */}

        <motion.div
          key={`committee-${selected.year}`}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-10"
        >

          <div className="mb-6 flex items-end justify-between">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400">
                Leadership · {selected.year}
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                Executive Committee
              </h3>
            </div>

            <Link
              href={`/history/${selected.year}`}
              className="hidden text-sm text-gray-500 transition-colors hover:text-white md:block"
            >
              View full committee →
            </Link>

          </div>

          {/* EXCO cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">

            {selected.executiveCommittee.map((member) => (
              <motion.div
                key={member.role}
                layout
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-colors hover:border-blue-400/20"
              >

                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden bg-white/[0.03]">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#020817] to-transparent opacity-70" />

                </div>

                {/* Details */}
                <div className="p-4">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-400">
                    {member.role}
                  </p>

                  <p className="mt-2 text-sm font-medium leading-tight text-white">
                    {member.name}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

          {/* Mobile archive link */}
          <div className="mt-6 md:hidden">
            <Link
              href={`/history/${selected.year}`}
              className="text-sm text-gray-500 transition-colors hover:text-white"
            >
              View full {selected.year} history →
            </Link>
          </div>

        </motion.div>

        {/* ========================================= */}
        {/* BOTTOM */}
        {/* ========================================= */}

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-600">
            Drag, click or use the arrows to explore Beacon's history.
          </p>

          <Link
            href="/history"
            className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500 transition-colors hover:text-blue-300"
          >
            Explore complete archive →
          </Link>

        </div>

      </div>
    </section>
  );
}