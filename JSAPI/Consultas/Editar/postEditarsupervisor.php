<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
mb_internal_encoding('UTF-8');
include_once('../../conexion.php');
class Dataretorno {
    public $resultado = 0;
    public $mensaje = '';
    public $objeto;
}

$retorno = new Dataretorno();
$retorno->resultado = -1;
$retorno->mensaje = 'Sin Datos';

$postdata = file_get_contents("php://input");
$ret = true;
if (isset($postdata) && !empty($postdata)) {

    $datos = json_decode($postdata);

    $id = utf8_decode($datos->id);
    $nombre = utf8_decode($datos->nombre);
    $telefono = utf8_decode($datos->telefono);
     // $sql = " SELECT codart_art, nombre_art, coduni_fac FROM GET_INV_BUSCANDO(?) "; 
    $sql = " UPDATE `supervisores` SET `nombre`='$nombre',`telefono`='$telefono' WHERE id = '$id' "; 
        // echo($sql);
    $stmt = mysqli_query( $conn, $sql );

    if( $stmt === false ) {
        $retorno->resultado = 0;
        $retorno->mensaje .= 'Error 3. No se pudo actualizar la data del usuario.';
        $ret = false;
    } else {
        if( $ret ) {
            mysqli_commit( $conn );
            $retorno->resultado = 1;
            $retorno->mensaje = "Datos Insertados!";
         
            // $retorno->objeto = $token;
            
           } else {
            mysqli_rollback( $conn );
        }
    }
    
}

echo json_encode($retorno); 
return;



?>