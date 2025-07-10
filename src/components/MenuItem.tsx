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
      className=" text-white rounded-2xl shadow-lg flex flex-col sm:flex-row sm:items-center gap-2 p-1"
    >
      <img
        src={image}
        alt={name}
        className="w-full sm:w-20 h-20 object-contain rounded-t-xl sm:rounded-l-xl sm:rounded-t-none"
      />
      <div className="p-2 flex flex-col justify-between sm:justify-center">
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className={isPdfMode ? "text-[#fff]" : "text-gray-400 text-sm"}>
            {description}
          </p>
        </div>
        <p className={isPdfMode ? "text-[#b08900]" : "text-yellow-500 font-semibold mt-2"}>
          {price}
        </p>
      </div>
    </motion.div>

  );
}

