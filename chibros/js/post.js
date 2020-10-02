
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
    $("#post_form").submit(function(e){ 
                    e.preventDefault();                   
                            $token=$("#memory_session").val();      
                            $title=$("#title").val();
                            $body=$("#textarea").val();     console.log($token);
                            savepost();
                    });
               
 function savepost(){
                    $.ajax({
                            type:"post",
                            url:"http://localhost/api_demo/api/manage_post.php",    
                            dataType:"json",
                            data:{    
                                    action: 'save_post', 
                                    title: $title, 
                                    body:  $body, 
                                    token: $token
                                },
                            success:function(response){
                                alert(response.message);
                                $title=$("#title").val("");
                                $body=$("#textarea").val("");                                 
                            },
                            error:function(xhr, status, msg){
                                console.log(msg);                    
                            } 
                        });
 }
 $("#btn_view_post").click(function(){     
      window.location.href="http://localhost/api_demo/chibros/index.html";   
 });
 $("#btn_edit_post").click(function(){     
    window.location.href="http://localhost/api_demo/chibros/editpost.html";
 });    
    
