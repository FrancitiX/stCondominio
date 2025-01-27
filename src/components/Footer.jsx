import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Información del condominio */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Condominio Las Palmas</h3>
          <p className="text-sm">
            Dirección: Av. Principal #123, Ciudad, Estado
          </p>
          <p className="text-sm">Teléfono: (123) 456-7890</p>
          <p className="text-sm">Correo: contacto@laspalmas.com</p>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Enlaces útiles</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/reglamento"
                className="hover:text-gray-400 transition-colors"
              >
                Reglamento del condominio
              </a>
            </li>
            <li>
              <a
                href="/reservas"
                className="hover:text-gray-400 transition-colors"
              >
                Reservas de áreas comunes
              </a>
            </li>
            <li>
              <a
                href="/noticias"
                className="hover:text-gray-400 transition-colors"
              >
                Noticias y eventos
              </a>
            </li>
            <li>
              <a
                href="/contacto"
                className="hover:text-gray-400 transition-colors"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <span className="material-symbols-outlined">facebook</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <span className="material-symbols-outlined">twitter</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <span className="material-symbols-outlined">instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Condominio Las Palmas. Todos los
        derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
