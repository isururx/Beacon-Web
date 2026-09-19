import BeaconHero from "./components/BeaconExperience";
import FeaturedEvents from "./components/FeaturedEvents";
import FeaturedArticles from "./components/FeaturedArticles";
import AboutBeacon from "./components/AboutBeacon";
import BeaconMemories from "./components/BeaconMemories";
import HistoryPreview from "./components/HistoryPreview";

const events = [
  {
    id: 1,
    title: "Beacon Orientation",
    date: "September 2026",
    category: "Community",
  },
  {
    id: 2,
    title: "Beacon Creative Workshop",
    date: "October 2026",
    category: "Workshop",
  },
  {
    id: 3,
    title: "University Sports Coverage",
    date: "October 2026",
    category: "Sports",
  },
];

export default function Home() {
  return (
    <main>
      <BeaconHero />

      <FeaturedEvents events={events} />

      <FeaturedArticles />

      <AboutBeacon />

      <BeaconMemories />

      <HistoryPreview />
    </main>
  );
}