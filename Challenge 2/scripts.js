const nickname = "Timmy";
const firstname = "Timothy";

// use template literals  instead of single qoutes  and curly braces.
// include 'if' statements get intended behaviors be tween variables.
if (nickname) {
  console.log(`Good Morning, ${nickname}!`);
} else if (firstname) {
  console.log(`Good Morning, ${firstname}!`);
} else {
  console.log("Good Morning!");
}

//The issue with the original code was that it used single quotes and curly braces inside them, which do not allow variable interpolation.
 
