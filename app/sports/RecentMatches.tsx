import type { RecentMatch } from "@/app/data/sports";
import MatchResultCard from "./MatchResultCard";

type RecentMatchesProps = {
  matches: RecentMatch[];
};

export default function RecentMatches({
  matches,
}: RecentMatchesProps) {
  const recentMatches = matches.slice(0, 3);

  if (recentMatches.length === 0) {
    return null;
  }

  return (
    <section className="relative px-4 pb-10 pt-2 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Section header */}
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400">
              02 / Recent Results
            </p>

            <h2 className="mt-1 text-2xl font-medium tracking-tight text-white md:text-3xl">
              Completed Matches
            </h2>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/20 md:block">
            Latest finishes
          </span>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {recentMatches.map((match, index) => (
            <MatchResultCard
              key={match.id}
              match={match}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}