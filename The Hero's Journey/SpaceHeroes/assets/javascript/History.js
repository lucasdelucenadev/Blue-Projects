//Your journey starts here...

let _this = this;function historyGame(history) { return history
    
}

let = history.length

console.log(`Born in a small village on the coast of the sea, Luke was the extension of his father's qualities, strong, loyal, and ruthless, together they conquered many galaxies for their Clan. 
However, the thirst for power and glory was the undoing of their people, during their expansion they crossed paths with a powerful alien, too powerful for the material plane. 
The alien was nothing more nor less than a fallen Aassimar, the clan was practically exterminated and the alien returned to his Galaxy. With no prospect of future or revenge, 
Luke wanders the galaxies seeking redemption from his thirst for power and blood, whose goal is to conquer all existing galaxies and defeat the alien master.`)
console.log();


let p1 = prompt(`Luke can be quite versatile in terms of his alignment, has he learned from his mistakes? 1/Yes or 0/No:`);
let p2 = prompt(`Does he still seek the shaman? 1/Yes or 0/No: `);
let p3 = prompt(`Did Luke manage to bring honor to his clan? 1/Yes or 0/No: `);
let p4 = prompt(`Did Luke get the materials to forge the God of War weapon? 1/Yes or 0/No: `);
let p5 = prompt(`Did Luke speak to the Universal City Elder? 1/Yes or 0/No: `);

let sum_answers = p1 + p2 + p3 + p4 + p5

        if (sum_answers == 0) {
    console.log("\nYou fail miserably!!!")

    } if (sum_answers == 1 || 2){
    console.log("\nYou fail, but you still manage to escape the situation.")

    } if (sum_answers == 3) {
    console.log("\nYou come close to achieving your goal, but you end up just missing it.")

    } if (sum_answers == 4){
    console.log("\nAfter a lot of effort you achieve your goal, although not perfectly.") 

    } if (sum_answers == 5) {
    console.log("\nYou triumph unquestionably and your deeds will be remembered for generations to come.") 
        
    }




