import { Metadata } from "next";
import SideNav from "./SideNav";

export const metadata: Metadata = {
  title: "Printit: Su empresa inteligente",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {

  return (
    <main className="flex">
      <SideNav />
      <section className="px-5 py-8 w-full">
        {children}
      </section>
    </main>
  );
}