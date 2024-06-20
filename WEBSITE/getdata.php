<?php
$host= ""; 
$username= ""; 
$password= ""; 
$dbname= ""; 
$conn=mysqli_connect($host, $username, $password, $dbname);
if (mysqli_connect_errno()) 
    echo"Connection could not be found...".mysqli_connect_error();
else
   echo"Successfully connected...";