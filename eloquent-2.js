/* Looping Triangle*/

    var tri = ["#"];
    
    for (var i=0; i<7; i++){

        tri[i+1] = tri[i] + "#";
        console.log(tri[i]);
        
    }

    
/* Fizzbuzz */

for (var a=1; a<101; a++){
    if (a%3===0 && a%5===0){
        console.log("FizzBuzz");
    } else if (a%3===0){
        console.log("Fizz");
    } else if (a%5===0){
        console.log("Buzz");
    } else {
        console.log(a);
    }
}

/* ChessBoard */

var gary = " # # # #";
var deep = "# # # # ";

for(var i=0; i<7; i++){
    if (i%2 === 0){
        console.log(gary);
    } else {
        console.log(deep);
    }
}