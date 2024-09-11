"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({ path, text }: { path: string; text: string }) => {
  const pathname = usePathname();

  return (
    <Link href={path} className={pathname.startsWith(path) ? "active" : ""}>
      {text}
    </Link>
  );
};
