const pacients = document.querySelectorAll(".paciente");
const addPacientButton = document.querySelector("#adicionar-paciente");

function calculateImc(weight, height) {
  if (weight <= 0 || height <= 0 || weight >= 700 || height >= 2.5) {
    return "peso ou altura inválida";
  }

  return weight / (height * 2);
}

pacients.forEach((pacient) => {
  const weight = pacient.querySelector(".info-peso").textContent;
  const height = pacient.querySelector(".info-altura").textContent;

  const imc = calculateImc(weight, height);

  const tdImc = pacient.querySelector(".info-imc");

  if (typeof imc === "string") {
    tdImc.textContent = imc;
    pacient.classList.add("invalidRowTable");
  } else {
    tdImc.textContent = imc.toFixed(2);
  }
});

addPacientButton.addEventListener("click", (event) => {
  event.preventDefault(); //previne os comportamentos padrões de um evento
  const inputsForm = document.querySelectorAll("#addNewPacient input"); // get all inputs the form

  const tablePacient = document.querySelector("#tabela-pacientes"); // get table
  const pacientTr = tablePacient.querySelector("tr"); //get one tr
  const pacientTds = pacientTr.querySelectorAll("td"); // get all tds an tr

  const createNewTr = document.createElement("tr"); // create new tr

  pacientTds.forEach((td) => {
    const newTd = document.createElement("td"); // create new td
    
    for (const input of inputsForm) {
      // get values the inputs
      newTd.textContent = input.value;
    }

    createNewTr.appendChild(newTd); // add a created td a created tr
  });

  tablePacient.appendChild(createNewTr); // add a created tr with values in tds a table
});
