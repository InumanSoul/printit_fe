import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Printit: Ingresa a tu cuenta",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-dvh w-full flex items-center justify-center bg-gradient-to-br from-rose-200 dark:from-rose-950 to-neutral-50 dark:to-neutral-950">
      <Image src="/printit.svg" alt="Printit" className="absolute top-5 left-5 object-contain" width={40} height={40} />
      {children}
    </main>
  );
}