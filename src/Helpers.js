// return a random item from a list 
// this gets imported directly into Box.js and this is called inside of box
// since its a function only it needs to be called in Box to help and not called Directly into the App js. 

function choice (arr){
    let randomIndex = Math.floor(Math.random()* arr.length);
    return arr[randomIndex];

}

export{ choice }; 

