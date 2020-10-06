$("#reg_form").on("submit", function(e){     
    e.preventDefault();
        $fname=$("#fname").val();
        $lname=$("#lname").val();
        $email=$("#email").val();
        $phone=$("#phone").val();
        $pass=$("#pass").val();     
    $.ajax({
    type:"post",
    url:"http://localhost/api_demo/api/register.php",
    data:{
        firstname:$fname,
        lastname:$lname,
        email:$email,
        phone:$phone,
        password:$pass
    },
   dataType: 'json',
    success:function(response){ 
        if(response.status == 'success'){        
            alert(response.message);
            window.location.href = 'http://localhost/api_demo/chibros/login.html';
        }else{
            alert(response.message);
        }
    },
    error: function(xhr, status, msg){
        console.log(msg);
    }
    
});

});
