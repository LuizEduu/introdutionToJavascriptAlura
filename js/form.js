const addPacientButton = document.querySelector("#adicionar-paciente");

function getInputValues() {
  const name = document.querySelector("#nome").value;
  const weight = document.querySelector("#peso").value;
  const height = document.querySelector("#altura").value;
  const fat = document.querySelector("#gordura").value;

  const pacient = {};

  Object.assign(pacient, {
    name,
    weight,
    height,
    fat,
    imc: calculateImc(weight, height),
  });

  document.querySelector("#nome").value = "";
  document.querySelector("#peso").value = "";
  document.querySelector("#altura").value = "";
  document.querySelector("#gordura").value = "";

  return pacient;
}

function addTd(value, cssClass) {
  const td = document.createElement("td");
  td.textContent = value;
  td.classList.add(cssClass);

  return td;
}

function addElementsInTable() {
  const tablePacient = document.querySelector("#tabela-pacientes"); // get table
  const pacient = getInputValues();
  const createNewTr = document.createElement("tr"); // create new tr

  const tdName = addTd(pacient.name, "info-nome");
  const tdWeight = addTd(pacient.weight, "info-peso");
  const tdHeight = addTd(pacient.height, "info-altura");
  const tdFat = addTd(pacient.fat, "info-gordura");

  const validImc = validateImc(pacient.imc);

  const tdImc = addTd(pacient.imc, "info-imc");

  if (!validImc) {
    tdImc.textContent = "Altura ou peso inválido";
    createNewTr.classList.add("invalidRowTable");
  } else {
    tdImc.textContent = imc.toFixed(2);
  }

  createNewTr.appendChild(tdName);
  createNewTr.appendChild(tdWeight);
  createNewTr.appendChild(tdHeight);
  createNewTr.appendChild(tdFat);
  createNewTr.appendChild(tdImc);

  tablePacient.appendChild(createNewTr); // add a created tr with values in
}

function clearInputs(inputsForm) {
  inputsForm.forEach((input) => {
    input.value = "";
  });
}

addPacientButton.addEventListener("click", (event) => {
  event.preventDefault(); //previne os comportamentos padrões de um evento

  addElementsInTable();
});
