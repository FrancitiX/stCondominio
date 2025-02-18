import React from "react";

function MoodalDefault(title, description, status) {
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

function MoodalConfirm(title, description, status, confirm) {
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

function MoodalNotice(title, image, status) {
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

export { MoodalDefault, MoodalConfirm, MoodalNotice };
