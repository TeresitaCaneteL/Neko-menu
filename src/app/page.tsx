'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Category from "../components/Category";
import CategoryNav from "../components/CategoryNav";
import Footer from "../components/Footer";
import QrCode from "../components/QrCode";
import ExportPdf from "../components/ExportPdf";
import { getMenuItems } from "@/lib/getMenuItems";
 // nuevo
import type { MenuItem } from "@/types/menu";
 // opcional: archivo de tipos

export default function Home() {
  const [menu, setMenu] = useState<Record<string, MenuItem[]>>({});
  const [isPdfMode, setIsPdfMode] = useState(false);

  useEffect(() => {
    const el = document.getElementById("pdf-content");
    if (el?.classList.contains("clean-for-pdf")) setIsPdfMode(true);
  }, []);

  useEffect(() => {
    async function fetchMenu() {
      const items = await getMenuItems();
      const grouped = items.reduce(
        (acc: Record<string, MenuItem[]>, item: MenuItem) => {
          const categoryName = item.category?.name || "Sin categoría";
          if (!acc[categoryName]) acc[categoryName] = [];
          acc[categoryName].push(item);
          return acc;
        },
        {}
      );
      const categorias = Object.keys(menu).map((cat) => ({
        name: cat,
        id: cat.toLowerCase().replace(/\s+/g, "-"),
      }));


      setMenu(grouped);
    }

    fetchMenu();
  }, []);

  const categorias = Object.keys(menu).map((cat) => ({
    name: cat,
    id: cat.toLowerCase().replace(/\s+/g, "-"),
  }));

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 max-w-4xl mx-auto">
      <div id="pdf-content" className="clean-for-pdf">
        <h1
          className={
            isPdfMode
              ? "text-4xl font-bold text-[#eab308] text-center mb-10"
              : "text-4xl font-bold text-yellow-400 text-center mb-10"
          }
        >
          🐾 Neko Ramen House
        </h1>

        {isPdfMode ? (
          <p className="text-center text-lg mb-12 text-white">
            Bienvenido a nuestro menú de ramen, donde la tradición japonesa se
            encuentra con la pasión por la cocina...
          </p>
        ) : (
          <motion.p
            className="text-center text-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Bienvenido a nuestro menú de ramen, donde la tradición japonesa se
            encuentra con la pasión por la cocina...
          </motion.p>
        )}

        <CategoryNav categorias={categorias} />

        {Object.entries(menu).map(([category, items]) => (
          <Category key={category} title={category} items={items} />
        ))}
      </div>

      <QrCode url="https://nekoramen.vercel.app" />
      <Footer />
      <ExportPdf />
    </main>
  );
}
