"use client";

import { useMemo, useState } from "react";

const romans: [number, string][] = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

function toRoman(n: number) {
  if (n <= 0 || n > 3999) return "—";
  let res = "";
  for (const [val, sym] of romans) {
    while (n >= val) {
      res += sym;
      n -= val;
    }
  }
  return res;
}

function fromRoman(s: string) {
  const map: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  let prev = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const cur = map[s[i].toUpperCase()] || 0;
    if (cur < prev) total -= cur;
    else total += cur;
    prev = cur;
  }
  return total;
}

export default function RomanNumeralConverter() {
  const [decimal, setDecimal] = useState("1999");
  const [roman, setRoman] = useState("MCMXCIX");

  const decToRom = useMemo(() => {
    const d = parseInt(decimal || "0", 10);
    return Number.isNaN(d) ? "—" : toRoman(d);
  }, [decimal]);

  const romToDec = useMemo(() => {
    const v = fromRoman(roman || "");
    return v > 0 ? v : 0;
  }, [roman]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <label className="text-sm text-gray-700">
        Decimal (1 a 3999)
        <input
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
          value={decimal}
          onChange={(e) => setDecimal(e.target.value)}
        />
        <p className="text-xs mt-1 text-gray-600">Romano: {decToRom}</p>
      </label>
      <label className="text-sm text-gray-700">
        Romano (I, V, X, L, C, D, M)
        <input
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
          value={roman}
          onChange={(e) => setRoman(e.target.value)}
        />
        <p className="text-xs mt-1 text-gray-600">Decimal: {romToDec}</p>
      </label>
    </div>
  );
}

