"use client";

import { useState } from "react";

export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<null | { bmi: number; classification: string }>(null);

  const calculateBmi = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height.replace(",", "."));

    if (isNaN(w) || isNaN(h) || h === 0) return;

    const bmi = w / (h * h);
    const rounded = Math.round(bmi * 10) / 10;

    let classification = "";
    if (bmi < 18.5) classification = "Abaixo do peso";
    else if (bmi < 24.9) classification = "Peso normal";
    else if (bmi < 29.9) classification = "Sobrepeso";
    else if (bmi < 34.9) classification = "Obesidade grau 1";
    else if (bmi < 39.9) classification = "Obesidade grau 2";
    else classification = "Obesidade grau 3";

    setResult({ bmi: rounded, classification });
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-700">Peso (kg):</label>
        <input
          type="number"
          placeholder="Ex: 70"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-700">Altura (m):</label>
        <input
          type="text"
          placeholder="Ex: 1.75"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <button
        onClick={calculateBmi}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
      >
        Calcular IMC
      </button>

      {result && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">IMC: {result.bmi}</p>
          <p className="text-sm text-gray-700">{result.classification}</p>
        </div>
      )}
    </div>
  );
}
