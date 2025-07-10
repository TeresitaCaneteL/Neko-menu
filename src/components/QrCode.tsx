import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

type Props = {
  url: string;
};

export default function QrCode({ url }: Props) {
  const qrRef = useRef<HTMLCanvasElement>(null);

  const handleDownload = () => {
    const canvas = qrRef.current;
    if (!canvas) return;

    const pngUrl = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-menu.png";
    downloadLink.click();
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <p className="text-yellow-400 font-medium mb-2">Escanea para ver el menú:</p>

      <QRCodeCanvas
        ref={qrRef}
        value={url}
        size={160}
        bgColor="#ffffff"
        fgColor="#000000"
        includeMargin
      />

      <button
        onClick={handleDownload}
        className="mt-4 text-sm px-4 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition"
      >
        Descargar QR
      </button>
    </div>
  );
}

// Usage example:
// <QrCode url="https://nekoramen.cl/menu" />
// This will generate a QR code that links to the specified URL.