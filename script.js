const element = document.getElementById("hii");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("hii").innerHTML = "Hello World";
}