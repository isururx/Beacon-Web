"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { historyData } from "../data/history";

export default function HistoryTimeline() {
  const [selectedYear, setSelectedYear] = useState(historyData[historyData.length - 1].year);
  const timelineRef = useRef<HTMLDivElement>(null);

  const selected = historyData.find(
    (item) => item.year === selectedYear
  )!;

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!timelineRef.current) return;

    timelineRef.current.scrollLeft += event.deltaY;
  };

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-10 md:pb-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
            The Beacon Archive
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
            Our story,
            <br />
            <span className="text-blue-400">year by year.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
            Explore the people, events and moments that shaped Colombo Beacon
            throughout the years.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Instruction */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
              Drag to explore
            </span>

            <span className="text-xs text-gray-600">
              {selected.year}
            </span>
          </div>

          <div
            ref={timelineRef}
            onWheel={handleWheel}
            className="overflow-x-auto pb-5 scrollbar-hide"
          >
            <div className="relative flex min-w-max items-center px-6">

              {/* Timeline line */}
              <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/10" />

              {historyData.map((item) => {
                const active = item.year === selectedYear;

                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => setSelectedYear(item.year)}
                    className="group relative z-10 flex w-36 flex-col items-center gap-4 px-4 py-6 md:w-48"
                  >
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        active
                          ? "text-blue-400"
                          : "text-gray-600 group-hover:text-gray-300"
                      }`}
                    >
                      {item.year}
                    </span>

                    <span
                      className={`relative flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 ${
                        active
                          ? "border-blue-400 bg-[#020817] shadow-[0_0_25px_rgba(96,165,250,0.5)]"
                          : "border-white/20 bg-[#020817] group-hover:border-blue-400/50"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-all ${
                          active
                            ? "bg-blue-400"
                            : "bg-gray-700 group-hover:bg-blue-400"
                        }`}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected year */}
        <motion.div
          key={selected.year}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.025] p-7 md:p-10 lg:grid-cols-12">

            {/* Year */}
            <div className="lg:col-span-3">
              <p className="text-7xl font-bold tracking-tighter text-white md:text-8xl">
                {selected.year}
              </p>

              <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                {selected.theme}
              </p>
            </div>

            {/* Summary */}
            <div className="lg:col-span-6">
              <p className="text-base leading-8 text-gray-400 md:text-lg">
                {selected.summary}
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-start lg:col-span-3 lg:justify-end">
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

        {/* EXCO Preview */}
        <motion.div
          key={`exco-${selected.year}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14"
        >
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
                Leadership
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                Executive Committee
              </h2>
            </div>

            <Link
              href={`/history/${selected.year}`}
              className="hidden text-sm text-gray-500 transition-colors hover:text-white md:block"
            >
              View full year →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {selected.executiveCommittee.map((member) => (
              <div
                key={member.role}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]"
              >
                <div className="aspect-[4/5] overflow-hidden bg-white/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-blue-400">
                    {member.role}
                  </p>

                  <p className="mt-2 text-sm font-medium text-white">
                    {member.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}