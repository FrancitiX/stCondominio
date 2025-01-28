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

function register(userData) {
  const fromData = userData;

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
