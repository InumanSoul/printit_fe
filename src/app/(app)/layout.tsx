'use client'

import { useAuth } from "@/hooks/useAuth";
import SideNav from "./SideNav";
import Loading from "./Loading";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth({ middleware: 'auth' });

  if (!user) {
    return <Loading />;
  }

  return (
    <main className="flex">
      <SideNav />
      <section className="px-6 py-8 w-full bg-white dark:bg-neutral-950">
        {children}
      </section>
    </main>
  );
}