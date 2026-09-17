"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type EventCardProps = {
  title: string;
  date: string;
  category: string;
};

export default function EventCard({
  title,
  date,
  category,
}: EventCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
    >
      <span className="text-sm font-medium text-blue-400">
        {category}
      </span>

      <h3 className="mt-4 text-xl font-semibold transition group-hover:text-blue-400">
        {title}
      </h3>

      <p className="mt-3 text-sm text-gray-400">
        {date}
      </p>

      <Link
        href="/events"
        className="mt-6 inline-block text-sm font-medium text-gray-300 transition hover:text-white"
      >
        Learn more →
      </Link>
    </motion.article>
  );
}