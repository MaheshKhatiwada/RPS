//main function
function rpsGame(yourChoice) {
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  console.log("Human Choice: ", humanChoice);
  botChoice = numberToChoice(randToRpsInt());
  console.log("Computer Choice:", botChoice);
  result = decideWinner(humanChoice, botChoice);
  console.log(result);
  message = finalMessage(result);
  console.log(message);
  rpsFrontEnd(humanChoice, botChoice, message);
}
//to take random number
function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}
//to take out property
function numberToChoice(number) {
  return ["rock", "paper", "scissor"][number];
}
//deciding winner
function decideWinner(yourChoice, botChoice) {
  var rpsDatabase = {
    rock: { scissor: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissor: 0 },
    scissor: { paper: 1, scissor: 0.5, rock: 0 },
  };
  var yourScore = rpsDatabase[yourChoice][botChoice];
  var botScore = rpsDatabase[botChoice][yourChoice];

  return [yourScore, botScore];
}
//returning result
function finalMessage([yourScore, botScore]) {
  if (yourScore === 0) {
    return { message: "You lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You tied", color: "yellow" };
  } else {
    return { message: "You won !", color: "green" };
  }
}
//displaying in the front end
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissor: document.getElementById("scissor").src,
  };
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissor").remove();

  var humanDiv = document.createElement("div");
  var messageDiv = document.createElement("div");
  var botDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imagesDatabase[humanImageChoice] +
    "' height=150,width=150 style= 'box-shadow:0px 10px 50px rgba(37,50,233,1)'>";
  messageDiv.innerHTML =
    "<h1 style='color:" +
    finalMessage["color"] +
    "; font-size:60px; padding :30px '>" +
    finalMessage["message"] +
    "</h1>";
  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[botImageChoice] +
    "' height=150,width=150 style= 'box-shadow:0px 10px 50px rgba(243,38,24,1)'>";

  document.getElementById("flex-box-rps").appendChild(humanDiv);
  document.getElementById("flex-box-rps").appendChild(messageDiv);
  document.getElementById("flex-box-rps").appendChild(botDiv);
}
