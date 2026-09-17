import Link from "next/link";
import EventCard from "./EventCard";

type Event = {
  id: number;
  title: string;
  date: string;
  category: string;
};

async function getEvents(): Promise<Event[]> {
  const response = await fetch("http://localhost:3000/api/events");

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  return response.json();
}

export default async function FeaturedEvents() {
  const events = await getEvents();

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Upcoming Events
          </h2>
          <Link
            href="/events"
            className="hidden text-sm font-medium md:block"
          >
            View all →
          </Link>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              category={event.category}
            />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/40 px-5 py-2.5 text-xs font-medium text-blue-300 backdrop-blur-sm transition-colors hover:border-blue-400 hover:text-white"
          >
            View all events →
          </Link>
        </div>

      </div>
    </section>
  );
}