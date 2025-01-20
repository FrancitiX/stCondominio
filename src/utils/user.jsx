function Log_in(number, password) {
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

export { Log_in };
