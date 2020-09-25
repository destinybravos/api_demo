<?php
session_start();

/*
    The session need two variables;
    1.  action (set_session or get_session)
    2.  Using the set_session, we need the token variable
*/

$action = isset($_POST['action']) ? $_POST['action'] : '';
$response = array();

if($action !== ''){ //If the action data is available

    if($action === 'set_session'){ // Check if action is to set session variables
        if(isset($_POST['token']) and $_POST['token'] !== ''){
            $_SESSION['access_token'] = $_POST['token'];
            $response = [
                'status' => 'success',
                'status_code' => '1',
                'message' => 'Login session was registered successfully',
            ];
        }else{
            $response = [
                'status' => 'error',
                'status_code' => '3',
                'message' => 'Access token not found on request!',
            ];
        }
    }elseif ($action === 'get_session') { // Check if action is to get session variables
        if (isset($_SESSION['access_token'])) {
            $response = [
                'status' => 'success',
                'status_code' => '1',
                'message' => 'Access token retrieved successfully',
                'access_token' => $_SESSION['access_token']
            ];
        }else{
            $response = [
                'status' => 'error',
                'status_code' => '3',
                'message' => 'Access token not found',
            ]; 
        }
    }else{ // Else, Invalid action sent with request 
        $response = [
            'status' => 'error',
            'status_code' => '2',
            'message' => 'Request is invalid.'
        ];
    }

}else{
    //The action data is not available, so return error response
    $response = [
        'status' => 'error',
        'status_code' => '0',
        'message' => 'Request not understood! Please specify action to perform.'
    ];
}


// Return/Echo the response back to JS
echo json_encode($response);


?>