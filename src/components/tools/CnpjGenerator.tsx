"use client";

import { useState } from "react";

function calcDigit(base: number[]): number {
  const calc = base.reduce(
    (sum, num, idx) => sum + num * (idx < 4 ? 5 - idx : 13 - idx),
    0
  );
  const resto = calc % 11;
  return resto < 2 ? 0 : 11 - resto;
}

function gerarCnpj(): string {
  const base = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10));
  const digit1 = calcDigit(base);
  const digit2 = calcDigit([...base, digit1]);
  return [...base, digit1, digit2].join("");
}

export default function CnpjGenerator() {
  const [cnpj, setCnpj] = useState("");

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <button
        onClick={() => setCnpj(gerarCnpj())}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Gerar CNPJ
      </button>
      {cnpj && <p className="text-center font-semibold">{cnpj}</p>}
    </div>
  );
}
