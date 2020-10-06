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
$("#form_edit_container").submit(function(e){
    e.preventDefault();
    $postId=$("#edit-id").val();
    $postTitle=$("#title").val();
    $body=$("#textarea_edit").val();
    $token=$("#memory_session").val();

$.ajax({
    type:"post",
    url:"http://localhost/api_demo/api/manage_post.php",    
    dataType:"json",
    data:{    
        action: 'edit_post', 
        post_id: $postId, 
        title: $postTitle, 
        body: $body, 
        token: $token
         },
    success:function(response){  
        console.log(response);                                   
    },
    error:function(xhr, status, msg){
                           
    } 
});
});

$("#btn_view_post").click(function(){       
    window.location.href="http://localhost/api_demo/chibros/index.html"
});