import { NextResponse } from "next/server";

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

export async function GET() {
  return NextResponse.json(events);
}