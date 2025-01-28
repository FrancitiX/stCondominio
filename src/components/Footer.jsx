import React from "react";
import styles from "./../styles/components/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Información del condominio */}
        <div className={styles.section}>
          <h3 className={styles.title}>Condominio Las Palmas</h3>
          <p className={styles.text}>
            Dirección: Av. Principal #123, Ciudad, Estado
          </p>
          <p className={styles.text}>Teléfono: (123) 456-7890</p>
          <p className={styles.text}>Correo: contacto@laspalmas.com</p>
        </div>

        {/* Enlaces útiles */}
        <div className={styles.section}>
          <h3 className={styles.title}>Enlaces útiles</h3>
          <ul className={styles.linksList}>
            <li>
              <a href="/reglamento" className={styles.link}>
                Reglamento del condominio
              </a>
            </li>
            <li>
              <a href="/reservas" className={styles.link}>
                Reservas de áreas comunes
              </a>
            </li>
            <li>
              <a href="/noticias" className={styles.link}>
                Noticias y eventos
              </a>
            </li>
            <li>
              <a href="/contacto" className={styles.link}>
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className={styles.section}>
          <h3 className={styles.title}>Síguenos</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <span className="material-symbols-outlined">facebook</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <span className="material-symbols-outlined">twitter</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <span className="material-symbols-outlined">instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        &copy; {new Date().getFullYear()} Condominio Las Palmas. Todos los
        derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
