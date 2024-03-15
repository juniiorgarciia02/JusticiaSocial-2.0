<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
mb_internal_encoding('UTF-8');
include_once('../conexion.php');
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

    $idusuario = utf8_decode($datos->idusuario);
    $IDcoordinador = utf8_decode($datos->IDcoordinador);
    $IDmesa = utf8_decode($datos->IDmesa);
    $IDrecinto = utf8_decode($datos->IDrecinto);
    $nombre = utf8_decode($datos->nombre);
    $apodo = utf8_decode($datos->apodo);
    $cedula = utf8_decode($datos->cedula);
    $telefono = utf8_decode($datos->telefono);


    $sql = " INSERT INTO electores (IDusuario_ele,	IDcoordinador_ele, 	IDmesa_ele, IDrecinto_ele,nombre_ele,apodo_ele,cedula_ele,telefono_ele) values ('$idusuario','$IDcoordinador','$IDmesa','$IDrecinto','$nombre','$apodo','$cedula','$telefono' ) "; 
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