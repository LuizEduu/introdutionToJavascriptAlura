const filterInput = document.querySelector("#filtrar-tabela");

filterInput.addEventListener("input", function () {
  const pacients = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    
    for (let i = 0; i < pacients.length; i++) {
      const pacient = pacients[i];
      const namePacient = pacient.querySelector("td.info-nome").textContent;

      const regex = new RegExp(this.value, "i");

      if (!regex.test(namePacient)) {
        pacient.classList.add("filterAnimation");
      } else {
        pacient.classList.remove("filterAnimation");
      }
    }
  } else {
    for (let i = 0; i < pacients.length; i++) {
      const pacient = pacients[i];
      pacient.classList.remove("filterAnimation");
    }
  }
});
