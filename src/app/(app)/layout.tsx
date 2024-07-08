import MainNavigation from "@/components/MainNavigation/MainNavigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printit: Su empresa inteligente",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <aside className="h-dvh w-64 border-r">
        <h1 className="text-lg font-bold px-4 pt-4 pb-5 text-pink-700">Printit</h1>
        <div className="flex flex-col px-4 mb-5">
          <a href="/account" className="border rounded-lg p-2 w-full flex items-center gap-2">
            <div className="size-10 bg-gray-200 rounded-full"></div>
            <p className="text-center">Usuario</p>
          </a>
        </div>
        
        <MainNavigation/>

      </aside>
      <section className="px-5 py-8 w-full">
        {children}
      </section>
    </main>
  );
}