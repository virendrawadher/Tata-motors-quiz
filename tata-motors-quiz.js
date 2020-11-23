var readlineSync = require("readline-sync");

const chalk = require('chalk');

var score = 0;

var rightAns = 0, wrongAns = 0;

var userName = readlineSync.question(chalk.hex('#ffa372')("Enter your Name: "));

function intro(){
  console.clear();
  console.log(chalk.hex('#fd3a69').bgHex('#59886b').bold("-----------------------"));
  console.log(chalk.hex('#5c6e91').bgHex('#edf285').bold("------- Fun Time ------"));
  console.log(chalk.hex('#fd3a69').bgHex('#59886b').bold("-----------------------"));
  console.log("\n");
  console.log(chalk.hex('#706897').bgHex('#ffdada').bold("Name: ", userName));
  console.log("\n");
  console.log(chalk.hex('#556052').bgHex('#f9813a').italic.bold(userName, "Check the help section to know how to play and get some help \n"));
  menus();
}

function menus(){
  console.log(chalk.hex('#16697a').bgHex('#fcf876').bold("-----------------"));
  console.log(chalk.hex('#440047').bgHex('#bfdcae').bold("---- M E N U ----"));
  console.log(chalk.hex('#16697a').bgHex('#fcf876').bold("-----------------"));

  menu = [chalk.hex('#145374').bgHex('#99f3bd').bold('Play Game'),            chalk.hex('#145374').bgHex('#99f3bd').bold('High Score'),           chalk.hex('#145374').bgHex('#99f3bd').bold('Help')];
  yourChoice = readlineSync.keyInSelect(menu, chalk.hex('#0f4c75').bgHex('#ffc1f3')('Enter your option'), {cancel:false});
  console.log("Ok, You have Selected " + menu[yourChoice] + "\n");
  if (yourChoice == 0) {
    console.log(chalk.hex('#52057b')("-------------------------------------------------------"));
    console.log(chalk.hex('#52057b').bold("                 Welcome " + userName));
    console.log(chalk.hex('#52057b')("-------------------------------------------------------"));
    playGame();
  } 
  else if (yourChoice == 1){
    highscore();
  } 
  else if (yourChoice == 2) {
    help();
  }
}

