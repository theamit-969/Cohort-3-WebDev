// code a counter in Javascript It should go up as time goes by in intervals of 1 second

let counter =0;
function updateCounter(){
  console.log(counter);
  counter++;   //counter = counter +1;  (can also use)
  }
setInterval(updateCounter,1000)