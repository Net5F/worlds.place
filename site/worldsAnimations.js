function animateWorldsReposeCard() {
  const ghost = document.getElementById("worldsReposeGhost");
  const card = document.getElementById("worldsReposeCard");
  ghost.style.animationPlayState = "running";
  card.style.animationPlayState = "running";
}

let ghost = document.getElementById("worldsReposeGhost");
ghost.addEventListener("animationend", () => {
  ghost.remove();
})
