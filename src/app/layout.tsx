import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRUD de tarefas",
  description: "CRUD de tarefas utilizando Next.JS criado para fins didáticos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen bg-neutral-950`}>
        {children}
      </body>
    </html>
  );
}
