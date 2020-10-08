
$('#Register_frm').on('submit', function (stop) {
    stop.preventDefault();

    $fname = $('#fname').val();
    $lname = $('#lname').val();
    $email = $('#email').val();
    $phone = $('#phone').val();
    $pass = $('#password').val();
    $cpass = $('#cpassword').val();

    let userData = {
                firstname: $fname,
                lastname: $lname,
                email: $email,
                phone: $phone,
                password: $pass
            };

    // if ($pass === $cpass) {
    //     let datasend = {
    //         firstname: $fname,
    //         lastname: $lname,
    //         email: $email,
    //         phone: $phone,
    //         password: $pass
    //     }
    //     console.log(datasend);
    // } else {
    //     let notmatch = $('#notmatch');
    //     notmatch.html("password missmatch");
    // }

    $.ajax({
        type: 'post',
        url: 'http://localhost/api_demo/api/register.php',
        data: userData,
        dataType: 'json',
        success:function(response){
            if (response.status == 'success') {
                alert(response.message);
                window.location.href = 'http://localhost/api_demo/api/skir-tech/pages/login.html'
            }
            else{
                console.log(response.message);
            }
        },
        error: function (xhr, status, msg) {
            console.log(msg);
        }
       
    });
});

 //** login part **//
$('#form1').on('submit', function (x) {
    x.preventDefault();

    $userName = $('#username').val();
    $pass = $('#password').val();
    
    let info = {
        user_id: $userName,
        password:$pass,
    };
    
    $.ajax({
        type: 'post',
        url: 'http://localhost/api_demo/api/login.php',
        data: info,
        dataType: 'json',
        success: function (response) {
            if (response.status == 'success') {
              let mytoken = response.user.access_token;

                // Here ajax request was made inside this form to store the token //
                // $.ajax({
                //     type: 'post',
                //     url: 'http://localhost/api_demo/session.php',
                //     data: {
                //         action: 'set_session', token: mytoken
                //     },
                //     dataType: 'json',
                //     success: function (response) {
                //         console.log(response)
                //         window.location.href = "http://localhost/api_demo/api/skir-tech/pages/home.html"
                //     }
                // });

              store_token(mytoken);
            } else {
                alert(response.message);
            }
        }, 
        error: function(xhr, status, msg){
            console.log(msg);
        }     
    });

});

// Here is the external function created to store token //

function store_token(tokenId) {
    let login_status = false; /*sir i dont understand the funtionality of this line of code*/
    $.ajax({
        type: 'post',
        url: 'http://localhost/api_demo/session.php',
        data: {  action: 'set_session', token: tokenId},
        dataType: 'json',
        success: function (response) {
            if (response.status == 'success') {
               window.location.href = 'http://localhost/api_demo/api/skir-tech/pages/home.html' 
            } else {
                alert('Unexpected Error');
            }
        }, 
        error: function(xhr, status, msg){
            console.log(msg);
        },   
    });
   
};

// // function to taget

// $(document).ready(function () {
//     $.get('postpages/', function (response) {
//         $('#work_page').html(response);
//     })
// })

// $('#post_data a').on('click', function () {
//     $eachpage = $(this).attr('id') + '.html';

//     $.get('postpages/' + $eachpage, function (response) {
//         $('#work_page').html(response);
//         console.log(response)
//     });
// });

   ///* ajax request to retrieve token back from session*///
    $.ajax({
        type: 'post',
        url: 'http://localhost/api_demo/session.php',
        data:  {action: 'get_session'},
        dataType: 'json',
        async: false, /* whats the function fo this line */
        success: function (response) {
            if (response.status == 'success') {
                let token = response.access_token;
                // save the token with an input element
               $('#mytoken').val(token);
            } else {
                location.href = 'http://localhost/api_demo/login.html';
            }
        },
        error: function(xhr, status, msg){
            console.log(msg);
        },
    });
   

$('#formadd').on('submit', function (e) {
    e.preventDefault();

    $title = $('#title').val();
    $body = $('#textarea').val();
    $token = $('#mytoken').val();

   let postdata = {
        action: 'save_post', 
        title: $title, 
        body: $body, 
        token: $token
    };

    $.ajax({
        type: 'post',
        url: 'http://localhost/api_demo/api/manage_post.php',
        data: postdata,
        dataType: 'json',
        success: function (response) {
            console.log(response)
            
        }
    })
});