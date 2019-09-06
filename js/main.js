let score = document.querySelector("#score");
let input = document.querySelector("#input");
let button = document.querySelector("#button");
let count = 0;
let length = 0;

document.addEventListener("click", () => input.focus());

input.addEventListener("input", () => {
  length = input.value.length;
  if (length > 1) count++;
  score.innerHTML = count;
  input.value = "";
});

button.addEventListener("click", () => {
  count = 0;
  score.innerHTML = count;
});
