<link rel="stylesheet" type="text/css" href="style.php"/>

<?php
$link="http//".$_SERVER["HTTP_HOST"].$_SERVER["PHP_SELF"];
echo "<h1>URL procesada: $link</h1><br>";
echo "<h1>Informacion sobre el REQUEST</h1>";
$get_scheme=$_SERVER["REQUEST_SCHEME"];
$get_method=$_SERVER["REQUEST_METHOD"];
$get_uri=$_SERVER["REQUEST_URI"];
echo "<table id='requests'><tr><td>Scheme</td><td>$get_scheme</td></tr><tr><td>Method</td><td>$get_method</td></tr><tr><td>URI</td><td>$get_uri</td></tr></table>";
echo "<br>";
echo "<h1>Parametros del REQUEST</h1>";
echo "<h1>HEADERS del REQUEST</h1>";
?>
<table id="headers">
  <?php
  foreach (getallheaders() as $name => $value) {
      echo "<tr><td>$name</td><td>$value</td></tr>";
  }
  ?>
</table>

<?php
echo "<h1>Informacion sobre el server</h1>";
$server_name=$_SERVER["SERVER_NAME"];
$server_add=$_SERVER["SERVER_ADDR"];
$server_port=$_SERVER["SERVER_PORT"];
$server_protocol=$_SERVER["SERVER_PROTOCOL"];
$root=$_SERVER["DOCUMENT_ROOT"];
$server_soft=$_SERVER["SERVER_SOFTWARE"];
$gate_interface=$_SERVER["GATEWAY_INTERFACE"];
echo "<table id='server'><tr><td>Name</td><td>$server_name</td></tr><tr><td>Address</td><td>$server_add</td></tr><tr><td>Port</td><td>$server_protocol</td></tr><tr><td>Protocol</td><td>$server_protocol</td></tr><tr><td>DocumentRoot</td><td>$root</td></tr><tr><td>Software</td><td>$server_soft</td></tr><tr><td>GatewayInterface</td><td>$gate_interface</td></tr></table>";
echo "<h1>Informacion del Script</h1>";
$script_name=$_SERVER["SCRIPT_NAME"];
$script_file=$_SERVER["SCRIPT_FILENAME"];
$script_php=$_SERVER["PHP_SELF"];
echo "<table id='server'><tr><td>Name</td><td>$script_name</td></tr><tr><td>Filename</td><td>$script_file</td></tr><tr><td>PHP-SELF</td><td>$script_php</td></tr></table><br><br>";
?>
