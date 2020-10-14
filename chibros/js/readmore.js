$pageUrl=new URL(window.location.href);
$id=$pageUrl.searchParams.get("post_id");
$.ajax({
    type: 'post',
    url: 'http://localhost/api_demo/api/manage_post.php',
    dataType: 'json',
    cache:false,
    data:{            
        action: 'read_post', 
        post_id: $id,
     },
    success: function (response){
    
        if(response.status==="success"){console.log(response.post.author)
            $post_card = `<div class="content"> 
                                    <header id="header">     
                                    <h4>
                                        <p>ID:${response.post.id}</p>
                                        <strong>Title:<span>${response.post.title}</span></strong>
                                    </h4>  
                                    </header>          
                                        <img src="images/Screenshot_20200909-000204_1599607563947.jpg" class="pimg"> 
                                        <p>${response.post.body}</p>                        
                                    <p><span>Author:</span>${response.post.author.firstname} ${response.post.author.lastname}</p>
                                    <p><span>Authors_ID:</span>${response.post.author.id}</p>
                                    <p><span>Date of post:</span>${response.post.created_at}</p>      
                                </div>`;

        }else{
            alert(response.message);
            location.href = 'index.html';
        }        
        $('#readmore_content').html($post_card);
        
    }
});
