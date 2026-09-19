import TournamentOverview from "./TournamentOverview";
import { tournament } from "../data/sports.ts";

export default function SportsPage() {
  return (
    <main className="min-h-screen bg-[#061426] text-white">
      <TournamentOverview tournament={tournament} />
    </main>
  );
}