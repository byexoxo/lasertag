var score = document.getElementById("score");
var input = document.getElementById("input");
var button = document.getElementById("button");
var count = 0;
var length = 0;

document.addEventListener("click", function() {
  input.focus();
});

input.addEventListener("input", function() {
  length = input.innerHTML.length;
  if (length > 1) count += 1;
  score.innerHTML = count;
  input.innerHTML = "";
});

button.addEventListener("click", function() {
  count = 0;
  score.innerHTML = count;
});
