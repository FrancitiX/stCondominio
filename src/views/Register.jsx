import React, { useState } from "react";
import NavBar from "../components/Nav-bar";
import Styles from "./../styles/Register.module.css";
import {
  InputUser,
  InputMedio,
  InputCell,
  InputPassword,
  Selector,
  InputDefault,
} from "./../components/Inputs";

function Register() {
  const [name, setName] = useState("");
  const [patherName, setPatherName] = useState("");
  const [matherName, setMatherName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellpone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <NavBar />

      <main className={Styles.background}>
        <form className={Styles.form}>
          <h1>Registar usuario</h1>
          <div className={Styles.formData}>
            <InputUser
              type="text"
              name="name"
              id="name"
              placeHolder="Nombre"
              req={true}
              value={name}
              change={(e) => setName(e.target.value)}
              icon={<span className="material-symbols-outlined">person</span>}
            />

            <div className={Styles.dbInputs}>
              <InputMedio
                type="text"
                name="pathernName"
                id="pathernName"
                placeHolder="Apellido paterno"
                req={true}
                value={patherName}
                change={(e) => setPatherName(e.target.value)}
              />
              <InputMedio
                type="text"
                name="mathernName"
                id="mathernName"
                placeHolder="Apellido materno"
                req={true}
                value={matherName}
                change={(e) => setMatherName(e.target.value)}
              />
            </div>

            <InputUser
              type="email"
              name="email"
              id="email"
              placeHolder="Correo eléctronico"
              req={true}
              value={email}
              change={(e) => setEmail(e.target.value)}
              icon={
                <span className="material-symbols-outlined">alternate_email</span>
              }
            />

            <InputCell
              type="tel"
              id="userInput"
              placeHolder="Usuario"
              req={true}
              value={cellphone}
              change={(e) => setCellphone(e.target.value)}
            />

            <Selector
              name="Rol"
              id="Rol"
              title="Rol"
              options={
                <>
                  <option value="1">Administración</option>
                  <option value="2">Torre</option>
                  <option value="3">Departamento</option>
                  <option value="3">Dueño</option>
                  <option value="3">Administrador</option>
                  <option value="3">Inquilino</option>
                </>
              }
            />

            <InputPassword
              name="password"
              id="passwordInput"
              placeHolder="Contrseña"
              value={password}
              change={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>CARACOLES</button>
        </form>
      </main>
    </>
  );
}

export default Register;
