"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 relative z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-blue-600"
          onClick={closeMenu}
        >
          ferramentas360
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Início
          </Link>
          <Link href="/ferramentas" className="text-gray-700 hover:text-blue-600">
            Ferramentas
          </Link>
          <Link href="/sobre" className="text-gray-700 hover:text-blue-600">
            Sobre
          </Link>
        </nav>
      </div>

      {/* Menu mobile sobreposto */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 md:hidden shadow-md z-50">
          <div className="px-4 pb-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Início
            </Link>
            <Link
              href="/ferramentas"
              onClick={closeMenu}
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Ferramentas
            </Link>
            <Link
              href="/sobre"
              onClick={closeMenu}
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Sobre
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
