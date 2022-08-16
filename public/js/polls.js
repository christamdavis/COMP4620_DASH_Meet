//Samin Basir
//https://codepen.io/laurakelly/pen/RPgmwP
var buttons = document.querySelectorAll(".choice button"),
  tally = {
    1: 0,
    2: 0,
    3: 0,
    total: 0
  };// total of 3 choices

function vote(choice) {
  tally[choice]++;
  tally["total"]++;
  console.log(tally);
}

function barPercentage(node, tally) {// computing the bar percentage
  var choice = node.dataset.choice;

  if (tally[choice])
    return tally[choice]/tally["total"] * 100;// return the results of the tally
  return 0;
}

function renderBars() {
  var bars = document.getElementsByClassName("bar");// shows the bars in relation to the tally

  for (var i = 0; i < bars.length; i++) {
    var percentage = barPercentage(bars[i], tally);
    console.log(percentage)
    bars[i].style.height = percentage.toString() + "%";
  }
}

function setup() {
  // Set up event listeners
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
      vote(e.target.dataset["choice"]);
      renderBars();
    });
  }

  renderBars();// rendering the bars
}

setup();
