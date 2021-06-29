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

  const errors = errorMessage(validatePacient(pacient));

  if (errors) {
    return;
  }

  clearForm();

  return pacient;
}

function clearForm() {
  const errors = document.querySelector("#errorMessage");

  errors.innerHTML = "";

  document.querySelector("#nome").value = "";
  document.querySelector("#peso").value = "";
  document.querySelector("#altura").value = "";
  document.querySelector("#gordura").value = "";

  document.querySelector("#nome").classList.remove("campo-invalido");
  document.querySelector("#peso").classList.remove("campo-invalido");
  document.querySelector("#altura").classList.remove("campo-invalido");
  document.querySelector("#gordura").classList.remove("campo-invalido");
}

function errorMessage(erros) {
  if (erros.length > 0) {
    erros.forEach((err) => {
      const ulError = document.querySelector("#errorMessage");
      const liError = document.createElement("li");
      liError.textContent = err;
      liError.classList.add("invalidInputError");

      ulError.appendChild(liError);
    });

    return true;
  }

  return false;
}

function validatePacient(pacient) {
  const errors = [];

  if (
    pacient.name == "" ||
    pacient.name.length < 5 ||
    typeof pacient.name == "number"
  ) {
    document.querySelector("#nome").classList.add("campo-invalido");
    errors.push("Nome inválido");
  }

  if (pacient.weight <= 0 || pacient.weight >= 500 || isNaN(pacient.weight)) {
    document.querySelector("#peso").classList.add("campo-invalido");
    errors.push("Peso inválido");
  }

  if (pacient.height <= 0 || pacient.height >= 3.0 || isNaN(pacient.height)) {
    document.querySelector("#altura").classList.add("campo-invalido");
    errors.push("Altura inválida");
  }

  if (pacient.fat == "" || pacient.name.fat < 0) {
    document.querySelector("#gordura").classList.add("campo-invalido");
    errors.push("% de gordura inválida");
  }

  return errors;
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

  console.log(pacient.imc);

  //verify imc
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
