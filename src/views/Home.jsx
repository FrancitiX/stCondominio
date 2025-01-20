import React from "react";
import NavBar from "../components/Nav-bar";
import Footer from "../components/Footer";
import styles from "./../styles/Home.module.css";
import classNames from "classnames";

function Home() {
  const user = localStorage.getItem("typeUser");
  console.log(user);

  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <section className={classNames(styles.welcome)}>
          <div className={classNames(styles.welcomeText)}>
            <h1>
              !Bienvenido de nuevo <br />
              <span>Usuario</span>¡
            </h1>
          </div>
        </section>

        <div className={classNames(styles.monthCard)}>
          <div className={classNames(styles.monthPrice)}>
            <div>
              <h3>Pago mensual</h3>
              <p>sig. pago 01/02/25</p>
            </div>
            <div>
              <h1>$35,000.00</h1>
            </div>
          </div>
          <div className={classNames(styles.monthDescription)}>
            <div>
              <p>Descripción</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                molestias temporibus eos modi harum, mollitia doloribus,
                dignissimos facere magnam eius, sunt labore consequatur dolore
                hic eum tempore. Inventore, veritatis autem.
              </p>
            </div>
            <div>
              <p>Ubicaión</p>
              <p>No sé ayuda me sineto mal</p>
            </div>
          </div>
        </div>

        <section className={styles.container}>
          <div className={`${styles.account} center`}>
            <h3>Datos de cuenta</h3>
            <div className={styles.data_account}>
              <p>
                Nombre: <span>Usuario</span>
              </p>
              <p>
                Telefono: <span>3300000000</span>
              </p>
              <p>
                Sona: <span>Todos los condominios</span>
              </p>
              <p>
                Tipo de usuario: <span>Administrador</span>
              </p>
              <p>
                Estancia: <span>Anfitrion</span>
              </p>
            </div>
          </div>
        </section>
        <section className={styles.container}></section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
