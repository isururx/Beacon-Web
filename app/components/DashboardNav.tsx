"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Overview",
    href: "/dashboard",
  },
  {
    name: "Events",
    href: "/dashboard/events",
  },
  {
    name: "Members",
    href: "/dashboard/members",
  },
  {
    name: "Certificates",
    href: "/dashboard/certificates",
  },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="mt-8 flex flex-col gap-2">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-lg px-4 py-3 transition ${
              isActive
                ? "bg-white/10 font-semibold"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}