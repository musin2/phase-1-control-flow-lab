function scuberGreetingForFeet(feetD){

  if(feetD <= 400){
    return 'This one is on me!';
  } else if(feetD <=2000 ){
    return 'That will be twenty bucks.';
  } else if(feetD <= 2500 ){
    return 'I will gladly take your thirty bucks.';
  } else if(feetD >= 2501 ){
    return 'No can do.';
  } 
}


function ternaryCheckCity(destinationCity){
   let result1 = destinationCity === 'NYC' ? ('Ok, sounds good.') : ('No go.');
  return result1;

   // if(destinationCity === 'NYC'){
//   return 'Ok, sounds good.';
// } else { 
//   return 'No go.'
// }
  }

function switchOnCharmFromTip(tipV){
  switch(tipV){
    case 'generous':
        return "Thank you so much.";
      break;
    case 'not as generous':
        return "Thank you.";
      break;
      default:
        return "Bye.";
      break;
  }
}