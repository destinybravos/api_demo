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

$("#btn_delete").click(function(){
    
    $("#btn_delete").css("margin-left","100px")
    $("#textarea_edit").css("display","none");
    $("#lbl_textArea").css("display","none");
    $("#title").css("display","none");
    $("#rng").css("display","none");
    $("#btn_edit_post").css("display","none");
    $("#btn_view_post").css("display","none");
});
$("#post_form").submit(function(e){
    // e.preventDefault();
    $postId=$("#edit-id").val();    
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
        console.log(response);                                   
    },
    error:function(xhr, status, msg){
                           
    } 
});
});
