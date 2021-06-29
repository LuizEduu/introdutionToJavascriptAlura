pacients.forEach((pacient) => {
  pacient.addEventListener("dblclick", () => {
    this.remove();
  });
});

console.log(pacients);
