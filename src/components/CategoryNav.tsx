'use client';

import clsx from "clsx";
import { useActiveSection } from "../hooks/useActiveSection";

type Props = {
  categorias: {
    name: string;
    id: string;
  }[];
};

export default function CategoryNav({ categorias }: Props) {
  const activeId = useActiveSection(categorias.map((c) => c.id));

  return (
    <div className="sticky top-0 z-10 bg-[#000] border-b border-yellow-500 mb-10">
      {/* Móvil: menú desplegable */}
      <details className="md:hidden p-4 cursor-pointer select-none">
        <summary className="text-yellow-400 font-bold text-center">
          Menú de categorías ⬇️
        </summary>
        <div className="flex flex-col gap-2 mt-4 items-center">
          {categorias.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className={clsx(
                "text-sm font-medium px-4 py-2 rounded-full border border-yellow-500 transition-all w-fit",
                cat.id === activeId
                  ? "bg-yellow-500 text-black"
                  : "text-yellow-400 hover:bg-yellow-500 hover:text-black"
              )}
            >
              {cat.name}
            </a>
          ))}
        </div>
      </details>

      {/* Escritorio: barra horizontal */}
      <div className="hidden md:flex flex-wrap gap-3 justify-center py-4">
        {categorias.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className={clsx(
              "text-sm font-medium px-4 py-2 rounded-full border border-yellow-500 transition-all",
              cat.id === activeId
                ? "bg-yellow-500 text-black"
                : "text-yellow-400 hover:bg-yellow-500 hover:text-black"
            )}
          >
            {cat.name}
          </a>
        ))}
      </div>
    </div>
  );
}
