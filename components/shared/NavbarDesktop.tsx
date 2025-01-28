import React from "react";
import type { NavLink } from "./Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DesktopNavbar({
  className,
  navLinks,
}: {
  className: string;
  navLinks: NavLink[];
}) {
  return (
    <div
      className={`${className} z-50 fixed top-0 left-0 w-full bg-background align-center p-2`}
    >
      <div className="flex-1">
        <Image
          className="w-[5rem] animate-heroLogoPopup"
          src="/svg/logo.svg"
          width={200}
          height={200}
          alt="Geerdet Logo"
        />
      </div>
      <div className="flex-1 flex justify-center items-center space-x-5">
        {navLinks.map(({ name, href }) => (
          <Link key={href} href={href} className="text-white text-9 font-thin tracking-[0.1em] hover:text-orange transition-colors duration-default active:color-orange">
            {name.toUpperCase()}
          </Link>
        ))}
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
