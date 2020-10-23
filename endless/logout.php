<?php
    session_start();
    session_destroy();
    // unset($_SESSION['active_user']);

    header('location:login.html');

?>