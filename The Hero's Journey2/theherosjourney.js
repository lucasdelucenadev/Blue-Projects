console.clear();
var prompt = require("prompt-sync")();

console.log(`Born in a small village on the coast of the sea, Luke was the extension of his father's qualities, strong, loyal, and ruthless, together they conquered many galaxies for their Clan. 
However, the thirst for power and glory was the undoing of their people, during their expansion they crossed paths with a powerful alien, too powerful for the material plane. 
The alien was nothing more nor less than a fallen Aassimar, the clan was practically exterminated and the alien returned to his Galaxy. With no prospect of future or revenge, 
Luke wanders the galaxies seeking redemption from his thirst for power and blood, whose goal is to conquer all existing galaxies and defeat the alien master.`)
console.log();

var rightquestions = 0;

function queryOne() {
  while (true) {
    let question = prompt("1: Luke can be quite versatile in terms of his alignment, has he learned from his mistakes? -> ");
    let query = question.toUpperCase();
    if (query == "YES" || query == "NO" || query == "NO") {
      if (query == "YES") {
        rightquestions += 1;
        break;
      } else {
        break;
      }
    } else {
      console.log('Enter "YES" or "NO" as an answer.');
    }
  }
}

queryOne();

function queryTwo() {
  while (true) {
    let question = prompt(
      "2: Does he still seek the shaman? -> "
    );
    let query = question.toUpperCase();
    if (query == "NO" || query == "NO" || query == "NO") {
      if (query == "NO") {
        rightquestions += 1;
        break;
      } else {
        break;
      }
    } else {
      console.log('Enter "YES" or "NO" as an answer.');
    }
  }
}

queryTwo();

function queryThree() {
  while (true) {
    let question = prompt("3: Did Luke manage to bring honor to his clan? -> ");
    let query = question.toUpperCase();
    if (query == "YES" || query == "NO" || query == "NO") {
      if (query == "YES") {
        rightquestions += 1;
        break;
      } else {
        break;
      }
    } else {
      console.log('Enter "YES" or "NO" as an answer.');
    }
  }
}

queryThree();

function queryFor() {
  while (true) {
    let question = prompt("4: Did Luke get the materials to forge the God of War weapon? -> ");
    let query = question.toUpperCase();
    if (query == "NO" || query == "NO" || query == "NO") {
      if (query == "YES") {
        rightquestions += 1;
        break;
      } else {
        break;
      }
    } else {
      console.log('Enter "YES" or "NO" as an answer.');
    }
  }
}

queryFor();

function queryFive() {
  while (true) {
    let question = prompt("5: Did Luke speak to the Universal City Elder? -> ");
    let query = question.toUpperCase();
    if (query == "YES" || query == "YES" || query == "NO") {
      if (query == "YES") {
        rightquestions += 1;
        break;
      } else {
        break;
      }
    } else {
      console.log('Enter "YES" or "NO" as an answer.');
    }
  }
}

queryFive();

if (rightquestions == 0) {
  console.log("0 Yes answers: You fail miserably.");
} else if (rightquestions == 1 || rightquestions == 2) {
  console.log(
    "1 or 2 Answers Yes: You fail, but you still manage to escape the situation."
  );
} else if (rightquestions == 3) {
  console.log(
    "3 Answers Yes: You come close to achieving your goal, but you end up just missing it.    "
  );
} else if (rightquestions == 4) {
  console.log(
    "4 answers Yes: After a lot of effort you achieve your goal, although not perfectly."
  );
} else {
  console.log(
    "5 answers Yes: You triumph unquestionably and your deeds will be remembered for generations to come."
  );
}
