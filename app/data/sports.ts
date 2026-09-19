export const tournament: Tournament = {
  id: "freshers-2026",
  name: "Freshers Championship",
  year: 2026,
  status: "ongoing",

  description:
    "Follow the latest standings, results, upcoming matches and sports coverage from the University of Colombo.",

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

  recentMatches: [],

  upcomingMatches: [],

  liveFeeds: [],
};