$(document).ready(function(){  
    $.ajax({
        type:"post",
        url:"http://localhost/api_demo/api/manage_post.php",    
        dataType:"json",
        data:{            
                action: 'fetch_posts', 
                post_id: 'post id/sn',
             },
        success:function(response){ console.log(response)
        
             $loop_array="";       
             response.posts.forEach(function(post){                                      
                    $loop_array += `<a href="readmore.html?post_id=${post.id}">
                                        <div class="content"> 
                                        <header class="content" id="header">     
                                        <h4>
                                            <p>ID:${post.id}</p>
                                            <strong>Title:${post.title}</strong>
                                        </h4>  
                                        </header>          
                                            <img src="images/Screenshot_20200909-000204_1599607563947.jpg" class="pimg"> 
                                                                    
                                        <p><span>Author:</span>${post.author.firstname} ${post.author.lastname}</p>
                                        <p><span>Authors_ID:</span>${post.author.id}</p>
                                        <p><span>Date of post:</span>${post.created_at}</p>      
                                    </div>
                                    </a>`;                                                                          
             });                 
            $result=$("#container").html($loop_array);                                                    
        },
        error:function(xhr, status, msg){
                               
        } 
    });

});