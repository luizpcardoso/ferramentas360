"use client";

import { useState } from "react";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (value: string) => {
    setCelsius(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setFahrenheit(((num * 9) / 5 + 32).toFixed(2));
    } else {
      setFahrenheit("");
    }
  };

  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setCelsius((((num - 32) * 5) / 9).toFixed(2));
    } else {
      setCelsius("");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Celsius</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={celsius}
          onChange={(e) => handleCelsiusChange(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Fahrenheit</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={fahrenheit}
          onChange={(e) => handleFahrenheitChange(e.target.value)}
        />
      </div>
    </div>
  );
}
