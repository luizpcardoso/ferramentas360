"use client";

import { useEffect, useRef, useState } from "react";

function formatTime(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default function CountdownTimer() {
  const [minutesInput, setMinutesInput] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60000); // 1 minuto
  const [isRunning, setIsRunning] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    const duration = minutesInput * 60 * 1000;
    setTimeLeft(duration);
    setHasEnded(false);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          const updated = prev - 1000;
          if (updated <= 0) {
            clearInterval(intervalRef.current!);
            setIsRunning(false);
            setHasEnded(true);
            return 0;
          }
          return updated;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  return (
    <div className="max-w-md mx-auto space-y-4 text-center">
      {!isRunning && (
        <div>
          <label className="block mb-2 text-sm text-gray-700">
            Defina o tempo (minutos):
          </label>
          <input
            type="number"
            value={minutesInput}
            onChange={(e) => setMinutesInput(Number(e.target.value))}
            min={1}
            max={240}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
      )}

      <div className="text-4xl font-mono text-gray-900">{formatTime(timeLeft)}</div>

      {hasEnded && (
        <p className="text-red-600 font-semibold">Tempo esgotado!</p>
      )}

      <div className="flex justify-center gap-4">
        {!isRunning ? (
          <button
            onClick={handleStart}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Iniciar
          </button>
        ) : (
          <button
            onClick={handleStop}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Parar
          </button>
        )}
      </div>
    </div>
  );
}
