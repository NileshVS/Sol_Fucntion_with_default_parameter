//default functions 
function add(value1,value2=30){
    let result= value1 + value2
    console.log(result);
}

add(30);
//with strings
function concatold(firstName,lastName="Sawakhande"){
    //old way of concatinating
    console.log("Hello "+firstName+" "+lastName+", your first name "+ firstName +" and last name "+ lastName+ " are concatinated");
}
concatold("Nilesh");

function concatnew(firstName,lastName="Sawakhande"){
    //new way of concatinating using back ticks
    console.log(`Hello ${firstName} ${lastName}, your first name ${firstName} and last name ${lastName} are now concatinated using back ticks.`);
}
concatnew("Nilesh");