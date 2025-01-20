import { useState } from "react";
import style from "./../styles/components/Inputs.module.css";
import classNames from "classnames";

const InputDefault = ({ type, name, id, placeHolder, req, value, change, readOnly }) => {

  return (
    <div className={style.inputContain}>
      <input
        className={style.input}
        type={type}
        name={name}
        id={id}
        required={req ? true : undefined}
        value={value}
        onChange={change}
        readOnly={readOnly}
      />
      <label htmlFor={id}>{placeHolder}</label>
    </div>
  );
};

const InputMedio = ({ type, name, id, placeHolder, req, value, change }) => {
  return (
    <div className={style.inputContain_medio}>
      <input
        className={style.input}
        type={type}
        name={name}
        id={id}
        required={req ? true : undefined}
        value={value}
        onChange={change}
      />
      <label htmlFor={id}>{placeHolder}</label>
    </div>
  );
};

const InputUser = ({
  type,
  name,
  id,
  placeHolder,
  req,
  change,
  value,
  icon,
}) => {
  return (
    <div className={style.inputContain}>
      <input
        className={style.inputSession}
        type={type}
        name={name}
        id={id}
        required={req ? true : undefined}
        value={value}
        onChange={change}
      />
      <div className={style.iconVisible}>{icon}</div>
      <label htmlFor={id}>{placeHolder}</label>
    </div>
  );
};

const InputPassword = ({ name, id, placeHolder, change, value }) => {
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
        onChange={change}
      />
      <div
        className={classNames(style.iconVisible, style.passwordIcon)}
        onClick={passwordVisible}
      >
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

const InputCell = ({ type, name, id, value, req, change }) => {
  return (
    <div className={style.inputContain}>
      <input
        className={style.inputSession}
        type={type}
        name={name}
        id={id}
        required={req ? true : undefined}
        value={value}
        onChange={change}
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
