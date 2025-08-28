"use client";

import { useState } from "react";

function gerarDigito(base: number[]): number {
  const soma = base.reduce((acc, num, idx) => acc + num * (base.length + 1 - idx), 0);
  const resto = (soma * 10) % 11;
  return resto === 10 ? 0 : resto;
}

function gerarCPF(): string {
  const base = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
  base.push(gerarDigito(base));
  base.push(gerarDigito(base));
  return base.join("");
}

export default function CpfGenerator() {
  const [cpf, setCpf] = useState("");

  const handleGenerate = () => {
    setCpf(gerarCPF());
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Gerar CPF
      </button>
      {cpf && (
        <p className="text-center font-semibold">{cpf}</p>
      )}
    </div>
  );
}
