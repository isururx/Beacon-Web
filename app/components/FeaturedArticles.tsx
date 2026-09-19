"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Article = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: "Where Ideas Become Impact",
    excerpt:
      "Discover the people, ideas and experiences shaping the Colombo Beacon community.",
    category: "Beacon Stories",
    date: "September 2026",
    image: "/images/memories/1.jpg",
  },
  {
    id: 2,
    title: "Building a Community Beyond the Classroom",
    excerpt:
      "How collaboration, creativity and student-led initiatives create meaningful experiences.",
    category: "Community",
    date: "September 2026",
    image: "/images/memories/2.jpg",
  },
  {
    id: 3,
    title: "Inside Colombo Beacon",
    excerpt:
      "A closer look at the people and activities behind the Beacon community.",
    category: "Behind the Scenes",
    date: "August 2026",
    image: "/images/memories/3.jpg",
  },
];

export default function FeaturedArticles() {
  return (
    <section className="relative overflow-hidden px-6 py-16 md:py-20">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:mb-10 md:flex-row md:items-end">

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              From the Beacon
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Stories worth
              <span className="text-blue-400"> sharing.</span>
            </h2>
          </div>

          <Link
            href="/articles"
            className="hidden text-sm font-medium text-gray-400 transition-colors hover:text-white md:block"
          >
            View all articles →
          </Link>
        </div>

        {/* Articles */}
        <div className="grid gap-5 lg:grid-cols-12">

          {/* Featured article */}
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] lg:col-span-7"
          >
            <Link href={`/articles/${articles[0].id}`}>

              <div className="relative aspect-[16/10] overflow-hidden">

                <motion.img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7 }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/20 to-transparent" />

                {/* Hover glow */}
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-blue-300 backdrop-blur-md">
                    {articles[0].category}
                  </span>

                  <h3 className="mt-4 max-w-xl text-2xl font-semibold leading-tight text-white md:text-4xl">
                    {articles[0].title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-300">
                    {articles[0].excerpt}
                  </p>

                  <p className="mt-5 text-xs text-gray-500">
                    {articles[0].date}
                  </p>

                </div>
              </div>

            </Link>
          </motion.article>

          {/* Smaller articles */}
          <div className="flex flex-col gap-5 lg:col-span-5">

            {articles.slice(1).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group flex flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-colors hover:border-blue-400/20"
              >
                <Link
                  href={`/articles/${article.id}`}
                  className="flex w-full flex-col sm:flex-row"
                >

                  {/* Image */}
                  <div className="relative h-52 w-full shrink-0 overflow-hidden sm:h-auto sm:w-2/5">

                    <motion.img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/60 to-transparent sm:bg-gradient-to-r" />

                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center p-5 md:p-6">

                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                      {article.category}
                    </span>

                    <h3 className="mt-3 text-xl font-semibold leading-tight text-white transition-colors group-hover:text-blue-300">
                      {article.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-400">
                      {article.excerpt}
                    </p>

                    <p className="mt-4 text-xs text-gray-600">
                      {article.date}
                    </p>

                  </div>
                </Link>
              </motion.article>
            ))}

          </div>
        </div>

        {/* Mobile button */}
        <div className="mt-7 text-center md:hidden">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/40 px-5 py-2.5 text-xs font-medium text-blue-300 backdrop-blur-sm transition-colors hover:border-blue-400 hover:text-white"
          >
            View all articles →
          </Link>
        </div>

      </div>
    </section>
  );
}