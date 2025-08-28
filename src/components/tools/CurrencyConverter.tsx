/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("BRL");
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const convert = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(
        `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`
      );

      const data = await res.json();

      if (!data.success) {
        setError("Erro ao converter. Tente novamente.");
        return;
      }

      setResult(data.result);
    } catch (err) {
      setError("Erro de rede. Verifique sua conexão.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <label>
          <span className="text-sm text-gray-700">Valor:</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className="w-full mt-1 border border-gray-300 rounded px-2 py-1"
            min={0}
          />
        </label>

        <label>
          <span className="text-sm text-gray-700">De:</span>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full mt-1 border border-gray-300 rounded px-2 py-1"
          >
            <option value="USD">Dólar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="BRL">Real (BRL)</option>
          </select>
        </label>

        <label>
          <span className="text-sm text-gray-700">Para:</span>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full mt-1 border border-gray-300 rounded px-2 py-1"
          >
            <option value="USD">Dólar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="BRL">Real (BRL)</option>
          </select>
        </label>
      </div>

      <button
        onClick={convert}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Convertendo..." : "Converter"}
      </button>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {result !== null && !error && (
        <div className="bg-gray-100 p-3 rounded text-center font-mono text-lg">
          Resultado: {result.toFixed(2)} {to}
        </div>
      )}
    </div>
  );
}
