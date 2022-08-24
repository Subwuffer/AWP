let form = document.querySelector("form");
form.onsubmit = submit;

function submit(e) {
  e.preventDefault();

  let ipnut = document.querySelector("input");
  if (ipnut.value === "No, but a tin can.") {
    alert("Frick you you're right");
  } else {
    alert("Frick you you're wrong");
  }
}
