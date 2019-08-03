<?php
  session_start();
  $error=FALSE;
  if($_SERVER["REQUEST_METHOD"]=="POST"){
    if(empty($_POST["username"])){

      $error=TRUE;

    }
    else{

      $_SESSION["username"]=$_POST["username"];

    }
  }

?>
<form action="login.php" method="get">
  Nombre de usuario: <input type="text" name="username">
  <br>
  Ingrese su contraseña: <input type="text" name="password">
  <br>
  <input type="submit" name="go">
</form>
<?php
  if(isset($_GET["go"])):
    if($_GET["username"]==$_SESSION["username"]){

        header("Location: http://localhost/navegadorcito/index.php");

    }

    if($_GET["username"]!=$_SESSION["username"]):
?>
      <h3>Su usuario no aparace en la base de datos, por favor registrese para continuar</h3>
      <form action="login.php" method="post">
        Nombre de usuario: <input type="text" name="username">
        <br>
        Ingrese contraseña: <input type="text" name="password">
        <br>
        <input type="submit">
      </form>
<?php
    endif;
  endif;
  if($error):
?>
    <h3>Su usuario no aparace en la base de datos, por favor registrese para continuar</h3>
    <form action="login.php" method="post">
      Ingrese nombre de usuario: <input type="text" name="username">
      <br>
      Ingrese contraseña: <input type="text" name="password">
      <br>
      <input type="submit">
    </form>
<?php endif ?>
