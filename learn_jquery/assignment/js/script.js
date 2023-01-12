$(document).ready(function(){
    //keycode
    $(".test").keydown(function (event){
        // console.log(event);
        $(".text-cont").html("Press any key to started : " +event.key +"<br>"+ "The key code is: "+event.keyCode);
    })

    //prototype
  let a = {
    name2 :"Shyam",
    language: "jquery",
    run:()=>{
        alert("Self run")
    }
   }

   let b = {
    run : function(){
        alert("run");
    }
   }

   b.__proto__={
    name:"Jackie"
   }

   a.__proto__= b;

  //  a.run();

   console.log(a.name)

   //datepicker
   $('#datepicker').datepicker({
    dateFormat:"dd-mm-yy",
    changeMonth: true,
    changeYear: true,
    showAnim: "slide",
    selectOtherMonths: true,
    showOptions: { direction: "up" },
    yearRange: "1900:3000",
   });

   //multidatepicker
   $("#multidatepicker").multiDatesPicker({
    dateFormat:"dd-mm-yy ",
    showAnim: "slide",
    maxPicks: 4,
    numberOfMonths: [3,4],
   });

   //date time picker
   $("#datetimepicker").datetimepicker({
    format:'d-m-Y ,H:i',
     lang:'ru',
    //  allowTimes:[
    // '1:00', '2:00',
    // '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00','12:00', 
    //   ]
    
   });

  })
