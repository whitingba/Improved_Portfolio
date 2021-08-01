//get Modal
var modal = document.getElementById("myModal");

//get 1st image
var img = document.getElementById("myImg");
//grab modal image id
var modalImg = document.getElementById("img01");
//grab modal caption id
var captionText = document.getElementById("caption");
//create a function that onclick of the image a modal will display
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

//get the span element that will close the modal
var span = document.getElementsByClassName("close")[0];

//when user clicks on the span 'x', the modal will close
span.onclick = function () {
  modal.style.display = "none";
}
