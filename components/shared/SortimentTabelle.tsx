"use client"; // Falls du Next.js 13 mit dem app-Verzeichnis nutzt

import React from "react";

interface Item {
  name: string;
  time: string;
}

interface Category {
  name: string;
  color: string;
  items: Item[];
}

const categories: Category[] = [
  {
    name: "Kohlgemüse",
    color: "bg-green-100",
    items: [
      { name: "Palmkohl", time: "Sept.-Nov., ab Mai" },
      { name: "Spitzkohl", time: "August-Okt." },
      { name: "Wirsing", time: "Okt.-Nov." },
      { name: "Rapini", time: "ab Mai" },
      { name: "Grünkohl", time: "ab Mai" },
    ],
  },
  {
    name: "Blattsalate",
    color: "bg-green-100",
    items: [
      { name: "Asia Salat", time: "Juli-Nov." },
      { name: "Salanova", time: "Juni-Nov." },
      { name: "Postelein", time: "Nov.-März" },
      { name: "Feldsalat", time: "Okt.-März" },
      { name: "Spinat", time: "März-Mai / Sept.-Nov." },
      { name: "Pflücksalat", time: "April-Okt." },
      { name: "Rucola", time: "April-Okt." },
      { name: "Kopfsalat", time: "Mai-Okt." },
      { name: "Batavia", time: "Mai-Okt." },
      { name: "Eichblatt", time: "Mai-Okt." },
      { name: "Radicchio", time: "Juli-Okt." },
      { name: "Endivie", time: "Juli-Okt." },
      { name: "Zichorie", time: "Juli-Okt." },
      { name: "Rucola Wilde", time: "April-Okt." },
    ],
  },
  {
    name: "Zwiebelgemüse",
    color: "bg-green-100",
    items: [
      { name: "Zwiebeln", time: "Juli-Sept." },
      { name: "Frühlingszwiebeln", time: "März-Nov." },
      { name: "Schalotten", time: "Juli-Sept." },
      { name: "Knoblauch", time: "Juni-Juli" },
      { name: "Lauch", time: "Juli-Nov." },
      { name: "Schnittknoblauch", time: "Juni-Aug." },
      { name: "Schnittzwiebeln", time: "Juni-Aug." },
    ],
  },
  {
    name: "Wurzelgemüse",
    color: "bg-green-100",
    items: [
      { name: "Mairüben", time: "April-Juni / Aug.-Sept." },
      { name: "Navet", time: "April-Juni / Aug.-Sept." },
      { name: "Herbst-/Winterrettich", time: "Aug.-Feb." },
      { name: "Rettich", time: "April-Aug." },
      { name: "Karotten", time: "Mai-Nov." },
      { name: "Pastinaken", time: "Nov.-März" },
      { name: "Petersilienwurzel", time: "Nov.-März" },
      { name: "Rote Bete", time: "Juni-Nov." },
      { name: "Schwarzwurzel", time: "Nov.-März" },
      { name: "Sellerie Knolle", time: "Sept.-Nov." },
      { name: "Steckrüben", time: "Sept.-März" },
      { name: "Topinambur", time: "Nov.-März" },
      { name: "Meerrettich (Kren)", time: "Nov.-März" },
    ],
  },
  {
    name: "Stielgemüse",
    color: "bg-orange-100",
    items: [
      { name: "Rhabarber", time: "Sept.-Nov., ab Mai" },
      { name: "Mangold", time: "ab Mai" },
    ],
  },
  {
    name: "Kräuter",
    color: "bg-orange-100",
    items: [
      { name: "Schnittlauch", time: "März-Nov." },
      { name: "Petersilie kraus", time: "März-Nov." },
      { name: "Petersilie glatt", time: "März-Nov." },
      { name: "Kerbel", time: "März-Nov." },
      { name: "Koriander", time: "März-Nov." },
      { name: "Basilikum", time: "Mai-Sept." },
      { name: "Bärlauch", time: "März-Mai" },
      { name: "Zitronenmelisse", time: "März-Nov." },
      { name: "Minze", time: "März-Nov." },
      { name: "Estragon", time: "März-Nov." },
      { name: "Salbei", time: "März-Nov." },
      { name: "Thymian", time: "März-Nov." },
      { name: "Bohnenkraut", time: "Mai-Sept." },
      { name: "Majoran", time: "Mai-Sept." },
      { name: "Oregano", time: "Mai-Sept." },
    ],
  },
  {
    name: "Samenegemüse",
    color: "bg-red-100",
    items: [
      { name: "Erbsen", time: "Mai-Juli" },
      { name: "Buschbohnen", time: "Juni-Sept." },
      { name: "Stangenbohnen", time: "Juli-Sept." },
      { name: "Dicke Bohnen", time: "Juni-Aug." },
      { name: "Edamame", time: "Juli-Sept." },
      { name: "Kichererbsen", time: "Juli-Sept." },
      { name: "Linsen", time: "Juli-Aug." },
      { name: "Kürbiskerne", time: "Sept.-Nov." },
    ],
  },
  {
    name: "Fruchtgemüse",
    color: "bg-blue-100",
    items: [
      { name: "Tomaten", time: "Juli-Okt." },
      { name: "Gurken", time: "Juni-Sept." },
      { name: "Zucchini", time: "Juni-Okt." },
      { name: "Auberginen", time: "Juli-Sept." },
      { name: "Paprika", time: "Juli-Sept." },
      { name: "Chili", time: "Juli-Sept." },
      { name: "Kürbis", time: "Sept.-Nov." },
      { name: "Zuckermais", time: "Juli-Okt." },
    ],
  },
];

export default function ErnteTable() {
  // Aufteilen in 2 Gruppen à 4 Kategorien
  const firstTableCategories = categories.slice(0, 4);
  const secondTableCategories = categories.slice(4, 8);

  return (
    <div className="overflow-x-auto space-y-8">
      {/* Tabelle 1 */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th
              colSpan={4}
              className="border border-gray-300 bg-gray-200 p-4 text-center text-xl font-semibold"
            >
              Unser Sortiment für die Ernte (Tabelle 1)
            </th>
          </tr>
          <tr>
            {firstTableCategories.map((cat) => (
              <th
                key={cat.name}
                className={`border border-gray-300 p-2 text-center font-medium ${cat.color}`}
              >
                {cat.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {firstTableCategories.map((cat) => (
              <td
                key={cat.name}
                className={`border border-gray-300 p-2 align-top ${cat.color}`}
              >
                {cat.items.map((item) => (
                  <p key={item.name} className="mb-1 leading-snug">
                    <strong>{item.name}</strong>: {item.time}
                  </p>
                ))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {/* Tabelle 2 */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th
              colSpan={4}
              className="border border-gray-300 bg-gray-200 p-4 text-center text-xl font-semibold"
            >
              Unser Sortiment für die Ernte (Tabelle 2)
            </th>
          </tr>
          <tr>
            {secondTableCategories.map((cat) => (
              <th
                key={cat.name}
                className={`border border-gray-300 p-2 text-center font-medium ${cat.color}`}
              >
                {cat.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {secondTableCategories.map((cat) => (
              <td
                key={cat.name}
                className={`border border-gray-300 p-2 align-top ${cat.color}`}
              >
                {cat.items.map((item) => (
                  <p key={item.name} className="mb-1 leading-snug">
                    <strong>{item.name}</strong>: {item.time}
                  </p>
                ))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
