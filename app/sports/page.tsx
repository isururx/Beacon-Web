import TournamentOverview from "./TournamentOverview";
import RecentMatches from "./RecentMatches";
import { tournament } from "../data/sports";

export default function SportsPage() {
  return (
    <main className="min-h-screen bg-[#061426] text-white">

      <TournamentOverview
        tournament={tournament}
      />

      <RecentMatches
        matches={tournament.recentMatches}
      />

    </main>
  );
}