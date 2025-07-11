// code a counter in Javascript It should go up as time goes by in intervals of 1 second

let counter = 0; 


const updateCounter = () => {
  counter++; 
  console.log(counter);
};

setInterval(updateCounter, 1000);