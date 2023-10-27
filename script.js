const hex = document.querySelector(".hex");
const generate = document.querySelector(".form-control");

generate.addEventListener("keyup", () => {
  hex.innerHTML = generate.value.length;
});
