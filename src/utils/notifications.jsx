import axios from "axios";

const URI = "http://localhost:5102";
const token = localStorage.getItem("token");

async function getNotifications(username, skip, limit) {
  try {
    const response = await axios.get(URI + "/userData", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.setItem("userData", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error("Error al obtener datos del usuario:", error);
    alert("Error al obtener datos del usuario");
    return null;
  }
}

async function pushNotifications() {
  const user = JSON.parse(localStorage.getItem("userData"));

  const username = user.username;

  try {
    const response = await axios.post(URI + "/notifications", {
      user: username,
    });
    console.log(response.data.data);
    //   return response.data;
  } catch (error) {
    console.error("Error al obtener notificaciones del usuario:", error);
    alert("Error al obtener datos del usuario");
    return null;
  }
}

function getNotification(username) {}

function readNotification(username) {}

function deleteNotifications(username) {}

export {
  getNotifications,
  pushNotifications,
  getNotification,
  readNotification,
  deleteNotifications,
};
