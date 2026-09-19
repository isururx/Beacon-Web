import FacultyPointsTable from "./FacultyPointsTable";
import TopFivePodium from "./TopFivePodium";
import type { Tournament } from "@/app/data/sports";

type TournamentOverviewProps = {
  tournament: Tournament;
};

export default function TournamentOverview({
  tournament,
}: TournamentOverviewProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-8 md:px-8 md:pb-12 md:pt-10 lg:px-12">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Tournament Identity */}
        <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div className="min-w-0">

            {/* Section label */}
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.35em] text-blue-400">
              01 / Sports
            </p>

            {/* Tournament Name */}
            <h1 className="whitespace-nowrap text-[clamp(2.5rem,6vw,5.5rem)] font-semibold uppercase leading-none tracking-[-0.04em] text-white">
              {tournament.name}
            </h1>

            {/* Location + Year */}
            <div className="mt-4 flex items-center gap-3 text-sm text-white/45">
              <span>University of Colombo</span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span>{tournament.year}</span>
            </div>
          </div>

          {/* Tournament Status */}
          <div className="flex items-center gap-2 self-start rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 md:self-end">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.15em] text-emerald-300">
              {tournament.status}
            </span>
          </div>
        </div>

        {/* Main Tournament Overview */}
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Faculty Points Table */}
          <FacultyPointsTable
            standings={tournament.standings}
          />

          {/* Animated Top 5 */}
          <TopFivePodium
            standings={tournament.standings}
          />

        </div>
      </div>
    </section>
  );
}