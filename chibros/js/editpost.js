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
    $postId=$("#edit_id").val();
    $postTitle=$("#title").val();
    $body=$("#textarea_edit").val();
    $token=$("#memory_session").val(); 
    alert($postId)
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
            alert(response.message) ;                                   
        },
        error:function(xhr, status, msg){
            alert(msg)                
        }
    });
});

$("#btn_view_post").click(function(){       
    window.location.href="index.html"
});
$("#btn_delete").click(function(){      
    window.location.href="deletepost.html"
});