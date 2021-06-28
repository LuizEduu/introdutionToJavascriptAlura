const pacients = document.querySelectorAll(".paciente");

pacients.forEach((pacient) => {
  const weight = pacient.querySelector(".info-peso").textContent;
  const height = pacient.querySelector(".info-altura").textContent;
  const imcTd = pacient.querySelector(".info-imc");
  
  const imc = calculateImc(weight, height);
  const validImc = validateImc(imc);

  if (validImc) {
    imcTd.textContent = imc.toFixed(2);
  } else {
    imcTd.textContent = "Altura ou peso inválido";
    pacient.classList.add("invalidRowTable");
  }
});

function calculateImc(weight, height) {
  return weight / (height * 2);
}

function validateImc(imc) {
  if (imc <= 0 || imc > 40 || isNaN(imc)) {
    return false;
  }

  return true;
}
