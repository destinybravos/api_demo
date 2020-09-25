<?php
include_once 'server_connection.php';

    // Initialize response array
    $response = array();

    $firstname = isset($_POST['firstname']) ? $_POST['firstname'] : '';
    $lastname = isset($_POST['lastname']) ? $_POST['lastname'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $password = isset($_POST['password']) ? md5($_POST['password']) : '';
    $access_token = genrateAccessToken();

    if($firstname == '' or $email == '' or $password == ''){
        $response = [
            'status' => 'error',
            'status_code' => '2',
            'message' => 'Empty Fields detected! Please make sure you enter all values'
        ];
    }else{
        // Check if user already exists
        $db_check = $conn->query("SELECT * FROM users WHERE (email='$email' OR phone='$phone') AND password='$password'");
        if($db_check->num_rows > 0){
            $response = [
                'status' => 'error',
                'status_code' => '3',
                'message' => 'User with these credentials already exists!'
            ]; 
        }else{
            // Insert Users Details into Database
            $insert_data = $conn->query("INSERT INTO users(firstname, lastname, phone, email, password, access_token)
                                    VALUES('$firstname','$lastname','$phone','$email','$password','$access_token')");
            
            if($insert_data){
                $response = [
                    'status' => 'success',
                    'status_code' => '1',
                    'message' => 'User Data saved successfully!'
                ]; 
            }else{
                $response = [
                    'status' => 'error',
                    'status_code' => '0',
                    'message' => 'Data could not be inserted due to an Unexpected Error!'
                ]; 
            }
        }
    }

    echo json_encode($response);


    function genrateAccessToken(){
        $currentTime = time();
        $token = hash('md5', $currentTime);
        return $token;
    }