import Link from "next/link";
import { notFound } from "next/navigation";
import { historyData, getHistoryYear } from "../../data/history";

type YearPageProps = {
  params: Promise<{
    year: string;
  }>;
};

export function generateStaticParams() {
  return historyData.map((item) => ({
    year: item.year.toString(),
  }));
}

export default async function HistoryYearPage({
  params,
}: YearPageProps) {
  const { year } = await params;

  const yearNumber = Number(year);

  if (!Number.isInteger(yearNumber)) {
    notFound();
  }

  const history = getHistoryYear(yearNumber);

  if (!history) {
    notFound();
  }

  const currentIndex = historyData.findIndex(
    (item) => item.year === history.year
  );

  const previousYear = historyData[currentIndex - 1];
  const nextYear = historyData[currentIndex + 1];

  return (
    <main className="min-h-screen bg-[#020817] px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">

        {/* Back */}
        <Link
          href="/history"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
        >
          ← Back to Beacon Archive
        </Link>

        {/* Hero */}
        <section className="mt-12 border-b border-white/10 pb-16">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
            Beacon Archive
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">
              <p className="text-8xl font-bold tracking-[-0.06em] text-white md:text-[11rem]">
                {history.year}
              </p>

              <h1 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
                {history.theme}
              </h1>
            </div>

            <p className="max-w-xl text-base leading-8 text-gray-500 lg:col-span-4">
              {history.summary}
            </p>

          </div>
        </section>

        {/* Executive Committee */}
        <section className="py-16">

          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
              Leadership
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
              Executive Committee
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {history.executiveCommittee.map((member) => (
              <article
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

                  <h3 className="mt-2 text-sm font-medium text-white">
                    {member.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Events */}
        <section className="border-t border-white/10 py-16">

          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
              What happened
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
              Events & Activities
            </h2>
          </div>

          <div className="space-y-4">
            {history.events.map((event, index) => (
              <article
                key={`${event.title}-${index}`}
                className="group grid gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-blue-400/20 md:grid-cols-12"
              >
                <div className="md:col-span-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
                    {event.date}
                  </span>
                </div>

                <div className="md:col-span-7">
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-blue-300">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    {event.description}
                  </p>
                </div>

                <div className="flex items-start justify-end md:col-span-3">
                  <span className="text-gray-700 transition-colors group-hover:text-blue-400">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="border-t border-white/10 py-16">

          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
              Milestones
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
              Achievements
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {history.achievements.map((achievement, index) => (
              <div
                key={achievement}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
              >
                <span className="text-xs font-semibold text-blue-400">
                  0{index + 1}
                </span>

                <p className="mt-8 text-base leading-7 text-gray-300">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Memories */}
        <section className="border-t border-white/10 py-16">

          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
              Memories
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
              Moments from {history.year}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {history.memories.map((image, index) => (
              <div
                key={image}
                className={`group overflow-hidden rounded-2xl border border-white/10 ${
                  index === 0
                    ? "col-span-2 row-span-2"
                    : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${history.year} Beacon memory ${index + 1}`}
                  className="h-full min-h-[180px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Year navigation */}
        <section className="border-t border-white/10 pt-8">

          <div className="grid grid-cols-2 gap-4">

            {previousYear ? (
              <Link
                href={`/history/${previousYear.year}`}
                className="group rounded-2xl border border-white/10 p-5 transition-colors hover:border-blue-400/30"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
                  Previous
                </span>

                <p className="mt-2 text-xl font-semibold text-white">
                  ← {previousYear.year}
                </p>
              </Link>
            ) : (
              <div />
            )}

            {nextYear && (
              <Link
                href={`/history/${nextYear.year}`}
                className="group rounded-2xl border border-white/10 p-5 text-right transition-colors hover:border-blue-400/30"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
                  Next
                </span>

                <p className="mt-2 text-xl font-semibold text-white">
                  {nextYear.year} →
                </p>
              </Link>
            )}

          </div>

        </section>

      </div>
    </main>
  );
}