<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
mb_internal_encoding('UTF-8');
include_once('../conexion.php');

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $datos = json_decode($postdata);
    
    $busqueda = $datos->ID;
    
    $busqueda = utf8_decode($busqueda);

    // $sql = " SELECT codart_art, nombre_art, coduni_fac FROM GET_INV_BUSCANDO(?) "; 
    $sql = " SELECT ID_ele,IDusuario_ele,IDcoordinador_ele,IDmesa_ele,IDrecinto_ele,nombre_ele,apodo_ele,cedula_ele,telefono_ele, (SELECT nombre FROM coordinadores WHERE ID=IDcoordinador_ele ) AS Coordinador  FROM electores where IDcoordinador_ele='$busqueda' "; 
    

    
    $result = mysqli_query($conn, $sql);
    
    if ( $result === false ) {
        salir($retorno,$conn);
        return;
    } else {    
        
        if ( $result ) {
            $data = array();
            $index = 0;
            // utf8_encode
            while( $row = mysqli_fetch_array( $result, MYSQLI_ASSOC) ) {
                $data[$index] = array(
                    'ID_ele' => $row['ID_ele'], 
                    'IDusuario_ele' => ($row['IDusuario_ele']),
                    'IDcoordinador_ele' => $row['IDcoordinador_ele'],
                    'IDmesa_ele' => $row['IDmesa_ele'],
                    'IDrecinto_ele' => $row['IDrecinto_ele'],
                    'nombre_ele' => utf8_decode($row['nombre_ele']),
                    'apodo_ele' => utf8_decode($row['apodo_ele']),
                    'cedula_ele' => $row['cedula_ele'],
                    'telefono_ele' => $row['telefono_ele'],
                    'Coordinador' => utf8_decode($row['Coordinador']),
                    
                    
                );

                $index += 1;
            }

            mysqli_close($conn);
            // echo json_encode($index);
            // return;
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
        } else {
            echo json_encode($sql);
            return;
        }
    }    
}

function salir($retornoS, $connS) {
	mysqli_close($connS);
	echo json_encode($retornoS); 
	return;
}

?>