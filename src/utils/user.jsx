import axios from "axios";

const URI = "http://localhost:5102";

async function log_in(number, password) {
  const formData = {
    number,
    password,
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

function getUsers(username) {}

function updateUser(username) {}

function deleteUser(username) {}

export { log_in, register, getUser, getUsers, updateUser, deleteUser };
