"use client";

import { useMemo, useState } from "react";

export default function DuplicateRemover() {
  const [input, setInput] = useState("banana\nmaçã\nbanana\npera\nmaçã");
  const [caseSensitive, setCaseSensitive] = useState(false);

  const output = useMemo(() => {
    const lines = input.split(/\r?\n/);
    const set = new Set<string>();
    const result: string[] = [];
    for (const line of lines) {
      const key = caseSensitive ? line : line.toLowerCase();
      if (!set.has(key)) {
        set.add(key);
        result.push(line);
      }
    }
    return result.join("\n");
  }, [input, caseSensitive]);

  return (
    <div className="space-y-3">
      <textarea
        className="w-full h-36 p-3 border border-gray-300 rounded-lg resize-none text-sm"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={caseSensitive}
          onChange={(e) => setCaseSensitive(e.target.checked)}
        />
        Diferenciar maiúsculas/minúsculas
      </label>
      <textarea
        readOnly
        className="w-full h-36 p-3 border border-gray-300 rounded-lg resize-none text-sm"
        value={output}
      />
    </div>
  );
}

