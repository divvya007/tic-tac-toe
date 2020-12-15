let nextMove = "x";
showMessage(`next turn: ${nextMove}`);
let isGameOver = false;

function showMessage(msg) {
  document.getElementById("message").innerHTML = msg;
}

document.getElementById("grid").addEventListener("click", boxClick);

document.getElementById("reset-game").addEventListener("click", () => {
  nextMove = "x";
  showMessage(`next turn: ${nextMove}`);
  isGameOver = false;
  document.getElementById("box1-1").innerHTML = "";
  document.getElementById("box1-2").innerHTML = "";
  document.getElementById("box1-3").innerHTML = "";
  document.getElementById("box2-1").innerHTML = "";
  document.getElementById("box2-2").innerHTML = "";
  document.getElementById("box2-3").innerHTML = "";
  document.getElementById("box3-1").innerHTML = "";
  document.getElementById("box3-2").innerHTML = "";
  document.getElementById("box3-3").innerHTML = "";
});

function boxClick(event) {
  if (event.target.innerHTML) {
    return;
  }

  if (isGameOver) {
    return;
  }

  event.target.innerHTML = nextMove;
  if (nextMove === "o") {
    nextMove = "x";
  } else {
    nextMove = "o";
  }

  showMessage(`next turn: ${nextMove}`);

  if (
    document.getElementById("box1-1").innerHTML === "x" &&
    document.getElementById("box2-1").innerHTML === "x" &&
    document.getElementById("box3-1").innerHTML === "x"
  ) {
    isGameOver = true;
    showMessage("player-1 wins");
  } else if (
    document.getElementById("box1-2").innerHTML === "x" &&
    document.getElementById("box2-2").innerHTML === "x" &&
    document.getElementById("box3-2").innerHTML === "x"
  ) {
    isGameOver = true;
    showMessage("player-1 wins");
  } else if (
    document.getElementById("box1-3").innerHTML === "x" &&
    document.getElementById("box2-3").innerHTML === "x" &&
    document.getElementById("box3-3").innerHTML === "x"
  ) {
    isGameOver = true;
    showMessage("player-1 wins");
  } else if (
    document.getElementById("box1-1").innerHTML === "x" &&
    document.getElementById("box1-2").innerHTML === "x" &&
    document.getElementById("box1-3").innerHTML === "x"
  ) {
    isGameOver = true;
    showMessage("player-1 wins");
  } else if (
    document.getElementById("box2-1").innerHTML === "x" &&
    document.getElementById("box2-2").innerHTML === "x" &&
    document.getElementById("box2-3").innerHTML === "x"
  ) {
    isGameOver = true;
    showMessage("player-1 wins");
  } else if (
    document.getElementById("box3-1").innerHTML === "x" &&
    document.getElementById("box3-2").innerHTML === "x" &&
    document.getElementById("box3-3").innerHTML === "x"
  ) {
    isGameOver = true;
    showMessage("player-1 wins");
  } else if (
    document.getElementById("box1-1").innerHTML === "x" &&
    document.getElementById("box2-2").innerHTML === "x" &&
    document.getElementById("box3-3").innerHTML === "x"
  ) {
    isGameOver = true;
    showMessage("player-1 wins");
  } else if (
    document.getElementById("box1-3").innerHTML === "x" &&
    document.getElementById("box2-2").innerHTML === "x" &&
    document.getElementById("box3-1").innerHTML === "x"
  ) {
    isGameOver = true;
    showMessage("player-1 wins");
  }

  // if condition for player "o"

  if (
    document.getElementById("box1-1").innerHTML === "o" &&
    document.getElementById("box2-1").innerHTML === "o" &&
    document.getElementById("box3-1").innerHTML === "o"
  ) {
    isGameOver = true;
    showMessage("player-2 wins");
  } else if (
    document.getElementById("box1-2").innerHTML === "o" &&
    document.getElementById("box2-2").innerHTML === "o" &&
    document.getElementById("box3-2").innerHTML === "o"
  ) {
    isGameOver = true;
    showMessage("player-2 wins");
  } else if (
    document.getElementById("box1-3").innerHTML === "o" &&
    document.getElementById("box2-3").innerHTML === "o" &&
    document.getElementById("box3-3").innerHTML === "o"
  ) {
    isGameOver = true;
    showMessage("player-2 wins");
  } else if (
    document.getElementById("box1-1").innerHTML === "o" &&
    document.getElementById("box1-2").innerHTML === "o" &&
    document.getElementById("box1-3").innerHTML === "o"
  ) {
    isGameOver = true;
    showMessage("player-2 wins");
  } else if (
    document.getElementById("box2-1").innerHTML === "o" &&
    document.getElementById("box2-2").innerHTML === "o" &&
    document.getElementById("box2-3").innerHTML === "o"
  ) {
    isGameOver = true;
    showMessage("player-2 wins");
  } else if (
    document.getElementById("box3-1").innerHTML === "o" &&
    document.getElementById("box3-2").innerHTML === "o" &&
    document.getElementById("box3-3").innerHTML === "o"
  ) {
    isGameOver = true;
    showMessage("player-2 wins");
  } else if (
    document.getElementById("box1-1").innerHTML === "o" &&
    document.getElementById("box2-2").innerHTML === "o" &&
    document.getElementById("box3-3").innerHTML === "o"
  ) {
    isGameOver = true;
    showMessage("player-2 wins");
  } else if (
    document.getElementById("box1-3").innerHTML === "o" &&
    document.getElementById("box2-2").innerHTML === "o" &&
    document.getElementById("box3-1").innerHTML === "o"
  ) {
    isGameOver = true;
    showMessage("player-2 wins");
  }

  if (
    document.getElementById("box1-1").innerHTML &&
    document.getElementById("box1-2").innerHTML &&
    document.getElementById("box1-3").innerHTML &&
    document.getElementById("box2-1").innerHTML &&
    document.getElementById("box2-2").innerHTML &&
    document.getElementById("box2-3").innerHTML &&
    document.getElementById("box3-1").innerHTML &&
    document.getElementById("box3-2").innerHTML &&
    document.getElementById("box3-3").innerHTML &&
    isGameOver === false
  )
    showMessage("game draw");
}
