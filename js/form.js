const addPacientButton = document.querySelector("#adicionar-paciente");

function getInputValues() {
  const name = document.querySelector("#nome");
  const weight = document.querySelector("#peso");
  const height = document.querySelector("#altura");
  const fat = document.querySelector("#gordura");

  const pacient = {};

  Object.assign(pacient, {
    name: name.value,
    weight: weight.value,
    height: height.value,
    fat: fat.value,
    imc: calculateImc(weight.value, height.value),
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

  const validImc = validateImc(pacient.imc);
  const tdImc = addTd(pacient.imc, "info-imc");

  if (!validImc) {
    tdImc.textContent = "Altura ou peso inválido";
    createNewTr.classList.add("invalidRowTable");
  } else {
    tdImc.textContent = pacient.imc.toFixed(2);
  }

  createNewTr.appendChild(addTd(pacient.name, "info-nome"));
  createNewTr.appendChild(addTd(pacient.weight, "info-peso"));
  createNewTr.appendChild(addTd(pacient.height, "info-altura"));
  createNewTr.appendChild(addTd(pacient.fat, "info-gordura"));
  createNewTr.appendChild(tdImc);

  tablePacient.appendChild(createNewTr); // add a created tr with values in
}

addPacientButton.addEventListener("click", (event) => {
  event.preventDefault(); //previne os comportamentos padrões de um evento
  addElementsInTable();
});
