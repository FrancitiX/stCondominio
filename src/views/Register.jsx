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
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [patherName, setPatherName] = useState("");
  const [matherName, setMatherName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [password, setPassword] = useState("");

  const Home = () => {
    navigate("/Home");
  };

  return (
    <>
      <NavBar />

      <main className={Styles.background}>
        <div className={Styles.opacity}></div>
        <form className={Styles.form}>
          <h1 className={Styles.title}>Registar usuario</h1>
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
                <span className="material-symbols-outlined">
                  alternate_email
                </span>
              }
            />

            <InputCell
              type="tel"
              id="cellphone"
              placeHolder="cellphone"
              req={true}
              value={cellphone}
              change={(e) => setCellphone(e.target.value)}
            />

            <InputPassword
              name="password"
              id="passwordInput"
              placeHolder="Contrseña"
              value={password}
              change={(e) => setPassword(e.target.value)}
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
                  <option value="4">Dueño</option>
                  <option value="5">Administrador</option>
                  <option value="6">Inquilino</option>
                </>
              }
            />
          </div>
          <div className={Styles.actions}>
            <button className={Styles.cancel} onClick={Home}>
              Cancelar
            </button>
            <button className={Styles.save}>Registrar</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Register;
