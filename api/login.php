<?php

include_once 'server_connection.php';

    // Initialize response array
    $response = array();

    $userid = isset($_POST['user_id']) ? $_POST['user_id'] : '';
    $password = isset($_POST['password']) ? md5($_POST['password']) : '';

    if($userid == '' or $password == ''){
        $response = [
            'status' => 'error',
            'status_code' => '2',
            'message' => 'Empty Fields detected! Please make sure you enter all values'
        ];
    }else{
        // Check if user exists
        $db_check = $conn->query("SELECT * FROM users WHERE (email='$userid' OR phone='$userid') AND password='$password'");
        if($db_check->num_rows > 0){
            $response = [
                'status' => 'success',
                'status_code' => '1',
                'message' => 'Login was successfull!',
                'user' => $db_check->fetch_assoc()
            ];
        }else{
            $response = [
                'status' => 'error',
                'status_code' => '3',
                'message' => 'Invalid login credentials!'
            ]; 
        }
    }

    echo json_encode($response);


    function genrateAccessToken(){
        $currentTime = time();
        $token = hash('md5', $currentTime);
        return $token;
    }