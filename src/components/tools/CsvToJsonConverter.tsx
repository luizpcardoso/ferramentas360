/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

function parseCSV(text: string): unknown[] {
  // Simples: separa por linhas, usa vírgula como separador, respeita aspas duplas
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length === 0) return [];
  const parseLine = (line: string) => {
    const result: string[] = [];
    let cur = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === "," && !inQuotes) {
        result.push(cur);
        cur = "";
      } else {
        cur += ch;
      }
    }
    result.push(cur);
    return result.map((s) => s.trim());
  };

  const headers = parseLine(lines[0]);
  return lines.slice(1).map((line) => {
    const cols = parseLine(line);
    const obj: any = {};
    headers.forEach((h, idx) => {
      obj[h] = cols[idx] ?? "";
    });
    return obj;
  });
}

export default function CsvToJsonConverter() {
  const [csv, setCsv] = useState("coluna1,coluna2\nvalor1,valor2");
  const [json, setJson] = useState(`[
  {"coluna1": "valor1", "coluna2": "valor2"}
]`);

  const convert = () => {
    try {
      const rows = parseCSV(csv);
      setJson(JSON.stringify(rows, null, 2));
    } catch (e: any) {
      setJson("Erro ao converter: " + (e?.message || "verifique o CSV"));
    }
  };

  return (
    <div className="space-y-3">
      <textarea
        className="w-full h-36 p-3 border border-gray-300 rounded-lg resize-none text-sm"
        value={csv}
        onChange={(e) => setCsv(e.target.value)}
      />
      <button
        className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
        onClick={convert}
      >
        Converter para JSON
      </button>
      <textarea
        readOnly
        className="w-full h-40 p-3 border border-gray-300 rounded-lg resize-none text-sm"
        value={json}
      />
    </div>
  );
}
