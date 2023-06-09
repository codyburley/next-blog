import Link from "next/link";
import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const header = (
  <header>
    <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
      <Image
        src="/logo.png"
        width={40}
        height={40}
        alt="Logo"
        className="mx-auto"
      />
      <Link href="/">
        <h1 className="text-2xl text-white font-bold mt-4">Cody's blog</h1>
      </Link>
      <p className="text-slate-300">Test blog</p>
    </div>
  </header>
);

const footer = (
  <footer>
    <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
      <h3>Designed by Cody</h3>
    </div>
  </footer>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
