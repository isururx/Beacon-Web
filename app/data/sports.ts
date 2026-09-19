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
// Reserved for future detailed/live match functionality.
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
// A completed sporting event displays only:
// 1st place
// 2nd place
// 3rd place
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
  // All 9 official faculties.
  // ==========================================================

  standings: [
    {
      id: "faculty-arts",

      faculty: "Faculty of Arts",

      shortName: "ARTS",

      logo: "/images/faculties/Arts.jpg",

      points: 42,

      played: 8,
      won: 6,
      lost: 2,
      drawn: 0,
    },

    {
      id: "faculty-education",

      faculty: "Faculty of Education",

      shortName: "EDU",

      logo: "/images/faculties/Education.jpg",

      points: 38,

      played: 8,
      won: 5,
      lost: 2,
      drawn: 1,
    },

    {
      id: "faculty-indigenous-medicine",

      faculty: "Faculty of Indigenous Medicine",

      shortName: "FIM",

      logo: "/images/faculties/Indigenous Medicine.jpg",

      points: 34,

      played: 8,
      won: 5,
      lost: 3,
      drawn: 0,
    },

    {
      id: "faculty-law",

      faculty: "Faculty of Law",

      shortName: "LAW",

      logo: "/images/faculties/Law.jpg",

      points: 31,

      played: 8,
      won: 4,
      lost: 2,
      drawn: 2,
    },

    {
      id: "faculty-management-finance",

      faculty: "Faculty of Management & Finance",

      shortName: "FMF",

      logo: "/images/faculties/Fmf.png",

      points: 29,

      played: 8,
      won: 4,
      lost: 3,
      drawn: 1,
    },

    {
      id: "faculty-medicine",

      faculty: "Faculty of Medicine",

      shortName: "MED",

      logo: "/images/faculties/Medicine.jpg",

      points: 26,

      played: 8,
      won: 3,
      lost: 3,
      drawn: 2,
    },

    {
      id: "faculty-nursing",

      faculty: "Faculty of Nursing",

      shortName: "NURS",

      logo: "/images/faculties/Nursing.jpg",

      points: 23,

      played: 8,
      won: 3,
      lost: 5,
      drawn: 0,
    },

    {
      id: "faculty-science",

      faculty: "Faculty of Science",

      shortName: "SCI",

      logo: "/images/faculties/Science.jpg",

      points: 20,

      played: 8,
      won: 2,
      lost: 4,
      drawn: 2,
    },

    {
      id: "faculty-technology",

      faculty: "Faculty of Technology",

      shortName: "TECH",

      logo: "/images/faculties/Technology.jpg",

      points: 17,

      played: 8,
      won: 2,
      lost: 5,
      drawn: 1,
    },
  ],


  // ==========================================================
  // RECENT MATCH RESULTS
  //
  // Only 1st / 2nd / 3rd are shown.
  // ==========================================================

  recentMatches: [
    {
      id: "cricket-001",

      sport: "Cricket",

      placements: [
        {
          position: 1,

          faculty: "Faculty of Arts",

          photo: "/images/faculties/Arts.jpg",

          points: 142,
        },

        {
          position: 2,

          faculty: "Faculty of Science",

          photo: "/images/faculties/Science.jpg",

          points: 137,
        },

        {
          position: 3,

          faculty: "Faculty of Technology",

          photo: "/images/faculties/Technology.jpg",

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

          photo: "/images/faculties/Science.jpg",

          points: 3,
        },

        {
          position: 2,

          faculty: "Faculty of Arts",

          photo: "/images/faculties/Arts.jpg",

          points: 1,
        },

        {
          position: 3,

          faculty: "Faculty of Technology",

          photo: "/images/faculties/Technology.jpg",

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

          faculty: "Faculty of Management & Finance",

          photo: "/images/faculties/Fmf.png",

          points: 3,
        },

        {
          position: 2,

          faculty: "Faculty of Technology",

          photo: "/images/faculties/Technology.jpg",

          points: 1,
        },

        {
          position: 3,

          faculty: "Faculty of Arts",

          photo: "/images/faculties/Arts.jpg",

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
  // Sport + Venue + Date + Time
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