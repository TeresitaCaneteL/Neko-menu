'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function MenuItem({ name, description, price, image }: Props) {
  const [isPdfMode, setIsPdfMode] = useState(false);

  useEffect(() => {
    const pdfEl = document.getElementById("pdf-content");
    if (pdfEl?.classList.contains("clean-for-pdf")) {
      setIsPdfMode(true);
    }
  }, []);

  const className = isPdfMode
    ? "bg-[#ffffff] text-[#000000] border border-gray-300 flex flex-col sm:flex-row"
    : "bg-white text-black rounded-lg shadow-md flex flex-col sm:flex-row overflow-hidden";

  return (
    <motion.div
      variants={itemVariant}
      className="w-full flex flex-row items-center gap-4 p-3 rounded-xl shadow-sm bg-[#111] border border-gray-800"
    >
      <img
        src={image}
        alt={name}
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-md bg-white p-1"
      />
      <div className="flex-1">
        <h3 className="text-base font-semibold">{name}</h3>
        <p className="text-sm text-gray-400 leading-tight">{description}</p>
        <p className="text-sm text-yellow-500 font-bold mt-1">{price}</p>
      </div>
    </motion.div>


  );
}

