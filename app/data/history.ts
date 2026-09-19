export type ExecutiveMember = {
  name: string;
  role: string;
  image: string;
};

export type HistoryYear = {
  year: number;
  theme: string;
  summary: string;

  executiveCommittee: ExecutiveMember[];

  events: {
    title: string;
    description: string;
    date: string;
  }[];

  achievements: string[];

  memories: string[];
};

export const historyData: HistoryYear[] = [
  {
    year: 2024,
    theme: "A New Chapter",
    summary:
      "A year of new ideas, new connections and experiences that helped shape the Beacon community.",

    executiveCommittee: [
      {
        name: "President Name",
        role: "President",
        image: "/images/history/2024/president.jpg",
      },
      {
        name: "Vice President Name",
        role: "Vice President",
        image: "/images/history/2024/vp.jpg",
      },
      {
        name: "Secretary Name",
        role: "Secretary",
        image: "/images/history/2024/secretary.jpg",
      },
      {
        name: "Treasurer Name",
        role: "Treasurer",
        image: "/images/history/2024/treasurer.jpg",
      },
      {
        name: "Assistant Secretary",
        role: "Assistant Secretary",
        image: "/images/history/2024/assistant-secretary.jpg",
      },
      {
        name: "Assistant Treasurer",
        role: "Assistant Treasurer",
        image: "/images/history/2024/assistant-treasurer.jpg",
      },
    ],

    events: [
      {
        title: "Beacon Orientation",
        description:
          "An opportunity for new members to discover the Beacon community.",
        date: "2024",
      },
      {
        title: "Beacon Community Event",
        description:
          "A gathering that brought members together through shared experiences.",
        date: "2024",
      },
    ],

    achievements: [
      "Expanded the Beacon community",
      "Organized new member activities",
      "Created new opportunities for student collaboration",
    ],

    memories: [
      "/images/memories/1.jpg",
      "/images/memories/2.jpg",
      "/images/memories/3.jpg",
    ],
  },

  {
    year: 2025,
    theme: "Growing Together",
    summary:
      "More people, more projects and more opportunities to create meaningful experiences.",

    executiveCommittee: [
      {
        name: "President Name",
        role: "President",
        image: "/images/history/2025/president.jpg",
      },
      {
        name: "Vice President Name",
        role: "Vice President",
        image: "/images/history/2025/vp.jpg",
      },
      {
        name: "Secretary Name",
        role: "Secretary",
        image: "/images/history/2025/secretary.jpg",
      },
      {
        name: "Treasurer Name",
        role: "Treasurer",
        image: "/images/history/2025/treasurer.jpg",
      },
      {
        name: "Assistant Secretary",
        role: "Assistant Secretary",
        image: "/images/history/2025/assistant-secretary.jpg",
      },
      {
        name: "Assistant Treasurer",
        role: "Assistant Treasurer",
        image: "/images/history/2025/assistant-treasurer.jpg",
      },
    ],

    events: [
      {
        title: "Beacon Orientation",
        description:
          "Welcoming a new generation of students into the Beacon community.",
        date: "2025",
      },
      {
        title: "Creative Workshop",
        description:
          "A collaborative experience focused on creativity and learning.",
        date: "2025",
      },
      {
        title: "University Activities",
        description:
          "Beacon members participated in university-wide activities and initiatives.",
        date: "2025",
      },
    ],

    achievements: [
      "Expanded student participation",
      "Introduced new community activities",
      "Strengthened collaboration between members",
    ],

    memories: [
      "/images/memories/4.jpg",
      "/images/memories/5.jpg",
      "/images/memories/6.jpg",
    ],
  },

  {
    year: 2026,
    theme: "Moving Forward",
    summary:
      "A new generation carrying the Beacon spirit forward with fresh ideas and ambition.",

    executiveCommittee: [
      {
        name: "President Name",
        role: "President",
        image: "/images/history/2026/president.jpg",
      },
      {
        name: "Vice President Name",
        role: "Vice President",
        image: "/images/history/2026/vp.jpg",
      },
      {
        name: "Secretary Name",
        role: "Secretary",
        image: "/images/history/2026/secretary.jpg",
      },
      {
        name: "Treasurer Name",
        role: "Treasurer",
        image: "/images/history/2026/treasurer.jpg",
      },
      {
        name: "Assistant Secretary",
        role: "Assistant Secretary",
        image: "/images/history/2026/assistant-secretary.jpg",
      },
      {
        name: "Assistant Treasurer",
        role: "Assistant Treasurer",
        image: "/images/history/2026/assistant-treasurer.jpg",
      },
    ],

    events: [
      {
        title: "Beacon Orientation",
        description:
          "Introducing new students to the Beacon community and its activities.",
        date: "September 2026",
      },
      {
        title: "Beacon Creative Workshop",
        description:
          "A creative workshop bringing members together to learn and collaborate.",
        date: "October 2026",
      },
      {
        title: "University Sports Coverage",
        description:
          "Beacon members contributing to university sports coverage and media.",
        date: "October 2026",
      },
    ],

    achievements: [
      "Expanded Beacon's digital presence",
      "Introduced new community experiences",
      "Continued developing student-led initiatives",
    ],

    memories: [
      "/images/memories/7.jpg",
      "/images/memories/8.jpg",
      "/images/memories/9.jpg",
      "/images/memories/10.jpg",
    ],
  },
];

export function getHistoryYear(year: number) {
  return historyData.find((item) => item.year === year);
}