
function checker(){

    let userInput= "oso";
    let arrAux= [];


    for(let i =0; i< userInput.length; i++){
        arrAux.push(userInput.charAt(i));
        console.log(arrAux[i]);
        
    }
    
    
    console.log(arrAux.reverse() === arrAux);
}

checker();