window.onload = () => {
  const card = document.querySelector(".card");
  const background = document.querySelector(".background");
  card.addEventListener("mousemove", (e) => {
    console.log(e);
    background.style.backgroundPosition = `calc(50% + ${e.x}px) calc(50% + ${e.y}px)`;
  });
};
