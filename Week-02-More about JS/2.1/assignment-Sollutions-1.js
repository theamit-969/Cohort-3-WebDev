// Try to create promisified version of setTimeout

function setTimeoutPromisified(ms){
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
function callback(){
  console.log("print after 3 sseconds");
}
  setTimeoutPromisified(3000).then(callback);

// setTimeoutPromisified(3000,).then(function callback(){    // Note - can  directly log in then() also  
//     console.log("print after 3 seconds");
    
// })t