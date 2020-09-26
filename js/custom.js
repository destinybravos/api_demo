var token = '';

    $('form[name=reg_form]').on('submit', function(ev){

        // REGISTER URL : http://localhost/api_demo/api/register.php
    
        ev.preventDefault(); //stop the form from submitting
    
        $fname = $('input[name=fname]').val();
        $lname = $('#lname').val();
        $email = $('#email').val();
        $phone = $('#phone').val();
        $pass = $('#pass').val();
        $cpass = $('#cpass').val();
    
        if($pass === $cpass){
            let dataSend = {
                firstname: $fname,
                lastname: $lname,
                email: $email,
                password: $pass,
                phone: $phone
            }
            registerUser(dataSend);
        }else{
            alert('Password Mismatched');
        }
    });
    
    function registerUser(userData) {
        $.ajax({
            type : 'post',
            url : 'http://localhost/api_demo/api/register.php',
            data: userData,
            dataType: 'json',
            success: function (response) {
                if(response.status == 'success'){
                    alert(response.message);
                    window.location.href = 'http://localhost/api_demo/login.php';
                }else{
                    alert(response.message);
                }
            },
            error: function(xhr, status, msg){
                console.log(msg);
            }
        })
    }
    
    // Login Part
    $('form[name=login_form]').on('submit', function(ev){
    
        // LOGIN URL : http://localhost/api_demo/api/login.php
    
        ev.preventDefault(); //stop the form from submitting
    
        $userid = $('#user_id').val();
        $pass = $('#pass').val();
    
        let dataSend = {
            user_id: $userid,
            password: $pass,
        }
    
        $.ajax({
            type : 'post',
            url : 'http://localhost/api_demo/api/login.php',
            data: dataSend,
            dataType: 'json',
            success: function (response) {
                if(response.status == 'success'){
                    let mytoken = response.user.access_token;
                    console.log(response)
                    store_token(mytoken);
                }else{
                    alert(response.message);
                }
            },
            error: function(xhr, status, msg){
                console.log(msg);
            }
        })
        
    });
    
    
    function store_token(token2store){
        let login_status = false;
        $.ajax({
            type : 'post',
            url : 'http://localhost/api_demo/session.php',
            data: {action: 'set_session', token: token2store},
            dataType: 'json',
            success: function (response) {
                if(response.status == 'success'){
                    window.location.href = 'http://localhost/api_demo/index.php';
                }else{
                    alert('An Unexpeted Error');
                }
            },
            error: function(xhr, status, msg){
                console.log(msg);
            }
        });
    
    }
    

    function retrieve_token(){
        $.ajax({
            type : 'post',
            url : 'http://localhost/api_demo/session.php',
            data: {action: 'get_session'},
            dataType: 'json',
            async: false,
            success: function (response) {
                if(response.status === 'success'){
                    token = response.access_token;
                }else{
                    console.log('Access Token not found');
                }
            },
            error: function(xhr, status, msg){
                console.log(msg);
            }
        });

        return token;
    }

    // Set the Access Token on a hidden field with the ID of #hidden_token
    $('#hidden_token').text(retrieve_token() ? retrieve_token() : '');
    // OR Set the Access Token on the content attribute of a meta element with the name of _token
    $('meta[name=access_token]').attr('content', retrieve_token() ? retrieve_token() : '');

