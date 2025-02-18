import React, { useEffect, useState } from "react";
import NavBar from "../components/Nav-bar";
import styles from "../styles/Profile.module.css";

function Profile() {
  const [user, setUser] = useState(() => {
    const storedUserData = localStorage.getItem("userData");
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  // useEffect(() => {
  //   console.log("Datos del usuario cargados:", user);
  // }, [user]);

  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.profile_container}>
          <h1>Perfil de Usuario</h1>
          {user.name && (
            <div className={styles.profile_info}>
              <p>
                <strong>Nombre:</strong> {user.name.name}{" "}
                {user.name.paternal_surname} {user.name.maternal_surname}
              </p>
              <p>
                <strong>Usuario:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Celular:</strong> {user.cellphone}
              </p>
              <p>
                <strong>Departamento:</strong> {user.department.join(", ")}
              </p>
              <p>
                <strong>Torre:</strong> {user.tower.join(", ")}
              </p>
              <p>
                <strong>Fecha de Registro:</strong> {user.date.date} -{" "}
                {user.date.time}
              </p>
              <p>
                <strong>Rol:</strong>{" "}
                {user.rol === "1" ? "Administrador" : "Usuario"}
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Profile;
