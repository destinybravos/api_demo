<?php

include_once 'server_connection.php';

    // Initialize response array
    $response = array();
    $action = $_POST['action'];
    echo $action2 = isset($_GET['action'])? $_GET['action'] :'' ;

    if($action === 'fetch_posts'){
        $posts = array();
        $query_posts = $conn->query("SELECT * FROM blogposts ORDER BY created_at DESC");
        $no_post = $query_posts->num_rows;
        // echo $conn->error; //Error Message from Query
        if($no_post > 0){
            while ($post_data = $query_posts->fetch_assoc()) {
                $author = getAuthorByID($post_data['author_id'], $conn);
                $post_data['author'] = $author;
                array_push($posts, $post_data);
            }
        }
        $response = [
            'status' => 'success',
            'status_code' => '1',
            'message' => $no_post . ' fetched successfully.',
            'no_posts' => $no_post,
            'posts' => $posts
        ];
    }else if($action == 'read_post'){
        $post_id = $_POST['post_id'];
        $fetch_post = $conn->query("SELECT * FROM blogposts WHERE id='$post_id'");
        $no_post = $fetch_post->num_rows;
        if($no_post > 0){
            $post_data = $fetch_post->fetch_assoc();
            $author = getAuthorByID($post_data['author_id'], $conn);
            $post_data['author'] = $author;
            $response = [
                'status' => 'success',
                'status_code' => '1',
                'message' => $no_post . ' fetched successfully.',
                'post' => $post_data
            ];
        }else{
            $response = [
                'status' => 'error',
                'status_code' => '2',
                'message' => 'Post not found!'
            ];
        }
        
    }else{
        // Apart from fetch posts, every other operation requires the access token
        if(isset($_POST['token']) and $_POST['token'] != ''){
            if($action == 'save_post'){
                $token = $_POST['token'];
                $title = $_POST['title'];
                $body = $_POST['body'];
                $author_id = getAuthorID($token, $conn);
                // Save Posts
                if($title != ''){
                    $add_post = $conn->query("INSERT INTO blogposts(title, body, author_id) VALUES('$title','$body','$author_id')");
                    if($add_post){
                        $response = [
                            'status' => 'success',
                            'status_code' => '1',
                            'message' => 'Post added successfully',
                        ];
                    }else{
                        $response = [
                            'status' => 'error',
                            'status_code' => '0',
                            'message' => 'An unexpected error occured!'
                        ];  
                    }
                }else{
                    $response = [
                        'status' => 'error',
                        'status_code' => '2',
                        'message' => 'Empty fields detected! Please enter neccessary post details.'
                    ]; 
                }
            }else if($action == 'edit_post'){
                $post_id = $_POST['post_id'];
                $token = $_POST['token'];
                $title = $_POST['title'];
                $body = $_POST['body'];
                $fetch_post = $conn->query("SELECT * FROM blogposts WHERE id='$post_id'");
                $no_post = $fetch_post->num_rows;
                if($no_post > 0){
                    $post_data = $fetch_post->fetch_assoc();
                    $author_id = getAuthorID($token, $conn);
                    if($post_data['author_id'] == $author_id){
                        //  Update Post
                        $update = $conn->query("UPDATE blogposts SET title='$title', body='$body' WHERE id='$post_id'");
                        if($update){
                            $response = [
                                'status' => 'success',
                                'status_code' => '1',
                                'message' => 'Post updated successfully!'
                            ];
                        }else{
                            $response = [
                                'status' => 'error',
                                'status_code' => '4',
                                'message' => 'Post could not be updated due to an un-expected error!'
                            ];
                        }
                    }else{
                        // Un-authorized Author
                        $response = [
                            'status' => 'error',
                            'status_code' => '3',
                            'message' => 'You do not have permission to edit this post! Only the owner can do so.'
                        ];
                    }
                }else{
                    $response = [
                        'status' => 'error',
                        'status_code' => '2',
                        'message' => 'Post not found!'
                    ];
                }
            }else if($action == 'delete_post'){
                $post_id = $_POST['post_id'];
                $token = $_POST['token'];
                $fetch_post = $conn->query("SELECT * FROM blogposts WHERE id='$post_id'");
                $no_post = $fetch_post->num_rows;
                if($no_post > 0){
                    $post_data = $fetch_post->fetch_assoc();
                    $author_id = getAuthorID($token, $conn);
                    if($post_data['author_id'] == $author_id){
                        //  Update Post
                        $delete = $conn->query("DELETE from blogposts WHERE id='$post_id'");
                        if($delete){
                            $response = [
                                'status' => 'success',
                                'status_code' => '1',
                                'message' => 'Post deleted successfully!'
                            ];
                        }else{
                            $response = [
                                'status' => 'error',
                                'status_code' => '4',
                                'message' => 'Post could not be deleted due to an un-expected error!'
                            ];
                        }
                    }else{
                        // Un-authorized Author
                        $response = [
                            'status' => 'error',
                            'status_code' => '3',
                            'message' => 'You do not have permission to delete this post! Only the owner can do so.'
                        ];
                    }
                }else{
                    $response = [
                        'status' => 'error',
                        'status_code' => '2',
                        'message' => 'Post not found!'
                    ];
                }
            }else{
                $response = [
                    'status' => 'error',
                    'status_code' => '5',
                    'message' => 'Invalid Request! Request not understood or missing the right credentials.'
                ];
            }
                
        }else{
            $response = [
                'status' => 'error',
                'status_code' => '0',
                'message' => 'Un-Authorized Request! No Access token found on request.'
            ];
        }
    }
        
    

    echo json_encode($response);


    function getAuthorByID($id, $conn){
        $query_user = $conn->query("SELECT * FROM users WHERE id='$id'");
        $user = $query_user->fetch_assoc();
        $author = [
            'id' => $user['id'],
            'firstname' => $user['firstname'],
            'lastname' => $user['lastname'],
            'email' => $user['email']
        ];
        return $author;
    }

    function getAuthorByToken($access_token, $conn){
        
    }

    function getAuthorID($access_token, $conn){
        $query_user = $conn->query("SELECT * FROM users WHERE access_token='$access_token'");
        $user = $query_user->fetch_assoc();
        return  (int)$user['id'];
    }