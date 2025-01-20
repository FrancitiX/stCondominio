import React, { useState } from "react";
import NavBar from "../components/Nav-bar";
import styles from "./../styles/Payments.module.css";
import { InputDefault } from "../components/Inputs";

function Payments() {
  const cellphone = "3300000000";
  const [user, setUser] = useState("");
  const [price, setPrice] = useState(35000);
  const [month, setMonth] = useState(1);
  const [owner, setOwner] = useState("Francisco Ortiz Medina");
  const [pay, setPay] = useState("");

  const data = [
    { fecha: "2025-01-01", detalles: "Evento 1" },
    { fecha: "2025-01-02", detalles: "Evento 2" },
    { fecha: "2025-01-03", detalles: "Evento 3" },
  ];

  return (
    <>
      <NavBar />

      <main className="container">
        <div className={styles.container}>
          <section className={styles.pay_regis}>
            <div>Registro de pagos</div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Detalles</th>
                  <th>Ver</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.fecha}</td>
                    <td>{row.detalles}</td>
                    <td>
                      <button
                        className={styles.viewButton}
                        onClick={() =>
                          alert(`Ver detalles de: ${row.detalles}`)
                        }
                      >
                        Ver
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <section className={styles.pay}>
            <div>Realizar pago</div>

            <InputDefault
              type="text"
              name="cellphone"
              id="cellphone"
              placeHolder=""
              req={true}
              value={cellphone}
              change={null}
              readOnly={true}
            />

            <InputDefault
              type="text"
              name="user"
              id="user"
              placeHolder="Nombre"
              req={true}
              value={user}
              change={(e) => setUser(e.target.value)}
            />

            <InputDefault
              type="text"
              name="price"
              id="price"
              placeHolder="Cantidad (Mensual)"
              req={true}
              value={"$ " + price}
              change={(e) => setPrice(e.target.value)}
            />

            <InputDefault
              type="number"
              name="month"
              id="month"
              placeHolder="Meses a pagar"
              req={true}
              value={month}
              change={(e) => setMonth(e.target.value)}
            />

            <InputDefault
              type="text"
              name="owner"
              id="owner"
              placeHolder="Anfitrion"
              req={true}
              value={owner}
              change={(e) => setOwner(e.target.value)}
            />

            <InputDefault
              type="text"
              name="payMent"
              id="payMent"
              placeHolder="Metodo de pago"
              req={true}
              value={pay}
              change={(e) => setPay(e.target.value)}
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default Payments;
