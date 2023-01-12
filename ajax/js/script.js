$(document).ready(function(){
    // $("button").click(function(){
    //     // console.log("click");
    //     $('.div1').load("js/file.txt", function(responseTxt, statusTxt, xhr){
    //         if(statusTxt == "success"){
    //             alert("External content loaded successfully.")
    //         }
    //         if(statusTxt == "error")
    //         alert("Error: " +xhr.status+ ":"+xhr.statusTxt)
    //     });
    // });

    // $('button').click(function(){
    //     $.get("js/file.txt",function(data, status){
    //         console.log(status)
    //         alert(`Data :${data} and Status :${status}`)
    //     })
    // })

    //GET 
     let getUrl = "https://reqres.in/api/users?page=2";
    // $('button').click(function(){
    //     $.get(getUrl ,function(data, status){
    //                 JSON.stringify(data)
    //                 console.log(data.data[0].email)
    //             })
    // })
    $('button').click(function(){
        $.ajax({
            url: getUrl,
            type: "GET",
            success: function(data){
                let x = JSON.stringify(data);
                console.log(data.data)
            },
            error: function(error){
                console.log(`Error${error}`);
            }
        })
    })

    //POST
    let postUrl = "https://reqres.in/api/users";
    // $('button').click(function(){
    //     $.ajax({
    //         url:postUrl,
    //         type:'POST',
    //         data:{
    //             "name": "morpheus",
    //             "job": "leader"
    //         },
    //         success:function(data){
    //             JSON.stringify(data)
    //             console.log(data);
    //         }
    //     })
    // })

    //PUT
    // let putUrl ="https://reqres.in/api/users/2";
    // $('button').click(function(){
    //     $.ajax({
    //         url:putUrl,
    //         type : "PUT",
    //         data : {
    //             "name": "morpheus",
    //             "job": "zion resident"
    //         },
    //         success : function(data){
    //             console.log(data);
    //         }
    //     })
    // })

    //PATCH
    // let patchUrl ="https://reqres.in/api/users/2";
    // $('button').click(function(){
    //     $.ajax({
    //         url:patchUrl,
    //         type : "PATCH",
    //         data : {
    //             "name": "morpheus",
    //             "job": "zion resident"
    //         },
    //         success : function(data){
    //             console.log(data);
                 
    //         }
    //     })
    // })

    //DELETE
    let deleteUrl = "https://reqres.in/api/users/2";
    // $('button').click(function(){
    //     $.ajax({
    //         url: deleteUrl,
    //         type:"DELETE",
    //         // dataType:data,
    //         success:function(data,response,status){
    //             console.log(data);
                
            
    //         }
    //     })
    // })
})