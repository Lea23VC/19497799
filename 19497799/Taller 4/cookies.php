<?php

	$color = $name = $pref_color = $username = $nameError = "";
	$pref_color = "color_pref";
	$username = "nom_usuario";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (empty($_POST["name"])) {
		$nameError = "Porfavor ingrese nombre";
	}
	else {
		$name = $_POST["name"];
		$name = trim($name);
		$name = stripslashes($name);
		$name = htmlspecialchars($name);
		if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
			$nameError = "Porfavor solo ingrese letras y espacios";
		}
		else {
			setcookie($username, $name, time() + 600, "/");
			header("Refresh:0");
		}
	}
	if (!empty($_POST["color"])) {
		$color = $_POST["color"];
		setcookie($pref_color, $color, time() + 600, "/");
		header("Refresh:0");
	}
}

if(!isset($_COOKIE[$pref_color])):
?>
	<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
		Ingrese color preferido: <select name="color">
			<option value="#FF0000">Rojo</option>
			<option value="#00FF00">Verde</option>
			<option value="#0000FF">Azul</option>
			<option value="#FFD1DC">Rosa Pastel</option>
			<option value="#808080">Gris</option>
			<option value="#FFFFFF">Negro</option>
		</select>
		<br>
		<input type="submit" name="submit" value="Submit">
	</form>
<?php elseif(!isset($_COOKIE[$username])) : ?>
	<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
		Nombre: <input type="text" name="name" value="<?php echo $name;?>">
		<span class="error">* <?php echo $nameError;?></span>
		<br>
		<input type="submit" name="submit" value="Submit">
	</form>
<?php
	else :
		echo '<div style="Color:'.$_COOKIE[$pref_color].'">Hola '.$_COOKIE[$username].'</div';
	endif
?>
