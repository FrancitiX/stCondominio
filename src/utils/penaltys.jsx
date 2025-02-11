import axios from "axios";

const URI = "http://localhost:5102";

async function createPenalty(penaltyData) {
  if (localStorage.getItem("typeUser") < 3) {
    const formData = penaltyData;

    try {
      const response = await axios.post(URI + "/newPenalty", formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
      alert("Multa enviada con exito");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Error al registrar la Multa");
    }
  }
}

function getPenalty(username) {}

function updatePenalty(username) {}

function deletePenalty(username) {}

export { createPenalty, getPenalty, updatePenalty, deletePenalty };
