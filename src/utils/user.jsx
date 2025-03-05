import axios from "axios";

const URI = "http://localhost:5102";

async function log_in(number, password, remember) {
  const formData = {
    number,
    password,
    remember,
  };

  try {
    const response = await axios.post(URI + "/login", formData);
    localStorage.setItem("typeUser", response.data.rol);
    localStorage.setItem("token", response.data.token);
    return true;
  } catch (error) {
    console.error(error);
    alert("Error al iniciar sesión");
    return false;
  }
}

async function register(userData) {
  const formData = userData;

  try {
    const response = await axios.post(URI + "/register", formData);
    console.log(response.data);
    alert("Usuario registrado con éxito");
    window.location.reload();
  } catch (error) {
    console.error(error);
    alert("Error al registrar usuario");
  }
}

async function getUser(token) {
  try {
    const response = await axios.get(URI + "/userData", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.setItem("userData", JSON.stringify(response.data.data));
    return response.data.data;
  } catch (error) {
    console.error("Error al obtener datos del usuario:", error);
    alert("Error al obtener datos del usuario");
    return null;
  }
}

async function getUsers(username) {}

async function updateUser(username) {}

async function deleteUser(username) {}

async function restorePass(number) {
  try {
    const response = await axios.post(URI + "/restore-password", {number: number});
    console.log(response.data);
    alert("Se envio la solicitud para restablcer su contraseña");
    window.location.reload();
  } catch (error) {
    console.error(error);
    alert("Error al registrar usuario");
  }
}

export {
  log_in,
  register,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  restorePass,
};
