import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printit: Ingresa a tu cuenta",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-dvh w-full flex items-center justify-center bg-gradient-to-br from-pink-200 to-yellow-100">
      {children}
    </main>
  );
}