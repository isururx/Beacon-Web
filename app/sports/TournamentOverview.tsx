import FacultyPointsTable from "./FacultyPointsTable";
import TopFivePodium from "./TopFivePodium";
import type { Tournament } from "@/app/data/sports";

type TournamentOverviewProps = {
  tournament: Tournament;
};

export default function TournamentOverview({
  tournament,
}: TournamentOverviewProps) {
  const totalSports = tournament.sports.length;
  const totalFaculties = tournament.standings.length;

  const completedMatches = tournament.recentMatches.filter(
    (match) => match.status === "completed"
  ).length;

  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            01 — Tournament Overview
          </p>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {tournament.name}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55 md:text-base">
                {tournament.description}
              </p>
            </div>

            <div className="rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm text-blue-300">
              {tournament.status}
            </div>
          </div>
        </div>

        {/* Tournament Stats */}
        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Stat
            label="Year"
            value={String(tournament.year)}
          />

          <Stat
            label="Sports"
            value={String(totalSports)}
          />

          <Stat
            label="Faculties"
            value={String(totalFaculties)}
          />

          <Stat
            label="Completed Matches"
            value={String(completedMatches)}
          />
        </div>

        {/* Points + Top 5 */}
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Full Points Table */}
          <FacultyPointsTable
            standings={tournament.standings}
          />

          {/* Top Five */}
          <TopFivePodium
            standings={tournament.standings}
          />

        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
      <p className="text-xs uppercase tracking-[0.2em] text-white/35">
        {label}
      </p>

      <p className="mt-2 text-2xl font-semibold text-white">
        {value}
      </p>
    </div>
  );
}