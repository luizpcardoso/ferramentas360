"use client";

import { useState } from "react";

export default function DiscountCalculator() {
  const [price, setPrice] = useState("");
  const [percent, setPercent] = useState("");

  const priceNum = parseFloat(price) || 0;
  const percentNum = parseFloat(percent) || 0;
  const discount = priceNum * (percentNum / 100);
  const final = priceNum - discount;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Preço</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Desconto (%)</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={percent}
          onChange={(e) => setPercent(e.target.value)}
        />
      </div>
      <div className="text-sm text-gray-800">
        <p>Desconto: <strong>R$ {discount.toFixed(2)}</strong></p>
        <p>Preço final: <strong>R$ {final.toFixed(2)}</strong></p>
      </div>
    </div>
  );
}
