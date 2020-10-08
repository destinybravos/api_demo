
    $.ajax({
        type:"post",
        url:"http://localhost/api_demo/session.php",
        data:{
            action: 'get_session'        
        },
        dataType:"json",
        success:function(response){
            console.log(response); 
            $("#post_form").submit(function(e){
                            var token=response;       
                            $title=$("title").val();
                            $body=$("textarea").val();     
                    $.ajax({
                                type:"post",
                                url:"http://localhost/api_demo/api/manage_post.php",    
                                dataType:"json",
                                data:{    
                                        action: 'save_post', 
                                        title: $title, 
                                        body: $body, 
                                        token: token
                                    },
                                success:function(response){
                                    alert("insertion successful");                                  
                                },
                                error:function(xhr, status, msg){
                                    console.log(msg);                    
                                } 
                            });
                    });
        },
        error:function(xhr, status, msg){
                console.log(msg);                    
        } 
        });
    