// ============================================================
// SPORTS DATA TYPES
// ============================================================

export type TournamentStatus =
  | "upcoming"
  | "ongoing"
  | "completed";

export type MatchStatus =
  | "upcoming"
  | "live"
  | "completed";


// ============================================================
// FACULTY STANDINGS
// ============================================================

export type FacultyStanding = {
  id: string;

  faculty: string;
  shortName: string;

  logo: string;

  points: number;

  played: number;
  won: number;
  lost: number;
  drawn: number;
};


// ============================================================
// SPORTS
// ============================================================

export type Sport = {
  id: string;
  name: string;
};


// ============================================================
// MATCH
// Used later for live/upcoming match functionality.
// ============================================================

export type Match = {
  id: string;

  sport: string;

  teamA: {
    faculty: string;
    logo: string;
    score?: string;
  };

  teamB: {
    faculty: string;
    logo: string;
    score?: string;
  };

  points?: {
    teamA: number;
    teamB: number;
  };

  date: string;
  time: string;
  venue: string;

  status: MatchStatus;
};


// ============================================================
// RECENT MATCH RESULT
//
// Recent matches show the FIRST 3 FACULTIES only.
// This is different from the overall tournament standings.
// ============================================================

export type MatchPlacement = {
  position: 1 | 2 | 3;

  faculty: string;

  photo: string;

  points: number;
};


export type RecentMatch = {
  id: string;

  sport: string;

  placements: MatchPlacement[];

  date: string;
  time: string;
  venue: string;
};


// ============================================================
// UPCOMING MATCH
//
// Intentionally contains only the information required for
// the public upcoming-match section.
// ============================================================

export type UpcomingMatch = {
  id: string;

  sport: string;

  venue: string;

  date: string;

  time: string;
};


// ============================================================
// SPORTS LIVE FEED
//
// These represent recent Facebook video/update posts.
// ============================================================

export type SportsFeed = {
  id: string;

  sport: string;

  title: string;

  description: string;

  thumbnail: string;

  publishedAt: string;

  facebookUrl: string;
};


// ============================================================
// TOURNAMENT
// ============================================================

export type Tournament = {
  id: string;

  name: string;

  year: number;

  status: TournamentStatus;

  description: string;

  sports: Sport[];

  standings: FacultyStanding[];

  recentMatches: RecentMatch[];

  upcomingMatches: UpcomingMatch[];

  liveFeeds: SportsFeed[];
};


// ============================================================
// CURRENT TOURNAMENT
//
// Frontend mock data for the Sports Dashboard.
// Later this same structure can be populated by the backend.
// ============================================================