function playGame(){
  var questions = [
    {question: chalk.hex('#7d0633').bgHex('#28df99').bold("Which ownership did Tata acquired in 2009? "),
    options : [chalk.hex('#7d0633').bgHex('#d2e603').bold('Land Rover'),
                chalk.hex('#7d0633').bgHex('#d2e603').bold( 'Hispano Carrocera'), chalk.hex('#7d0633').bgHex('#d2e603').bold('Jaguar'), 
                chalk.hex('#7d0633').bgHex('#d2e603').bold('Novus')],
    answer: chalk.hex('#7d0633').bgHex('#d2e603').bold( 'Hispano Carrocera')},
    {question: chalk.hex('#900d0d').bgHex('#28df99').bold("In which year Tata Motors announced Lionel Messi as global brand ambassador."),
    options : [chalk.hex('#7d0633').bgHex('#d2e603').bold('2010'),
                chalk.hex('#7d0633').bgHex('#d2e603').bold('2008'),
                chalk.hex('#7d0633').bgHex('#d2e603').bold('2015'),
                chalk.hex('#7d0633').bgHex('#d2e603').bold('2018')],
    answer: chalk.hex('#7d0633').bgHex('#d2e603').bold('2015')},
    {question: chalk.hex('#7d0633').bgHex('#28df99').bold("Which Ford motor company does Tata motors acquired? "),
    options : [chalk.hex('#7d0633').bgHex('#d2e603').bold('Honda and Land Rover'),                chalk.hex('#7d0633').bgHex('#d2e603').bold('Land Rover and Jaguar'),                chalk.hex('#7d0633').bgHex('#d2e603').bold('Jaguar'),
                chalk.hex('#7d0633').bgHex('#d2e603').bold( 'Suzuki')],
    answer: chalk.hex('#7d0633').bgHex('#d2e603').bold('Land Rover and Jaguar')},
    {question: chalk.hex('#7d0633').bgHex('#28df99').bold("Which Tata motor plant awarded Best of all award? "),
    options : [chalk.hex('#7d0633').bgHex('#d2e603').bold('Lucknow Plant'), 
                chalk.hex('#7d0633').bgHex('#d2e603').bold('Mumbai Plant'), 
                chalk.hex('#7d0633').bgHex('#d2e603').bold('Jamnagar Plant'), 
                chalk.hex('#7d0633').bgHex('#d2e603').bold('Chennai Plant')],
    answer: chalk.hex('#7d0633').bgHex('#d2e603').bold('Lucknow Plant')},
    {question: chalk.hex('#7d0633').bgHex('#28df99').bold("Which is the cheapest tata car in india? "),
    options : [chalk.hex('#7d0633').bgHex('#d2e603').bold('Tiago'), 
               chalk.hex('#7d0633').bgHex('#d2e603').bold('Nexon'), 
               chalk.hex('#7d0633').bgHex('#d2e603').bold('Harrier'), 
               chalk.hex('#7d0633').bgHex('#d2e603').bold('Altroz')],
    answer: chalk.hex('#7d0633').bgHex('#d2e603').bold('Tiago')}
  ]

  for(var i = 0; i < questions.length; i++){
    console.log(chalk.hex('#f0a500').bgHex('#68b0ab').bold("Question ", (i+1)));
    console.log(questions[i].question);
    var option = readlineSync.keyInSelect(questions[i].options, chalk.hex('#1b6ca8').bgHex('#ca5116').bold("Select your answer"), {cancel:false});
    if (questions[i].options[option] === questions[i].answer){
      rightAns += 1;
      score += 2;
    } else {
      wrongAns += 1;
    }
    console.log("\n");
  } 
  console.log(chalk.hex('#7c3c21').bgHex('#f4ea8e').bold("Your score: ", score));
  console.log("\n");
  console.log(chalk.hex('#584153').bgHex('#f6acc8').bold("No. of Correct Answer: ", rightAns));
  console.log("\n");
  console.log(chalk.hex('#511845').bgHex('#ff5733').bold("No. of Incorrect Answer: ", wrongAns));
  console.log("\n");

  highscore(userName, score);

  if (score <= 6 ) {
    console.log("\n");
    var rightAnswer = readlineSync.keyInYN(chalk.hex('#342ead').bgHex('#b9ebcc').bold("Do you want to all right answer? "));
    if (rightAnswer === true) {
      var rightanswer = [
      {question:  "Which ownership did Tata acquired in 2009? ",
      answer: "Hispano Carrocera"},
      {question: "In which year Tata Motors announced Lionel Messi as global brand ambassador.",
      answer: "2015"},
      {question: "Which Ford motor company does Tata motors acquired? ",
      answer: "Land Rover and Jaguar"},
      {question: "Which Tata motor plant awarded Best of all award? ",
      answer: "Lucknow Plant"},
      {question: "Which is the cheapest tata car in india? ",
      answer: "Tiago"}
      ]
      console.log("\n");
      for (var i = 0; i < rightanswer.length; i++){
        console.log(chalk.hex('#383e56').bgHex('#8fcfd1').bold("Question ", (i+1)));
        console.log(chalk.hex('#111d5e').bgHex('#ff9a76').bold(rightanswer[i].question));
        console.log(chalk.hex('#0f4c75').bgHex('#bbe1fa').bold("Ans: ", rightanswer[i].answer));
        console.log("\n")
      }
    }
    else {
      console.log("\n");
      console.log(chalk.hex('#363062').bgHex('#d8b9c3').bold("Congrats!, Thanks for playing the quiz\nHave a Nice Day :)\nThanks to TANAY PRATAP SIR"));
    }
  }
  else {
    console.log("\n");
    var playagain = readlineSync.keyInYN(chalk.hex('#3b6978').bgHex('#ffa41b').bold("Do want to play again? "));
    if (playagain === true){
      console.clear();
      playGame();
    }
    else{
      console.log("\n");
      console.log(chalk.hex('#790c5a').bgHex('#eca0b6').bold("Hope you enjoy the quiz :)\nThanks to TANAY PRATAP SIR"));
    }
  }
}

function help(){
  console.log(chalk.hex('#a9fffd')("1) For playing again or knowing the right answer you have to select main menu option to no[n] press n"));
  console.log("\n");
  console.log(chalk.hex('#a9fffd')("2) You have to Select one answer with entering the number at the left side of options."));
  console.log("\n");
  console.log(chalk.hex('#a9fffd')("3) At last with score you will also know how much correct ans you gave and how much incorrect."));
  console.log("\n");
  console.log(chalk.hex('#a9fffd')("4) If your score is less than 6 then you can know the all the right answer by selecting appropriate options"));
  console.log("\n");
  var menuAgain = readlineSync.keyInYN(chalk.hex('#ffba5a').bgHex('#633a82').bold("Main menu? "));
  if (menuAgain === true){
    console.clear();
    intro();
    console.log("\n");
  }
}

function highscore(userName, score=null){
  var highscores = [{"username":"Virendra", "score": 4},
                  {"username":"Uday", "score": 8},
                  {"username":"Dhaval", "score": 6},
                  {"username":"Anant", "score": 2},
                  {"username":"Sahil", "score": 10}]
  if (score === null){
    for (var i = 0; i < highscores.length; i++){
      console.log(chalk.hex('#da2d2d')(highscores[i].username), "\t", chalk.hex('#6fb98f')(highscores[i].score));
    }
  }
  else{
    for (var i = 0; i < highscores.length; i++){
      if (highscores[i].username === userName && score > highscores[i].score){
        highscores[i].score = score;
        console.log(chalk.hex('#9818d6').bgHex('#ffc2c2').bold("Congrats! ",userName," You scored new high score than previous one."));
        console.log("\n");
        break;
      } 
      else {
          console.log(chalk.hex('#142850').bgHex('#29c7ac').bold("Congrats! ", userName , " You have created amazing score \n If you want to add your name in our ranking table email a screenshot at:wadher32@gmail.com"));
          console.log("\n");
          break;
        } 
      }
    }
  var menuAgain = readlineSync.keyInYN(chalk.hex('#ffba5a').bgHex('#633a82').bold("Main menu? "));
  if (menuAgain === true){
    console.clear()
    intro();
  }
}

intro();






