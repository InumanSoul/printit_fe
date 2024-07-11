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
      <section className="px-5 py-8 w-full">
        {children}
      </section>
    </main>
  );
}