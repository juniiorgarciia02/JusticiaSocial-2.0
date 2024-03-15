<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
mb_internal_encoding('UTF-8');
include_once('../conexion.php');

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  
    
    $data = json_decode($postdata);

    $sql = " SELECT *, (SELECT descripcion FROM provincia WHERE provincia.id_prov=id_provincia) as provincia, (SELECT municipio.descripcion FROM municipio WHERE municipio.id_muni = id_municipio) as municipio FROM supervisor WHERE id_provincia='$data->ID' "; 

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
                    'id_supervisor' => $row['id_supervisor'], 
                    'nombre' => $row['nombre'], 
                    'tel' => $row['tel'], 
                    'id_provincia' => $row['id_provincia'], 
                    'id_municipio' => $row['id_municipio'], 
                    'municipio' => $row['municipio'], 
                    'provincia' => $row['provincia'], 
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