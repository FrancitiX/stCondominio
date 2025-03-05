import React, { useState } from "react";
import styles from "./../styles/components/Modals.module.css";
import { InputDefault } from "./../components/Inputs";
import classNames from "classnames";
import { restorePass } from "../utils/user";

function MoodalDefault({ title, description, status }) {
  return (
    <div>
      <div>
        <div>
          <h3>{title}</h3>
          {description && <p>{description}</p>}
        </div>
        <button type="button">Aceptar</button>
      </div>
    </div>
  );
}

function MoodalConfirm({ title, description, status, confirm }) {
  return (
    <div>
      <div>
        <div>
          <h3>{title}</h3>
          {description && <p>{description}</p>}
        </div>
        <div>
          <button type="button">Cancelar</button>

          <button type="button" onClick={confirm}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

function MoodalNotice({ title, image, status }) {
  return (
    <div>
      <div>
        <div>
          <h3>{title}</h3>
          {image}
        </div>
        <button type="button">Aceptar</button>
      </div>
    </div>
  );
}

function ModalChangePassword({ title, message, status, onClose }) {
  const [cellphone, setCellphone] = useState("");

  const hidden = status ? styles.modalContainer : styles.hidden;

  const confirm = () => {
    restorePass(cellphone);
    
  };

  return (
    <div className={hidden}>
      <div className={styles.modal}>
        <span className={styles.close} onClick={onClose}>
          x
        </span>
        <div className={styles.modal_data}>
          <div>
            <h3>{title}</h3>
            <p className={styles.message}>{message}</p>

            <div className={styles.input}>
              <InputDefault
                type="tel"
                name="cellphone"
                placeHolder="Número de telefono"
                req={true}
                value={cellphone}
                change={(e) => setCellphone(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.twoButtons}>
            <button
              type="button"
              className={classNames(styles.button, styles.cancel)}
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="button"
              className={classNames(styles.button, styles.confirm)}
              onClick={confirm}
            >
              Cambiar contraseña
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { MoodalDefault, MoodalConfirm, MoodalNotice, ModalChangePassword };
