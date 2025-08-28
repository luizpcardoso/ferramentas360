"use client";

import { useMemo, useState } from "react";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const [months, setMonths] = useState<string>("");
  const [monthlyDeposit, setMonthlyDeposit] = useState<string>("");

  const result = useMemo(() => {
    const P = parseFloat(principal) || 0;
    const i = (parseFloat(rate) || 0) / 100 / 12; // mensal
    const n = Math.max(0, Math.floor(parseFloat(months) || 0));
    const A = parseFloat(monthlyDeposit) || 0;

    if (n === 0) {
      return { final: P, contribution: 0, interest: 0 };
    }

    // Montante com depósitos mensais: M = P*(1+i)^n + A*(((1+i)^n - 1)/i)
    const pow = Math.pow(1 + i, n);
    const futurePrincipal = P * pow;
    const futureDeposits = i > 0 ? A * ((pow - 1) / i) : A * n;
    const final = futurePrincipal + futureDeposits;
    const contribution = P + A * n;
    const interest = final - contribution;
    return { final, contribution, interest };
  }, [principal, rate, months, monthlyDeposit]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="text-sm text-gray-700">
          Valor inicial (R$)
          <input
            type="number"
            className="mt-1 w-full border border-gray-300 rounded-lg p-2"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            min={0}
          />
        </label>
        <label className="text-sm text-gray-700">
          Depósito mensal (R$)
          <input
            type="number"
            className="mt-1 w-full border border-gray-300 rounded-lg p-2"
            value={monthlyDeposit}
            onChange={(e) => setMonthlyDeposit(e.target.value)}
            min={0}
          />
        </label>
        <label className="text-sm text-gray-700">
          Taxa anual (% a.a.)
          <input
            type="number"
            className="mt-1 w-full border border-gray-300 rounded-lg p-2"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            min={0}
            step="0.01"
          />
        </label>
        <label className="text-sm text-gray-700">
          Período (meses)
          <input
            type="number"
            className="mt-1 w-full border border-gray-300 rounded-lg p-2"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            min={0}
          />
        </label>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-800">
        <p>
          Montante final: <strong>R$ {result.final.toFixed(2)}</strong>
        </p>
        <p>
          Total investido: <strong>R$ {result.contribution.toFixed(2)}</strong>
        </p>
        <p>
          Juros ganhos: <strong>R$ {result.interest.toFixed(2)}</strong>
        </p>
      </div>
    </div>
  );
}

