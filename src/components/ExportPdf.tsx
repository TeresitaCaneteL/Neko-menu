'use client';
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ExportPdf() {
  const [loading, setLoading] = useState(false);

  const handleExportPdf = () => {
    const pdfContent = document.getElementById("pdf-content");
    if (!pdfContent) return;

    setLoading(true);
    pdfContent.classList.add("force-pdf-colors");

    html2canvas(pdfContent, {
      scale: 2,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      let position = 0;

      // Si la imagen es más alta que una página
      if (imgHeight > pageHeight) {
        while (position < imgHeight) {
          pdf.addImage(
            imgData,
            "PNG",
            0,
            -position,
            imgWidth,
            imgHeight
          );
          position += pageHeight;
          if (position < imgHeight) pdf.addPage();
        }
      } else {
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      }

      pdf.save("menu-neko-ramen.pdf");
      pdfContent.classList.remove("force-pdf-colors");
      setLoading(false);
    });
  };

  return (
    <button
      onClick={handleExportPdf}
      className="bg-yellow-400 text-black px-4 py-2 rounded mt-6 disabled:opacity-50"
      disabled={loading}
    >
      {loading ? "Generando PDF..." : "Descargando PDF"}
    </button>
  );
}

