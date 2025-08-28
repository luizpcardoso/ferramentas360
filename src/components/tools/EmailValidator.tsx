"use client";

import { useMemo, useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export default function EmailValidator() {
  const [email, setEmail] = useState("");

  const isValid = useMemo(() => EMAIL_REGEX.test(email.trim()), [email]);

  return (
    <div className="space-y-3">
      <label className="text-sm text-gray-700">
        Endereço de email
        <input
          type="email"
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="exemplo@dominio.com"
        />
      </label>
      {email && (
        <div
          className={`p-3 rounded-lg border text-sm ${
            isValid
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          {isValid ? "Email válido" : "Email inválido"}
        </div>
      )}
    </div>
  );
}

