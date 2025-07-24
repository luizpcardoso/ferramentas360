"use client";

import { useState } from "react";

function validarCNPJ(cnpj: string): boolean {
  cnpj = cnpj.replace(/[^\d]+/g, "");

  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

  const calc = (base: string, length: number) =>
    base
      .split("")
      .reduce((sum, digit, index) => {
        const multiplier = length - index;
        return sum + parseInt(digit) * (multiplier <= 1 ? multiplier + 8 : multiplier);
      }, 0);

  const base = cnpj.slice(0, 12);
  const digit1 = (calc(base, 5) % 11) < 2 ? 0 : 11 - (calc(base, 5) % 11);
  const digit2 = (calc(base + digit1, 6) % 11) < 2 ? 0 : 11 - (calc(base + digit1, 6) % 11);

  return cnpj.endsWith(`${digit1}${digit2}`);
}

export default function CnpjValidator() {
  const [cnpj, setCnpj] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleValidate = () => {
    setIsValid(validarCNPJ(cnpj));
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Digite o CNPJ (apenas números)"
        value={cnpj}
        onChange={(e) => setCnpj(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
        maxLength={18}
      />

      <button
        onClick={handleValidate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Validar CNPJ
      </button>

      {isValid !== null && (
        <p
          className={`text-center font-semibold ${
            isValid ? "text-green-600" : "text-red-600"
          }`}
        >
          CNPJ {isValid ? "válido" : "inválido"}
        </p>
      )}
    </div>
  );
}
