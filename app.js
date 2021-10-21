

const btn = document.querySelector(".vertical");
const btnSquare = document.querySelector(".square");

const bodyCards = document.querySelector(".cards");

btn.addEventListener("click", () => {
  bodyCards.classList.add("card-column");
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.marginBottom = 20 + "px";
    card.style.padding = 20 + "px";
  });
});


btnSquare.addEventListener("click", () => {
  bodyCards.classList.remove("card-column");
});
