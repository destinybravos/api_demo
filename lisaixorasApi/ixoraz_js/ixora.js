$(document).ready(function(){
    $("#advert0").css("display", "none");
    $("#advert1").fadeOut("slow");
    $("#advert0").fadeIn("slow");
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

    if("#cpass"==="#regpass"){
        location.
    }