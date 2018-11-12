//combinations recursive algorythm

let inputArray = ['a','b','c','d','e','f','g'];
start();

function start(){
    let result = count(inputArray);
    console.log(result);
}

function count(input){
    if (input.length === 2){
        return [input[0]+input[1], input[1]+input[0]];
    } else {
        let result = [];        
        for (let i = 0, l = input.length; i < l; i ++){            
            let temp = count(input.slice(0,i).concat(input.slice(i+1,input.length)));             
            temp.forEach(element => {
                result.push(input[i] + element);
            });        
            
        }        
        return result;
    }   
}
