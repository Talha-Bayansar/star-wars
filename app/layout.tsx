import { APP_URLS } from "@/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { NavLink } from "@/shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Wars Info",
  description: "Information about Star Wars for newcomers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

const Header = () => {
  const links = [
    {
      href: APP_URLS.home,
      name: "home",
    },
    {
      href: APP_URLS.movies,
      name: "movies",
    },
    {
      href: APP_URLS.characters,
      name: "characters",
    },
    {
      href: APP_URLS.ideas,
      name: "ideas",
    },
  ];

  return (
    <header className="grid place-items-center p-4">
      <div className="flex justify-between items-center sm:w-[80%] w-full">
        <Image
          className="w-16 sm:w-24"
          src="/star-wars.svg"
          width={500}
          height={500}
          alt="Logo of Star Wars"
        />
        <nav className="flex gap-4 sm:gap-8">
          {links.map((link) => (
            <NavLink
              className="sm:text-lg"
              key={`app-link-${link.name}`}
              link={link}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
