<?php
  session_start();

    if(isset($_SESSION["username"])){
      return;
    }
    else{
        header("Location: http://localhost/navegadorcito/login.php");
    }
  ?>
