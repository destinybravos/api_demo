$(document).ready(function(){    
    $.ajax({
        type:"post",
        url:"http://localhost/api_demo/api/manage_post.php",    
        dataType:"json",
        data:{            
                action: 'fetch_posts', 
                post_id: 'post id/sn',
             },
        success:function(response){ 
             $loop_array="";       
             response.posts.forEach(function(post){                                      
                    $loop_array += `<div class="content"> 
                                <header class="content" id="header">     
                                   <h4>
                                       <p>ID:${post.id}</p>
                                       <strong>Title:${post.title}</strong>
                                   </h4>  
                                </header>          
                                   <img src="images/construct.jpg" class="pimg"> 
                                   <p>${post.body}</p>                               
                                   <p style="color:red;paddind:10px; margin-top:10px;"><span style="margin:auto 10px;">Author:</span>${post.author.firstname} ${post.author.lastname}</p>
                                   <p style="color:red;paddind:10px;"><span style="margin:auto 10px;">Authors_ID:</span>${post.author.id}</p>
                                   <p style="color:red;paddind:10px;"><span style="margin:auto 10px;">Date of post:</span>${post.created_at}</p>      
                             </div> `                                                                           
             });                 
            $result=$("#container").html($loop_array);                                                    
        },
        error:function(xhr, status, msg){
                               
        } 
    });

});