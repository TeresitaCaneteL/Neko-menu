export default function Footer() {
  return (
    <footer className="border-t border-yellow-500 py-4 px-6 text-center text-yellow-400 text-sm
      fixed bottom-0 left-0 right-0 bg-black md:static md:mt-20">

      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
        <p>
          © {new Date().getFullYear()} Neko Ramen House
        </p>
        <p>
          Diseñado por{" "}
          <a
            href="https://estudioresortera.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-300"
          >
            Estudio Resortera
          </a>
        </p>
        <div className="flex gap-4">
          <a
            href="https://instagram.com/tu_cuenta"
            target="_blank"
            className="hover:text-yellow-300"
          >
            Instagram
          </a>
          <a
            href="mailto:hola@nekoramen.cl"
            className="hover:text-yellow-300"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}

