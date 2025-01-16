import { useState } from "react";
import style from "./../styles/components/Inputs.module.css";
import classNames from "classnames";

const InputDefault = ({ type, name, id, placeHolder, req }) => {
  const [value, setValue] = useState("");

  return (
    <div className={style.inputContain}>
      <input
        className={style.input}
        type={type}
        name={name}
        id={id}
        required={req ? true : undefined}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label htmlFor={id}>{placeHolder}</label>
    </div>
  );
};

const InputMedio = ({ type, name, id, placeHolder, req }) => {
  const [value, setValue] = useState("");

  return (
    <div className={style.inputContain_medio}>
      <input
        className={style.input}
        type={type}
        name={name}
        id={id}
        required={req ? true : undefined}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label htmlFor={id}>{placeHolder}</label>
    </div>
  );
};

const InputUser = ({ type, name, id, placeHolder, req }) => {
  const [value, setValue] = useState("");

  return (
    <div className={style.inputContain}>
      <input
        className={style.inputSession}
        type={type}
        name={name}
        id={id}
        required={req ? true : undefined}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={style.iconVisible}>
        <span className="material-symbols-outlined">person</span>
      </div>
      <label htmlFor={id}>{placeHolder}</label>
    </div>
  );
};

const InputPassword = ({ name, id, placeHolder }) => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const passwordVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={style.inputContain}>
      <input
        className={classNames(style.inputSession, style.passwordInput)}
        type={visible ? "text" : "password"}
        name={name}
        id={id}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={classNames(style.iconVisible, style.passwordIcon)} onClick={passwordVisible}>
        {visible ? (
          <span className="material-symbols-outlined">visibility</span> // Mostrar ícono de visibilidad
        ) : (
          <span className="material-symbols-outlined">visibility_off</span> // Mostrar ícono de no visibilidad
        )}
      </div>
      <label htmlFor={id}>{placeHolder}</label>
    </div>
  );
};

const Selector = ({ name, id, title, options }) => {
  return (
    <div className={style.selectorContain}>
      <label htmlFor={id}>{title}</label>
      <select className={style.Selector} name={name} id={id}>
        {options}
      </select>
    </div>
  );
};

const InputCell = ({ type, name, id, placeHolder, req }) => {
  const [value, setValue] = useState("");

  return (
    <div className={style.inputContain}>
      <input
        className={style.inputSession}
        type={type}
        name={name}
        id={id}
        required={req ? true : undefined}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={style.iconVisible}>
        <span className="material-symbols-outlined">call</span>
      </div>
      <label htmlFor={id}>Número de telefono</label>
    </div>
  );
};

export {
  InputDefault,
  InputMedio,
  InputUser,
  InputPassword,
  Selector,
  InputCell,
};
