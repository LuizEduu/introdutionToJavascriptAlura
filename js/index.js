const pacients = document.querySelectorAll(".paciente");
const addPacientButton = document.querySelector("#adicionar-paciente");

function calculateImc(weight, height) {
  if (weight <= 0 || height <= 0 || weight >= 700 || height >= 2.5) {
    return "peso ou altura inválida";
  }

  return weight / (height * 2);
}

function addImcInTable(weight, height, pacient) {
  console.log(weight, height, pacient);

  const imc = calculateImc(weight, height);

  const tdImc = pacient.querySelector(".info-imc");

  if (typeof imc === "string") {
    tdImc.textContent = imc;
    pacient.classList.add("invalidRowTable");
  } else {
    tdImc.textContent = imc.toFixed(2);
  }
}

pacients.forEach((pacient) => {
  const weight = pacient.querySelector(".info-peso").textContent;
  const height = pacient.querySelector(".info-altura").textContent;

  addImcInTable(weight, height, pacient);
});


addPacientButton.addEventListener("click", (event) => {
  event.preventDefault(); //previne os comportamentos padrões de um evento
  const inputsForm = document.querySelectorAll("#addNewPacient input"); // get all inputs the form
  const inputsValues = [];

  const tablePacient = document.querySelector("#tabela-pacientes"); // get table

  const createNewTr = document.createElement("tr"); // create new tr

  inputsForm.forEach((input) => {
    inputsValues.push(input.value);
  }); //add inputs values in array

  
  for (let i = 0; i < inputsForm.length; i++) {
    const newTd = document.createElement("td"); // create new td

    newTd.textContent = inputsValues[i];

    createNewTr.appendChild(newTd); // add a created td a created tr
  }

  const weight = inputsValues[1];
  const height = inputsValues[2];

  const imcTd = document.createElement("td");
  imcTd.classList.add("info-imc");
  createNewTr.appendChild(imcTd);

  addImcInTable(weight, height, createNewTr);

  tablePacient.appendChild(createNewTr); // add a created tr with values in
});
