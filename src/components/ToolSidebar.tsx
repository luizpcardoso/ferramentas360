"use client";

import Link from "next/link";
import { FaChevronRight, FaBars } from "react-icons/fa";
import { useState } from "react";
import { tools } from "@/data/tools";

export function ToolSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <div className="lg:hidden mb-4">
        <button
          className="flex items-center gap-2 text-sm text-blue-600 border border-blue-600 px-3 py-1 rounded"
          onClick={() => setOpen(!open)}
        >
          <FaBars className="w-4 h-4" />
          Menu de Ferramentas
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          open ? "block" : "hidden"
        } lg:block w-full lg:w-64 p-4 border lg:border-r border-gray-200 bg-white z-10`}
      >
        <h3 className="text-lg font-bold mb-4 text-gray-800">Todas as Ferramentas</h3>
        <ul className="space-y-2">
          {tools.map((tool) => (
            <li key={tool.href}>
              <Link
                href={tool.href}
                className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
              >
                <FaChevronRight className="w-3 h-3" />
                {tool.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
