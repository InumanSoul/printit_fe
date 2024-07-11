import SideNav from "./SideNav";

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