const box = document.querySelector("#box");
const form = document.querySelector("form");
const button = document.querySelector("#button");

form.addEventListener("submit", (event) => {
  event.preventDefault(); //to prevent the default value of the form
  if (event.target.myInput.value === "") {
    return;
  }
  const userInput = event.target.myInput.value; //get the value typed in the input field

  const container = document.createElement("section");

  container.innerHTML = `<p># ${userInput} </p>`;

  const x = document.createElement("span");

  x.innerText = "X";

  container.appendChild(x);

  box.appendChild(container);

  x.addEventListener("click", () => {
    container.remove();
  });
});
