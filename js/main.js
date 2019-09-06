let score = document.querySelector("#score");
let input = document.querySelector("#input");
let button = document.querySelector("#button");
let count = 0;

document.addEventListener("click", () => input.focus());

input.addEventListener("input", () => {
  input.value = "";
  count++;
  score.innerHTML = count;
});

button.addEventListener("click", () => {
  count = 0;
  score.innerHTML = count;
});
