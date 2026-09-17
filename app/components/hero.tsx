"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6">

      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-blue-400"
        >
          Colombo Beacon
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
        >
          Navigation
          <br />
          <span className="text-blue-400">
            Towards Destination
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg"
        >
          A platform for creativity, talent, events and
          the journey of the Colombo Beacon family.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >

          <Link
            href="/events"
            className="rounded-full bg-blue-600 px-7 py-3.5 font-medium transition hover:bg-blue-500 hover:scale-105"
          >
            Explore Events
          </Link>

          <Link
            href="/articles"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-medium backdrop-blur transition hover:bg-white/10 hover:scale-105"
          >
            Read Articles
          </Link>

        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-500"
      >
        ↓
      </motion.div>

    </section>
  );
}