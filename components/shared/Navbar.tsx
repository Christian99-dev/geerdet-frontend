import React from "react";
import NavbarMobile from "@/components/shared/NavbarMobile";
import NavbarDesktop from "@/components/shared/NavbarDesktop";

export type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Gemüsekiste", href: "/gemuesekiste" },
  { name: "Angebote", href: "/angebote" },
];

export default function Navbar() {
  return (
    <>
      <NavbarDesktop className="hidden md:flex" navLinks={navLinks} />
      <NavbarMobile className="block md:hidden" navLinks={navLinks} />
    </>
  );
}
