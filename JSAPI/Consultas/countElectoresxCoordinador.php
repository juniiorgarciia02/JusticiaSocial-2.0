<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
mb_internal_encoding('UTF-8');
include_once('../conexion.php');

$postdata = file_get_contents("php://input");


    $sql = " SELECT (SELECT ID FROM coordinadores WHERE ID = IDcoordinador_ele ) as ID,
                    (SELECT nombre FROM coordinadores WHERE ID = IDcoordinador_ele ) as Nombre,
             (SELECT telefono FROM coordinadores WHERE ID = IDcoordinador_ele ) as Telefono,
             count(ID_ele) as cantidad,
             ROUND((count(ID_ele) * 100)/15) as cant
             FROM `electores` group by IDcoordinador_ele order by cantidad ASC; "; 

    
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
                    'ID' => ($row['ID']), 
                    'Nombre' => utf8_decode($row['Nombre']), 
                    'Telefono' => utf8_decode($row['Telefono']), 
                    'cantidad' => $row['cantidad'], 
                    'cant' => $row['cant'], 
                    
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


function salir($retornoS, $connS) {
	mysqli_close($connS);
	echo json_encode($retornoS); 
	return;
}

?>