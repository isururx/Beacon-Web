import Link from "next/link";
import DashboardNav from "../components/DashboardNav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-white/10 bg-[#071A33] p-6 text-white">
        <h2 className="text-xl font-bold">
          Beacon Dashboard
        </h2>

        <DashboardNav />
      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}