"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const highlights = [
  {
    number: "01",
    title: "Connect",
    text: "Meet people, build relationships and become part of a growing community.",
  },
  {
    number: "02",
    title: "Create",
    text: "Turn ideas into experiences, projects and initiatives that matter.",
  },
  {
    number: "03",
    title: "Impact",
    text: "Contribute to the university community and create meaningful change.",
  },
];

export default function AboutBeacon() {
  return (
    <section className="relative overflow-hidden px-6 py-16 md:py-24">

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/[0.07] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
            About Colombo Beacon
          </p>
        </motion.div>

        {/* Main statement */}
        <div className="mt-7 grid gap-10 lg:grid-cols-12 lg:items-end">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              More than a club.
              <br />
              <span className="text-blue-400">
                A community in motion.
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-4"
          >
            <p className="text-base leading-7 text-gray-400 md:text-lg">
              Colombo Beacon brings together students who want to connect,
              create experiences and contribute to something bigger than
              themselves.
            </p>

            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-blue-300"
            >
              Discover Beacon
              <span>→</span>
            </Link>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10 md:my-14" />

        {/* Highlights */}
        <div className="grid md:grid-cols-3">

          {highlights.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className={`group relative py-5 md:px-8 md:py-4 ${
                index !== 0
                  ? "border-t border-white/10 md:border-l md:border-t-0"
                  : ""
              }`}
            >

              {/* Number / Arrow */}
              <div className="flex items-start justify-between">

                <span className="text-xs font-medium tracking-[0.2em] text-blue-400">
                  {item.number}
                </span>

                <span className="text-gray-700 transition-colors duration-300 group-hover:text-blue-400">
                  ↗
                </span>

              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-sm text-sm leading-7 text-gray-500">
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}