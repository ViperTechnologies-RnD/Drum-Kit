//selects all of the elements that has the class "drum", the length means the number of the elements found in the document
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("i got clicked!");
  });
}
