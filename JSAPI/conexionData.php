<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

include_once('configData.php');

$connectionOptions = [
    "Database" => $sysServerDataBase,
    "Uid" => $sysServerUser,
    "PWD" => $sysServerpassword
];
$conn = sqlsrv_connect($sysServerName, $connectionOptions);

if( $conn ) {

}else{

    die( print_r( sqlsrv_errors(), true));
}

// echo json_encode('1');
?>
