$.ajax({
    type:"post",
    url:"http://localhost/api_demo/session.php",
    data:{
        action: 'get_session'        
    },
    dataType:"json",
    success:function(response){
      $("#memory_session").val(response.access_token);      
    },
    error:function(xhr, status, msg){
            console.log(msg);                    
    } 
    });
$("#delete_form").submit(function(e){
    e.preventDefault();
    $postId=$("#delete_id").val();   
    $token=$("#memory_session").val(); 
$.ajax({
    type:"post",
    url:"http://localhost/api_demo/api/manage_post.php",    
    dataType:"json",
    data:{    
        action: 'delete_post', 
        post_id: $postId,        
        token: $token
         },
    success:function(response){  
     alert(response.message);                       
    },
    error:function(xhr, status, msg){
        console.log(msg);                     
    } 
});
});