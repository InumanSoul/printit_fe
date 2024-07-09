import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Printit: Ingresa a tu cuenta",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-dvh w-full flex items-center justify-center bg-gradient-to-br from-pink-200 to-amber-100">
      <Image src="/printit.svg" alt="Printit" className="absolute top-5 left-5" width={40} height={40} />
      {children}
    </main>
  );
}