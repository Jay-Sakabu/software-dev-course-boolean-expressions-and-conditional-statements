/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
let hasSword = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
let choice = readline.question("Do you go to the 'mountains', 'home', or the 'village'?: ");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else if (choice === "home")
{
  console.log("You decided adventuring wasn't for you, you head home and take a well-earned nap.");
}
  else {
  
  while( choice != 'yes' || choice != 'no')
  {
    choice = readline.question("You get lost and wander aimlessly.\nWalking off the beaten path you come across a small sword, sharp and well-kept do you pick it up? (Yes/No): ");
    choice = choice.toLowerCase();
    
    if(choice == 'yes')
    {
      hasSword = true;
      console.log("Practicing shrewd judgement, you have industriously decided to take the sword");
      break;
    }
    else if (choice == 'no')
    {
      hasSword = false;
      console.log("Fearing that the well-tempered blade was too good to be true, you decided to forgo taking the sword off from the road.")
      break;
    }
    else
    {
      continue;
    }
  }
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

