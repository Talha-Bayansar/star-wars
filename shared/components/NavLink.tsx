"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export interface INavLink {
  href: string;
  name: string;
}

type Props = {
  link: INavLink;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavLink = ({ link, className, ...props }: Props) => {
  const pathname = usePathname();
  const pathItems = pathname.split("/");
  const linkUrlItems = link.href.split("/");
  const isActive = pathItems[1] === linkUrlItems[1];

  return (
    <Link
      key={`app-link-${link.name}`}
      href={link.href}
      className={twMerge(
        `capitalize hover:text-orange-400 ${
          isActive ? "text-orange-200" : "text-black"
        }`,
        className
      )}
      {...props}
    >
      {link.name}
    </Link>
  );
};
