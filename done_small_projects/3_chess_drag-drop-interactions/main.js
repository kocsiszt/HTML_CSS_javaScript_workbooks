const king = document.querySelector(".chess-piece");
const square = document.querySelectorAll(".square");
const infoDisplay = document.querySelector("#info");

king.addEventListener("drag", dragGing);
king.addEventListener("dragstart", dragStart);

square.forEach((square) => {
  square.addEventListener("dragover", dragOver);
  square.addEventListener("dragenter", dragEnter);
  square.addEventListener("dragleave", dragLeave);
  square.addEventListener("drop", dragDrop);
  square.addEventListener("dragend", dragEnd);
});
let beingDragged;

function dragGing() {
  infoDisplay.textContent = "You are dragging a" + beingDragged.id;
}

//1usage
function dragStart(e) {
  beingDragged = e.target;
  console.log(beingDragged);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.target.classList.add("higlight");
}

function dragLeave(e) {
  e.target.classList.remove("higlight");
}

function dragDrop(e) {
  e.target.append(beingDragged);
  e.target.classList.remove("higlight");
}

function dragEnd(e) {
  e.target.classList.add("target");
  setTimeout(() => e.target.classList.remove("target"), 100);
  infoDisplay.textContent.textContent = " ";
}
