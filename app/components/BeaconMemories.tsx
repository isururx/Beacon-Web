"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const memories = [
  {
    src: "/images/memories/1.jpg",
    title: "Moments",
  },
  {
    src: "/images/memories/2.jpg",
    title: "Community",
  },
  {
    src: "/images/memories/3.jpg",
    title: "Creating",
  },
  {
    src: "/images/memories/4.jpg",
    title: "Together",
  },
  {
    src: "/images/memories/5.jpg",
    title: "Experiences",
  },
];

export default function BeaconMemories() {
  return (
    <section className="relative overflow-hidden px-6 py-16 md:py-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-[-180px] top-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/[0.07] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:mb-10 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              The memories
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Moments that
              <span className="text-blue-400"> stay.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-gray-500">
            Every event leaves behind a story. These are some of the moments
            that make Beacon what it is.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">

          {/* Large image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative col-span-2 row-span-2 min-h-[420px] overflow-hidden rounded-3xl border border-white/10"
          >
            <img
              src={memories[0].src}
              alt={memories[0].title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-300">
                01
              </span>

              <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                {memories[0].title}
              </h3>
            </div>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative aspect-square overflow-hidden rounded-3xl border border-white/10"
          >
            <img
              src={memories[1].src}
              alt={memories[1].title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/80 to-transparent" />

            <span className="absolute bottom-5 left-5 text-sm font-medium text-white">
              {memories[1].title}
            </span>
          </motion.div>

          {/* Image 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative aspect-square overflow-hidden rounded-3xl border border-white/10"
          >
            <img
              src={memories[2].src}
              alt={memories[2].title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/80 to-transparent" />

            <span className="absolute bottom-5 left-5 text-sm font-medium text-white">
              {memories[2].title}
            </span>
          </motion.div>

          {/* Image 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="group relative aspect-square overflow-hidden rounded-3xl border border-white/10"
          >
            <img
              src={memories[3].src}
              alt={memories[3].title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/80 to-transparent" />

            <span className="absolute bottom-5 left-5 text-sm font-medium text-white">
              {memories[3].title}
            </span>
          </motion.div>

          {/* Image 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="group relative aspect-square overflow-hidden rounded-3xl border border-white/10"
          >
            <img
              src={memories[4].src}
              alt={memories[4].title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/80 to-transparent" />

            <span className="absolute bottom-5 left-5 text-sm font-medium text-white">
              {memories[4].title}
            </span>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-7 flex items-center justify-between border-t border-white/10 pt-6"
        >
          <p className="text-xs text-gray-600">
            A collection of Beacon memories
          </p>

          <Link
            href="/history"
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            Explore our history →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}