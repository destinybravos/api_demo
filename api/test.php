<?php

    $posts = [];

    $post_content = [
        'title' => 'Article 1',
        'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dicta quam modi laudantium 
                    corporis doloribus veritatis, suscipit voluptas deserunt sunt ut esse officia. Dolorem earum 
                    delectus officiis eligendi doloribus sapiente!',
        'author' => [
            'firstname' => 'Dj Skirt',
            'lastname' => 'Nekede'
        ]
    ];
    array_push($posts, $post_content);
    $post_content = [
        'title' => 'Article 2',
        'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dicta quam modi laudantium 
                    corporis doloribus veritatis, suscipit voluptas deserunt sunt ut esse officia. Dolorem earum 
                    delectus officiis eligendi doloribus sapiente!',
        'author' => [
            'firstname' => 'Dj Skirt',
            'lastname' => 'Nekede'
        ]
    ];
    array_push($posts, $post_content);
    $post_content = [
        'title' => 'Article 3',
        'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dicta quam modi laudantium 
                    corporis doloribus veritatis, suscipit voluptas deserunt sunt ut esse officia. Dolorem earum 
                    delectus officiis eligendi doloribus sapiente!',
        'author' => [
            'firstname' => 'Dj Skirt',
            'lastname' => 'Nekede'
        ]
    ];
    array_push($posts, $post_content);
    $post_content = [
        'title' => 'Article 4',
        'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dicta quam modi laudantium 
                    corporis doloribus veritatis, suscipit voluptas deserunt sunt ut esse officia. Dolorem earum 
                    delectus officiis eligendi doloribus sapiente!',
        'author' => [
            'firstname' => 'Dj Skirt',
            'lastname' => 'Nekede'
        ]
    ];
    array_push($posts, $post_content);
    $post_content = [
        'title' => 'Article 5',
        'body' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dicta quam modi laudantium 
                    corporis doloribus veritatis, suscipit voluptas deserunt sunt ut esse officia. Dolorem earum 
                    delectus officiis eligendi doloribus sapiente!',
        'author' => [
            'firstname' => 'Dj Skirt',
            'lastname' => 'Nekede'
        ]
    ];
    array_push($posts, $post_content);

    $response = [
        'status' => 'success',
        'message' => '',
        'posts' => $posts
    ];

    echo json_encode($response);

?>