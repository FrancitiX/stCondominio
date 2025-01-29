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
import { register } from "../utils/user";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: { name: "", paternal_surname: "", maternal_surname: "" },
    email: "",
    cellphone: "",
    pass: "",
    rol: "6",
    department: [],
    tower: [],
  });

  const change = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const Home = () => {
    event.preventDefault();
    navigate("/home");
  };

  const registrar = () => {
    event.preventDefault();
    register(formData);
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
              name="name.name"
              id="name"
              placeHolder="Nombre"
              req={true}
              value={formData.name.name}
              change={change}
              icon={<span className="material-symbols-outlined">person</span>}
            />

            <div className={Styles.dbInputs}>
              <InputMedio
                type="text"
                name="name.paternal_surname"
                id="pathernName"
                placeHolder="Apellido paterno"
                req={true}
                value={formData.name.paternal_surname}
                change={change}
              />
              <InputMedio
                type="text"
                name="name.maternal_surname"
                id="mathernName"
                placeHolder="Apellido materno"
                req={true}
                value={formData.name.maternal_surname}
                change={change}
              />
            </div>

            <InputUser
              type="email"
              name="email"
              id="email"
              placeHolder="Correo eléctronico"
              req={true}
              value={formData.email}
              change={change}
              icon={
                <span className="material-symbols-outlined">
                  alternate_email
                </span>
              }
            />

            <InputCell
              type="tel"
              name="cellphone"
              id="cellphone"
              placeHolder="cellphone"
              req={true}
              value={formData.cellphone}
              change={change}
            />

            <InputPassword
              name="pass"
              id="passwordInput"
              placeHolder="Contraseña"
              value={formData.pass}
              change={change}
            />

            <Selector
              name="rol"
              id="rol"
              title="Rol"
              change={change}
              options={
                <>
                  <option value="6">Inquilino</option>
                  <option value="1">Administración</option>
                  <option value="2">Torre</option>
                  <option value="3">Departamento</option>
                  <option value="4">Dueño</option>
                  <option value="5">Administrador</option>
                </>
              }
            />

            <InputDefault
              type="text"
              name="tower"
              placeHolder="Torre"
              req={true}
              value={formData.tower}
              change={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  tower: e.target.value.split(","),
                }))
              }
            />

            <InputDefault
              type="text"
              name="department"
              placeHolder="Departamento"
              req={true}
              value={formData.department}
              change={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  department: e.target.value.split(","),
                }))
              }
            />
          </div>
          <div className={Styles.actions}>
            <button type="button" className={Styles.cancel} onClick={Home}>
              Cancelar
            </button>
            <button type="button" className={Styles.save} onClick={registrar}>
              Registrar
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Register;
