"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-blue-600 text-white shadow relative z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white" onClick={closeMenu}>
          ferramentas360
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 text-sm">
          <Link href="/" className="hover:text-gray-200">
            Início
          </Link>
          {/* <Link href="/ferramentas" className="hover:text-gray-200">
            Ferramentas
          </Link>
          <Link href="/sobre" className="hover:text-gray-200">
            Sobre
          </Link> */}
        </nav>
      </div>

      {/* Menu mobile sobreposto */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-600 md:hidden shadow-md z-50">
          <div className="px-4 pb-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="block py-2 text-white hover:text-gray-200"
            >
              Início
            </Link>
            {/* <Link
              href="/ferramentas"
              onClick={closeMenu}
              className="block py-2 text-white hover:text-gray-200"
            >
              Ferramentas
            </Link>
            <Link
              href="/sobre"
              onClick={closeMenu}
              className="block py-2 text-white hover:text-gray-200"
            >
              Sobre
            </Link> */}
          </div>
        </div>
      )}
    </header>
  );
}