export const tournament: Tournament = {
  id: "freshers-2026",

  name: "Freshers Championship",

  year: 2026,

  status: "ongoing",

  description:
    "Follow the latest standings, results, upcoming matches and sports coverage from the University of Colombo.",


  // ==========================================================
  // SPORTS
  // ==========================================================

  sports: [
    {
      id: "cricket",
      name: "Cricket",
    },

    {
      id: "football",
      name: "Football",
    },

    {
      id: "volleyball",
      name: "Volleyball",
    },

    {
      id: "athletics",
      name: "Athletics",
    },
  ],


  // ==========================================================
  // FACULTY CHAMPIONSHIP STANDINGS
  //
  // These are the overall tournament standings.
  // ==========================================================

  standings: [
    {
      id: "faculty-1",

      faculty: "Faculty of Technology",

      shortName: "FOT",

      logo: "/images/faculties/technology.jpg",

      points: 42,

      played: 8,
      won: 6,
      lost: 2,
      drawn: 0,
    },

    {
      id: "faculty-2",

      faculty: "Faculty of Science",

      shortName: "FOS",

      logo: "/images/faculties/science.jpg",

      points: 38,

      played: 8,
      won: 5,
      lost: 2,
      drawn: 1,
    },

    {
      id: "faculty-3",

      faculty: "Faculty of Management",

      shortName: "FOM",

      logo: "/images/faculties/management.jpg",

      points: 34,

      played: 8,
      won: 5,
      lost: 3,
      drawn: 0,
    },

    {
      id: "faculty-4",

      faculty: "Faculty of Arts",

      shortName: "FOA",

      logo: "/images/faculties/arts.jpg",

      points: 29,

      played: 8,
      won: 4,
      lost: 3,
      drawn: 1,
    },

    {
      id: "faculty-5",

      faculty: "Faculty of Law",

      shortName: "FOL",

      logo: "/images/faculties/law.jpg",

      points: 25,

      played: 8,
      won: 3,
      lost: 4,
      drawn: 1,
    },

    {
      id: "faculty-6",

      faculty: "Faculty of Education",

      shortName: "FOE",

      logo: "/images/faculties/education.jpg",

      points: 21,

      played: 8,
      won: 3,
      lost: 5,
      drawn: 0,
    },
  ],


  // ==========================================================
  // RECENT MATCH RESULTS
  //
  // Only the first 3 faculties are displayed for each result.
  // ==========================================================

  recentMatches: [
    {
      id: "cricket-001",

      sport: "Cricket",

      placements: [
        {
          position: 1,

          faculty: "Faculty of Technology",

          photo: "/images/faculties/technology.jpg",

          points: 142,
        },

        {
          position: 2,

          faculty: "Faculty of Science",

          photo: "/images/faculties/science.jpg",

          points: 137,
        },

        {
          position: 3,

          faculty: "Faculty of Management",

          photo: "/images/faculties/management.jpg",

          points: 121,
        },
      ],

      date: "2026-09-18",

      time: "2:30 PM",

      venue: "University Grounds",
    },


    {
      id: "football-001",

      sport: "Football",

      placements: [
        {
          position: 1,

          faculty: "Faculty of Science",

          photo: "/images/faculties/science.jpg",

          points: 3,
        },

        {
          position: 2,

          faculty: "Faculty of Arts",

          photo: "/images/faculties/arts.jpg",

          points: 1,
        },

        {
          position: 3,

          faculty: "Faculty of Technology",

          photo: "/images/faculties/technology.jpg",

          points: 0,
        },
      ],

      date: "2026-09-17",

      time: "4:00 PM",

      venue: "University Grounds",
    },


    {
      id: "volleyball-001",

      sport: "Volleyball",

      placements: [
        {
          position: 1,

          faculty: "Faculty of Management",

          photo: "/images/faculties/management.jpg",

          points: 3,
        },

        {
          position: 2,

          faculty: "Faculty of Technology",

          photo: "/images/faculties/technology.jpg",

          points: 1,
        },

        {
          position: 3,

          faculty: "Faculty of Arts",

          photo: "/images/faculties/arts.jpg",

          points: 0,
        },
      ],

      date: "2026-09-16",

      time: "10:00 AM",

      venue: "Indoor Stadium",
    },
  ],


  // ==========================================================
  // UPCOMING MATCHES
  //
  // Only:
  // Sport
  // Venue
  // Date
  // Time
  // ==========================================================

  upcomingMatches: [
    {
      id: "upcoming-001",

      sport: "Cricket",

      venue: "University Grounds",

      date: "2026-09-20",

      time: "9:00 AM",
    },

    {
      id: "upcoming-002",

      sport: "Football",

      venue: "University Grounds",

      date: "2026-09-20",

      time: "3:30 PM",
    },

    {
      id: "upcoming-003",

      sport: "Volleyball",

      venue: "Indoor Stadium",

      date: "2026-09-21",

      time: "10:00 AM",
    },
  ],


  // ==========================================================
  // RECENT LIVE FEEDS
  //
  // Mock Facebook video/update posts.
  // ==========================================================

  liveFeeds: [
    {
      id: "feed-001",

      sport: "Cricket",

      title: "Cricket finals update from University Grounds",

      description:
        "Latest moments and updates from today's cricket action.",

      thumbnail: "/images/sports/cricket-feed.jpg",

      publishedAt: "2026-09-18T15:30:00",

      facebookUrl: "https://www.facebook.com/",
    },

    {
      id: "feed-002",

      sport: "Football",

      title: "Football match day coverage",

      description:
        "Follow the latest moments from the football tournament.",

      thumbnail: "/images/sports/football-feed.jpg",

      publishedAt: "2026-09-17T17:00:00",

      facebookUrl: "https://www.facebook.com/",
    },

    {
      id: "feed-003",

      sport: "Volleyball",

      title: "Volleyball tournament update",

      description:
        "Recent coverage from the University Indoor Stadium.",

      thumbnail: "/images/sports/volleyball-feed.jpg",

      publishedAt: "2026-09-16T12:00:00",

      facebookUrl: "https://www.facebook.com/",
    },
  ],
};