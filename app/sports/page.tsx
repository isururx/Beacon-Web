import TournamentOverview from "./TournamentOverview";
import RecentMatches from "./RecentMatches";
import UpcomingMatches from "./UpcomingMatches";
import RecentLiveFeeds from "./LiveUpdates";
import LiveUpdates from "./LiveUpdates";
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

      <UpcomingMatches
        matches={tournament.upcomingMatches}
      />

      <RecentLiveFeeds
        feeds={tournament.liveFeeds}
      />

      <LiveUpdates
        updates={tournament.liveUpdates}
      />
    </main>
  );
}