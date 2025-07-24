"use client";

import { useState } from "react";

function validarCPF(cpf: string): boolean {
  cpf = cpf.replace(/[^\d]/g, "");

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  const calc = (factor: number) =>
    cpf
      .slice(0, factor - 1)
      .split("")
      .reduce((acc, digit, i) => acc + parseInt(digit) * (factor - i), 0);

  const digit1 = (calc(10) * 10) % 11 % 10;
  const digit2 = (calc(11) * 10) % 11 % 10;

  return digit1 === parseInt(cpf[9]) && digit2 === parseInt(cpf[10]);
}

export default function CpfValidator() {
  const [cpf, setCpf] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleValidate = () => {
    setIsValid(validarCPF(cpf));
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Digite o CPF (apenas números)"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
        maxLength={14}
      />

      <button
        onClick={handleValidate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Validar CPF
      </button>

      {isValid !== null && (
        <p
          className={`text-center font-semibold ${
            isValid ? "text-green-600" : "text-red-600"
          }`}
        >
          CPF {isValid ? "válido" : "inválido"}
        </p>
      )}
    </div>
  );
}
