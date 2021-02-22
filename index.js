function scuberGreetingForFeet(n) {
  if (n < 400) {
    return "This one is on me!";
  }
  if (n > 2000 && n < 2500) {
    return "I will gladly take your thirty bucks.";
  }
  if (n >= 2500) {
    return "No can do.";
  }
}
console.log(scuberGreetingForFeet(199));

function ternaryCheckCity(city) {
return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (true) {

    case tip === 'generous':
      return "Thank you so much.";
      break;

    case tip === 'not as generous':
      return "Thank you.";
      break;

    default:
      return "Bye.";
      break;
  }
}



console.log(switchOnCharmFromTip('generous'));