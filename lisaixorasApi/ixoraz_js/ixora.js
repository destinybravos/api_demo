$(document).ready(function(){
    $("#advert0").css("display", "none").slideUp("10000").slideDown("1000");
    $("#advert1").fadeOut("slow");
    $("#advert0").fadeIn("slow");
    $("#advert3").slideUp("10000").slideDown("1000");
});

$(document).ready(function(){
    $("#peyes").css("display", "none");   
    $("#peye").click(function(){
        $("#peye").css("display", "none");
        $("#peyes").css("display", "block"); 
        $("#regpass").attr("type", "text");  

                        });
    $("#peyes").click(function(){
        $("#peye").css("display", "block");
        $("#peyes").css("display", "none"); 
        $("#regpass").attr("type", "password");  
    });

    $("#ceyes").css("display", "none");   
    $("#ceye").click(function(){
        $("#ceye").css("display", "none");
        $("#ceyes").css("display", "block"); 
        $("#cpass").attr("type", "text");  

                        });
    $("#ceyes").click(function(){
        $("#ceye").css("display", "block");
        $("#ceyes").css("display", "none"); 
        $("#cpass").attr("type", "password");  
    });

    });

    $("#btnlgn").click(function(){
    if("#cpass"==="#regpass"){
     console.log("submit?");}
        });


        $('#regform').on('submit',function (x) {
            x.preventDefault();

            $fname = $('#fname').val();
            $lname = $('#lname').val();
            $email = $('#regmail').val();
            $phone = $('#phone').val();
            $pass = $('#regpass').val();
            $cpass = $('#cpass').val();
        
            if($pass === $cpass){
                let datasend = {
                    firstname: $fname,
                    lastname: $lname,
                    email: $email,
                    phone: $phone,
                    password: $pass
                }
            
            registerindividual(datasend);
        }else{
            alert('Password Mismatched');
        }
        });

function registerindividual(userdata){

    $.ajax({
        type : 'post',
        url : 'http://localhost/api_demo/api/register.php',
        data: userdata,
        dataType: 'json',
        success: function (response) {
            console.log(response);
            if(response.status == 'success'){
                alert(response.message);
                window.location.href = 'http://localhost/api_demo/lisaixorasApi/ixoravalidate.html';
            }else{
                alert(response.message);
            }
        },
        error: function(xhr, status, msg){
            console.log(msg);
        }
    })

}


// to enter dashboard through login page//
$("#validateform").on("submit",function(e){     
    e.preventDefault();

    $userid=$("#usern").val();        
    $pass=$("#valipass").val();
    $.ajax({
        type:"post",
        url:"http://localhost/api_demo/api/login.php",
        data:{
        user_id:$userid,        
        password:$pass
        },
        dataType:'json'
       
    });
    console.log(e);
});