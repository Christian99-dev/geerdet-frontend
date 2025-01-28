"use client";

import React, { useState } from "react";
import type { NavLink } from "@/components/shared/Navbar";
import Link from "next/link";
import Image from "next/image";
import BurgerMenuButton from "./BurgerMenuButton";

export default function MobileNavbar({
  className,
  navLinks,
}: {
  className: string;
  navLinks: NavLink[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`${className} z-40 fixed top-0 left-0 w-full`}>
      <div className="flex p-2 bg-background relative z-40">
        <div className="flex-1" />
        <div className="flex-1 flex justify-center">
          <Image
            className="w-[5rem] animate-heroLogoPopup"
            src="/svg/logo.svg"
            width={200}
            height={200}
            alt="Geerdet Logo"
          />
        </div>
        <div className="flex-1 flex justify-end items-center">
          <BurgerMenuButton toggled={isOpen} onClick={toggleMenu} />
        </div>
      </div>

      <div
        className={`w-full bg-background relative flex flex-col items-center justify-center transition-transform duration-default ${
          isOpen ? "translate-y-0" : "translate-y-[-100%]"
        } z-30`}
      >
        {navLinks.map(({ name, href }) => (
          <Link
            key={href}
            href={href}
            className="text-white text-8 p-3 font-thin tracking-[0.1em] w-full text-center hover:text-orange transition-colors duration-default active:color-orange"
            onClick={toggleMenu}
          >
            {name.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}
