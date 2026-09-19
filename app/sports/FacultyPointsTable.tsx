import type { FacultyStanding } from "@/app/data/sports";

type FacultyPointsTableProps = {
  standings: FacultyStanding[];
};

export default function FacultyPointsTable({
  standings,
}: FacultyPointsTableProps) {
  const sortedStandings = [...standings].sort(
    (a, b) => b.points - a.points
  );

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md">

      {/* Header */}
      <div className="border-b border-white/10 px-6 py-5">
        <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
          Championship Table
        </p>

        <h3 className="mt-1 text-xl font-semibold text-white">
          Faculty Standings
        </h3>
      </div>

      {/* Column headings */}
      <div className="grid grid-cols-[1fr_50px_50px_70px] gap-3 border-b border-white/10 px-6 py-3 text-[10px] uppercase tracking-wider text-white/30">
        <span>Faculty</span>
        <span className="text-center">P</span>
        <span className="text-center">W</span>
        <span className="text-right">Points</span>
      </div>

      {/* Rows */}
      <div>
        {sortedStandings.map((faculty, index) => (
          <div
            key={faculty.id}
            className="grid grid-cols-[1fr_50px_50px_70px] items-center gap-3 border-b border-white/5 px-6 py-4 last:border-0"
          >
            {/* Faculty */}
            <div className="flex min-w-0 items-center gap-3">
              <span className="w-5 text-xs text-white/25">
                {index + 1}
              </span>

              <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/10">
                <img
                  src={faculty.logo}
                  alt={faculty.faculty}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  {faculty.faculty}
                </p>

                <p className="text-xs text-white/30">
                  {faculty.shortName}
                </p>
              </div>
            </div>

            {/* Played */}
            <span className="text-center text-sm text-white/55">
              {faculty.played}
            </span>

            {/* Won */}
            <span className="text-center text-sm text-white/55">
              {faculty.won}
            </span>

            {/* Points */}
            <span className="text-right text-sm font-semibold text-blue-300">
              {faculty.points}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}