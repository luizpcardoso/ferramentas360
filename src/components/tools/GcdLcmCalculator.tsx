"use client";

import { useMemo, useState } from "react";

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function lcm(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs((a * b) / gcd(a, b));
}

export default function GcdLcmCalculator() {
  const [input, setInput] = useState("12, 18, 24");

  const { numbers, mdc, mmc } = useMemo(() => {
    const nums = input
      .split(/[,\s]+/)
      .map((x) => parseInt(x, 10))
      .filter((n) => !Number.isNaN(n));
    if (nums.length === 0) return { numbers: [], mdc: 0, mmc: 0 };
    let g = nums[0];
    let m = nums[0];
    for (let i = 1; i < nums.length; i++) {
      g = gcd(g, nums[i]);
      m = lcm(m, nums[i]);
    }
    return { numbers: nums, mdc: g, mmc: m };
  }, [input]);

  return (
    <div className="space-y-3">
      <label className="text-sm text-gray-700 w-full block">
        Números (separe por vírgula ou espaço)
        <input
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: 12, 18, 24"
        />
      </label>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm">
        <p>Entrada: {numbers.join(", ") || "—"}</p>
        <p>MDC: <strong>{mdc}</strong></p>
        <p>MMC: <strong>{mmc}</strong></p>
      </div>
    </div>
  );
}

