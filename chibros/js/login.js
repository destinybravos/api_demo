$("#login_form").on("submit",function(e){     
    e.preventDefault();
        $userid=$("#user_id").val();        
        $pass=$("#pass").val();     
    $.ajax({
    type:"post",
    url:"http://localhost/api_demo/api/login.php",
    data:{
        user_id:$userid,        
        password:$pass
    },
    dataType: 'json',
    success:function(response){
        if(response.status=="success"){
            let token=response.user.access_token;
            $.ajax({
                type:"post",
                url:"http://localhost/api_demo/session.php",
                data:{
                    action: 'set_session', 
                    token:token
                },
                dataType:"json",
                success:function(response){
                    window.location.href="http://localhost/api_demo/chibros/post.html";                 
                },
               error:function(xhr, status, msg){
                    console.log(msg);                    
               } 
            });
        }else{
            alert("it seems you have not registered please register before loging in");
            window.location.href="http://localhost/api_demo/chibros/register.html";
        }      
    }
}); 
}); 