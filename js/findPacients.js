const buttonFindPacient = document.querySelector("#buscar-pacientes");
const tablePacient = document.querySelector("tbody");

function addPacientsInTable(data) {
  const tr = document.createElement("tr");

  for (const pacient in data) {
    const td = document.createElement("td");
    td.textContent = data[pacient];

    tr.appendChild(td);
  }

  tablePacient.appendChild(tr);
}

buttonFindPacient.addEventListener("click", function () {
  fetch("https://api-pacientes.herokuapp.com/pacientes", {
    method: "GET",
  })
    .then((response) =>
      response.json().then((jsonResponse) => {
        jsonResponse.forEach((data) => {
          addPacientsInTable(data);
        });
      })
    )
    .catch((err) => {
      const spanError = document.querySelector("#errorSearch");
      spanError.textContent = "Ocorreu um erro na busca, tente novamente";
      spanError.classList.add("invalidInputError");
    });
});
