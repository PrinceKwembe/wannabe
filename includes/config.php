<?php
ini_set('display-errors', 1);
ini_set('display-startup-',1);
error_reporting (E_ALL);
//DB_credentials.
define('DB_HOST', 'localhost');
define ('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME','studentdb');
//Establish database connection

try
{
    $dbh = new PDO ("mysql:host=" .DB_HOST. ";dbname=" .DB_NAME, DB_USER, DB_PASS, array (PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8' "));

}
catch (PDOException $e)
{
    exit ("Error: " .$e->getMessage());
} 
?>