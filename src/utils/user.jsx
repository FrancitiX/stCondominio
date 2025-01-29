import axios from "axios";

function log_in(number, password) {
  const formData = {
    number,
    password,
  };



  if (formData.number === "3321901790" || formData.number === "3300000000") {
    localStorage.setItem("typeUser", "Admin");
    return true;
  } else {
    localStorage.setItem("typeUser", "User");
    return true;
  }
}

async function register(userData) {
  const formData = userData;

  try {
    const response = await axios.post("http://localhost:5101/api/register", formData);
    console.log(response.data);
    alert("Usuario registrado con éxito");
  } catch (error) {
    console.error(error);
    alert("Error al registrar usuario");
  }

}

function getUser(username) {

}

function getUsers(username) {

}

function updateUser(username) {

}

function deleteUser(username) {

}

export { log_in, register, getUser, getUsers, updateUser, deleteUser };
