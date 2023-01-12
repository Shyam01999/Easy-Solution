function myFunction(){
    document.getElementById("demo").style.color = "red";
    console.log("Clicked");
    }

    // document.getElementById("demo").addEventListener("click ", myFunction1); 

    function myFunction1(){
        document.getElementById("demo").style.backgroundColor = "black";
        document.getElementById("demo").style.fontSize = "50px";
    }

    let x =document.getElementById("demo");

    x.addEventListener("mousemove", myFunction2);
    x.addEventListener("click", myFunction3);
    x.addEventListener("mouseout" , myFunction4);
    x.addEventListener("keypress", myFunction5);

    function myFunction2(){
        document.getElementById("demo").innerHTML = "Mouse over!";
        
    }

    function myFunction3(){
        document.getElementById("demo").innerHTML = " You ClicKed on Text!";
    }

    function myFunction4(){
        document.getElementById("demo").innerHTML = "Mouse Leave";
    }

    function myFunction5(){ 
        document.getElementById("demo").alert("You press a key on the Text.")
    }

    