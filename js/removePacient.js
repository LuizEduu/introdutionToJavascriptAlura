const tbody = document.querySelector("tbody");

tbody.addEventListener("dblclick", function (event) {
  const eventTarget = event.target; // pega o alvo do evento a td que foi clicada
  const targetParentNode = eventTarget.parentNode; // pega o pai da td que foi clicada que no caso é a tr
  targetParentNode.remove(); //remove o pai do target, o tr
});
