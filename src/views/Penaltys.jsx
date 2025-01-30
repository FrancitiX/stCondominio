import React, { useState } from "react";
import NavBar from "../components/Nav-bar";
import Footer from "../components/Footer";
import { InputDefault, InputUser, Selector } from "../components/Inputs";
import styles from "./../styles/Penaltys.module.css";

function Penaltys() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    cellphone: "",
    pass: "",
    penalty: "1",
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

  return (
    <>
      <NavBar />
      <main>
        <section className="container">
          <div>
            <h3>Registrar una multa</h3>
            <form className={styles.form}>
              <div className={styles.formData}>
                <InputDefault
                  type="text"
                  name="title"
                  placeHolder="titulo de Multa"
                  req={true}
                  value={formData.department}
                  change={change}
                />

                <InputDefault
                  type="text"
                  name="description"
                  placeHolder="Description"
                  req={true}
                  value={formData.description}
                  change={change}
                />

                <Selector
                  name="penalty"
                  id="penalty"
                  title="Tipo de multa"
                  change={change}
                  options={
                    <>
                      <option value="0">Incumplimiento en los pagos</option>
                      <option value="1">Alteracón de la vida condominal</option>
                      <option value="2">
                        Afectar el estado físico del inmueble
                      </option>
                      <option value="3">Daño patrimonial</option>
                      <option value="4">
                        Poner en riesgo la seguridad del inmueble o de las
                        personas
                      </option>
                      <option value="5">
                        No presentar el libro de actas para el desahogo de la
                        Asamblea General
                      </option>
                      <option value="6">No rendir cuentas a su salida</option>
                      <option value="7">Realizar cobros no autorizados</option>
                    </>
                  }
                />
              </div>

              <button type="button">Realizar multa</button>
            </form>
          </div>
        </section>
        <section className="container">
          <div>Multas registradas</div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Penaltys;
