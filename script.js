class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = { user: 0, cpu: 0 };
    this.gameHistoryLog = [];
  }

  generateCPUResponse() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  determineWinner(userSelection, cpuSelection) {
    
    if (userSelection === cpuSelection) {
      resultText_p.innerHTML = `User select ${userSelection} : CPU select ${cpuSelection}, Match Draw`;
      return 'draw';
    } else if (
      (userSelection === 'rock' && cpuSelection === 'scissors') ||
      (userSelection === 'scissors' && cpuSelection === 'paper') ||
      (userSelection === 'paper' && cpuSelection === 'rock')
    ) {
      resultText_p.innerHTML = `User select ${userSelection} : CPU select ${cpuSelection}, User Wins Match`;
      return 'user';
      
    } else {
      resultText_p.innerHTML = `User select ${userSelection} : CPU select ${cpuSelection}, CPU Wins Match`;
      return 'cpu';
    }
  }

  play(userSelection) {
    const cpuSelection = this.generateCPUResponse();
    console.warn("CPU Selection : " + cpuSelection);
    const winner = this.determineWinner(userSelection, cpuSelection);

    if (winner === 'user') {
      this.score.user++;
    } else if (winner === 'cpu') {
      this.score.cpu++;
    }

    this.gameHistoryLog.push({
      user: userSelection,
      cpu: cpuSelection,
      winner: winner,
    });

    return winner;
  }
}
 const game = new RockPaperScissors('User1');
 const userScore_span = document.getElementById("user_score");
 const computerScore_span = document.getElementById("computer_score");
 const resultText_p = document.getElementById("result_text");
 const reset_btn = document.querySelector("#reset");
 const rock_div = document.getElementById("rock");
 const paper_div = document.getElementById("paper");
 const scissor_div = document.getElementById("scissor");
 const show_result_btn = document.querySelector("#show_result");
 const table_container =  document.querySelector(".table_container");

 reset_btn.addEventListener("click", ()=>{reset_funcntion()}, false);
 
 function reset_funcntion(){
  game.score.user = 0;
  game.score.cpu = 0;
  userScore_span.innerHTML = game.score.user;
  computerScore_span.innerHTML = game.score.cpu;
  resultText_p.innerHTML ="To begin choose one from Rock , Paper or Scissor";
  for (var i = 0 ; i<= game.gameHistoryLog.length ; i++){
    game.gameHistoryLog.pop();
  }
  location.reload();
  
}

var table = document.createElement("table");
table.id = "table";
table.className = "table";
table_container.appendChild(table);

var thead = document.createElement("thead");
thead.id = "thead";
thead.className = "thead";
table.appendChild(thead);

var tbody = document.createElement("tbody");
tbody.id = "tbody";
tbody.className = "thead";
table.appendChild(tbody);

var theadTr = document.createElement("tr");
theadTr.style.border = "1px solid white";
table.id = "rows";
thead.appendChild(theadTr);

show_result_btn.addEventListener("click", ()=>{show_result()}, false);
function show_result(){

// var thead_headings = [];
// for(let k in game.gameHistoryLog[0]){ thead_headings.push(k);}


const propertyNames = Object.keys(game.gameHistoryLog[0]);
for (let col=0 ; col < propertyNames.length; col++){
  document.getElementById('thead').rows[0].cells[col].innerHTML =  propertyNames[col];
}

for (var i= 0 ; i < game.gameHistoryLog.length ; i++){
  var propertyValues = Object.values(game.gameHistoryLog[i]);
  for (let col=0 ; col < propertyValues.length; col++){
    document.getElementById('tbody').rows[i].cells[col].innerHTML =  propertyValues[col];
  }
  
}



}

function createrow(){
if (game.gameHistoryLog.length <= 1){ 
  for(var i = 0 ; i <  3 ; i++){
  var theadTd = document.createElement("td");
  table.id = "td";
  theadTd.style.border = "1px solid white";
  theadTr.appendChild(theadTd);
}
  for(var i = 0 ; i <  1 ; i++){
    var tbodyTr = document.createElement("tr");
    tbodyTr.style.border = "1px solid white";
    tbody.appendChild(tbodyTr);

    for(var i = 0 ; i <  3 ; i++){
      var tbodyTd = document.createElement("td");
      table.id = "td";
      tbodyTd.style.border = "1px solid white";
      tbodyTr.appendChild(tbodyTd);
    }
  
}
}else{
if (game.gameHistoryLog.length >= document.getElementById('tbody').rows.length){
for(var i = 0 ; i <  1 ; i++){
  var tbodyTr = document.createElement("tr");
  tbodyTr.style.border = "1px solid white";
  tbody.appendChild(tbodyTr);

  for(var i = 0 ; i <  3 ; i++){
    var tbodyTd = document.createElement("td");
    table.id = "td";
    tbodyTd.style.border = "1px solid white";
    tbodyTr.appendChild(tbodyTd);
  }
}
}
}
}

rock_div.onclick = (e) => {
    const userSelection = 'rock';
    console.warn("user Selection : " + userSelection);
    const winner = game.play(userSelection);
    userScore_span.innerHTML = game.score.user;
    computerScore_span.innerHTML = game.score.cpu;
    console.log(`Winner: ${winner}`);
    console.log(`User Score: ${game.score.user}`);
    console.log(`CPU Score: ${game.score.cpu}`);
    console.log('Game History:', game.gameHistoryLog);
    createrow();



};

paper_div.onclick = (e) => {
    const userSelection = 'paper';
    console.warn("user Selection : " + userSelection);
    const winner = game.play(userSelection);
    userScore_span.innerHTML = game.score.user;
    computerScore_span.innerHTML = game.score.cpu;
    console.log(`Winner: ${winner}`);
    console.log(`User Score: ${game.score.user}`);
    console.log(`CPU Score: ${game.score.cpu}`);
    console.log('Game History:', game.gameHistoryLog);
    createrow();
};

scissor_div.onclick = (e) => {
    const userSelection = 'scissor';
    console.warn("user Selection : " + userSelection);
    const winner = game.play(userSelection);
    userScore_span.innerHTML = game.score.user;
    computerScore_span.innerHTML = game.score.cpu;
    console.log(`Winner: ${winner}`);
    console.log(`User Score: ${game.score.user}`);
    console.log(`CPU Score: ${game.score.cpu}`);
    console.log('Game History:', game.gameHistoryLog);
    createrow();
};




