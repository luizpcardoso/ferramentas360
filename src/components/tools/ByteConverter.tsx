"use client";

import { useState } from "react";

export default function ByteConverter() {
  const [bytes, setBytes] = useState("");
  const b = parseFloat(bytes) || 0;

  const kb = b / 1024;
  const mb = kb / 1024;
  const gb = mb / 1024;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Bytes</label>
        <input
          type="number"
          className="w-full border rounded p-2"
          value={bytes}
          onChange={(e) => setBytes(e.target.value)}
        />
      </div>
      <div className="text-sm text-gray-800 space-y-1">
        <p>Kilobytes: <strong>{kb.toFixed(2)} KB</strong></p>
        <p>Megabytes: <strong>{mb.toFixed(2)} MB</strong></p>
        <p>Gigabytes: <strong>{gb.toFixed(2)} GB</strong></p>
      </div>
    </div>
  );
}
