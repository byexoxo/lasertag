var score = document.getElementById("score");
var input = document.getElementById("input");
var button = document.getElementById("button");
var count = 0;
var length = 0;

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
