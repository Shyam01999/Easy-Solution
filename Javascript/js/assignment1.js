function myFunction(a , b){
    let add = Number(a) + Number(b);
    let sub = Number(a) - Number(b);
    let mul = Number(a) * Number(b);
    let div = Number(a) / Number(b);
    document.getElementById("demo3").innerHTML = "The Addition of 50 and 10 is "+ add + "<br>" + 
                                                 "The Subtraction of 50 and 10 is "+ sub + "<br>" +
                                                 "The Multiplication of 50 and 10 is " + mul + "<br>" +
                                                 "The Division of 50 and 10 is " + div + "<br>";
}