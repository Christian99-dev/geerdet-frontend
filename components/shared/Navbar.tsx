import React from "react";
import NavbarMobile from "@/components/shared/NavbarMobile";
import NavbarDesktop from "@/components/shared/NavbarDesktop";

export type NavLink = {
  name: string;
  href: string;
};

export default function Navbar() {

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "geerdet", href: "/wiewiranbauen" },
    { name: "Solawi", href: "/solawi" },
    { name: "Dabeisein", href: "/dabeisein" },
    { name: "Gemüsekiste", href: "/gemuesekiste" },
    { name: "Sortiment", href: "/sortiment" },
    { name: "Galerie", href: "/gallery" },
  ];

  return (
    <>
      <NavbarDesktop className="hidden md:flex" navLinks={navLinks} />
      <NavbarMobile className="block md:hidden" navLinks={navLinks} />
    </>
  );
}


[
  {
    "id": 1,
    "iconName": "park",
    "title": "geerdet - Wie wir anbauen",
    "img" : "images/blume.jpeg",
    "pageTitle": "geerdet - Wie wir anbauen und warum",
    "description": "Mit geerdet setzen wir auf nachhaltige Agroforstsysteme, die Biodiversität fördern, den Boden regenerieren und regionale Lebensmittel sichern.",
    "slug": "wiewiranbauen"
  },
  {
    "id": 2,
    "iconName": "compost",
    "title": "Solidarische Landwirtschaft",
    "img" : "images/blume.jpeg",
    "pageTitle": "Solidarische  Landwirtschaft - und wie sie bei uns funktioniert",
    "description": "Bei uns bist Du Teil der Gemeinschaft: Ernteanteile sichern gesunde, saisonale Produkte und finanzieren nachhaltigen Anbau.",
    "slug": "solawi"
  },
  {
    "id": 3,
    "iconName": "spa",
    "title": "Dabeisein & Mitmachen",
    "pageTitle": "Dabeisein ist alles - Du bist gefragt",
    "img" : "images/blume.jpeg",
    "description": "Pack mit an und erlebe nachhaltige Landwirtschaft - von der Aussaat bis zur Ernte, gemeinsam frisch und regional.",
    "slug": "dabeisein"
  },
  {
    "id": 4,
    "iconName": "park",
    "title": "Unsere Gemüsekiste",
    "pageTitle": "Neun gute Gründe für unser Gemüse-Abo",
    "img" : "images/blume.jpeg",
    "description": "Genieße frisches, saisonales Gemüse per Abo und unterstütze direkte, regionale Landwirtschaft.",
    "slug": "gemuesekiste"
  },
  {
    "id": 5,
    "iconName": "compost",
    "title": "Unser Sortiment 2025",
    "img" : "images/blume.jpeg",
    "pageTitle": "Was ist der Plan? Unser Sortiment 2025",
    "description": "Was ist der Plan? Unser Sortiment 2025 zeigt, wie nachhaltiger Gemüseanbau in Zukunft aussieht – vielseitig und regional.",
    "slug": "sortiment"
  },
  {
    "id": 6,
    "iconName": "spa",
    "title": "Termine, Events, Galerie",
    "img" : "images/blume.jpeg",
    "pageTitle": "Termine, Events, Galerie",
    "description": "Informiere Dich über spannende Termine, Events und erhalte Einblicke in unsere Fotogalerie.",
    "slug": "gallery"
  }
]
