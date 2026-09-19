"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Event = {
  id: number;
  title: string;
  date: string;
  category: string;
};

type FeaturedEventsProps = {
  events: Event[];
};

export default function FeaturedEvents({
  events,
}: FeaturedEventsProps) {
  const featuredEvent = events[0];
  const otherEvents = events.slice(1);

  return (
    <section className="relative overflow-hidden px-6 py-16 md:py-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between md:mb-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              What's happening
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Upcoming
              <span className="text-blue-400"> Events.</span>
            </h2>
          </div>

          <Link
            href="/events"
            className="hidden text-sm font-medium text-gray-400 transition-colors hover:text-white md:block"
          >
            View all events →
          </Link>
        </div>

        {/* Main Event Layout */}
        <div className="grid gap-5 lg:grid-cols-12">

          {/* Featured Event */}
          {featuredEvent && (
            <motion.article
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] lg:col-span-7"
            >
              <Link href="/events">
                <div className="relative min-h-[420px] overflow-hidden">

                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-[#07152b] to-[#020817]" />

                  {/* Grid */}
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                      backgroundSize: "45px 45px",
                    }}
                  />

                  {/* Glow */}
                  <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px] transition-all duration-700 group-hover:bg-blue-400/30" />

                  {/* Giant BEACON letter */}
                  <div className="absolute right-[-30px] top-[-30px] select-none text-[180px] font-black leading-none text-white/[0.025] transition-transform duration-700 group-hover:scale-110">
                    B
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-9">

                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-300 backdrop-blur-md">
                        Featured
                      </span>

                      <span className="text-xs text-gray-500">
                        {featuredEvent.category}
                      </span>
                    </div>

                    <div>
                      <p className="mb-3 text-sm text-blue-300">
                        {featuredEvent.date}
                      </p>

                      <h3 className="max-w-xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                        {featuredEvent.title}
                      </h3>

                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
                        Explore event
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Other Events */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {otherEvents.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -4 }}
                className="group flex flex-1 rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-blue-400/20"
              >
                <Link
                  href="/events"
                  className="flex w-full flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                      {event.category}
                    </span>

                    <span className="text-gray-700 transition-colors group-hover:text-blue-400">
                      ↗
                    </span>
                  </div>

                  <div className="mt-8">
                    <p className="text-xs text-gray-500">
                      {event.date}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-white transition-colors group-hover:text-blue-300">
                      {event.title}
                    </h3>
                  </div>

                  <div className="mt-8 h-px w-full bg-white/10">
                    <div className="h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Mobile link */}
        <div className="mt-7 text-center md:hidden">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/40 px-5 py-2.5 text-xs font-medium text-blue-300 backdrop-blur-sm transition-colors hover:border-blue-400 hover:text-white"
          >
            View all events →
          </Link>
        </div>
      </div>
    </section>
  );
}