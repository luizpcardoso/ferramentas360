"use client";

import { useState } from "react";

export default function QrCodeGenerator() {
  const [text, setText] = useState("");

  const url = text
    ? `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        text
      )}`
    : "";

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-32 p-2 border rounded"
        placeholder="Digite o texto ou URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {url && (
        <div className="flex justify-center">
          <img src={url} alt="QR Code" />
        </div>
      )}
    </div>
  );
}
