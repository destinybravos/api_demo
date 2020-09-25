<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Demo</title>
    <link rel="shortcut icon" href="" type="image/x-icon">
    <link rel="stylesheet" href="">
    <link rel="stylesheet" href="http://localhost/tutorial_repo/bootstrap4/css/bootstrap.css">
    <link rel="stylesheet" href="http://localhost/js_tutorial_repo/fa/css/all.css">
    <link rel="stylesheet" href="css/custom.css">
</head>
<body>

    <div class="container p-3 text-light" style="margin:60px auto; max-width:400px; background-color:tomato;">
        <div class="row">
            <div class="col-12">
            <h3 class="mb-4">
                <i class="fa fa-user-lock"></i> User Login
            </h3>
                <!-- Form Start -->
                    <form method="post" name="login_form">
                        <div class="form-group">
                            <label for="user_id">Email or Phone</label>
                            <input type="text" name="user_id" id="user_id" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="pass">Password</label>
                            <input type="password" name="pass" id="pass" class="form-control">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary">
                                <i class="fa fa-sign-in-alt"></i>
                                Login
                            </button>
                        </div>
                    </form>
                <!-- Form End -->
            </div>
        </div>
    </div>

    <script src="http://localhost/js_tutorial_repo/js/jquery.js"></script>
    <script src="js/custom.js"></script>
</body>
</html>