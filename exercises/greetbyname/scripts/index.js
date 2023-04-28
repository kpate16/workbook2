window.onload = init;

function init() {
  const btn = document.getElementById("greetBtn");
  btn.addEventListener("click", onGreetUserBtnClicked);
}
function onGreetUserBtnClicked(event) {
  var name = document.getElementById("nameField").value;

  alert("Hello " + name);
}
