<!DOCTYPE html>
<html>

<head>
<?php $coodinador = ''; ?>
  <link rel="stylesheet" href="style.css">

  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.1/css/bootstrap.css" type="text/css" media="print" />

  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.1/css/bootstrap.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="jspdf.min.js"></script>
  <style>
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      width: 40%;
    }

    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .container {
      padding: 2px 16px;
    }
  </style>
  <script>
    $(function() {


      $('#cmd').click(function() {


        var doc = new jsPDF('p', 'pt', 'a4');
        var specialElementHandlers = {

        };

        doc.fromHTML($('#content').get(0), 15, 15, {
          'width': 250,
          'margin': 1,
          'pagesplit': true, //This will work for multiple pages
          'elementHandlers': specialElementHandlers
        });

        doc.save('sample-file.pdf');
      });

    });
  </script>
</head>

<body>

  <div style="margin-top: 50px; margin-bottom:25px; ">
    <div class="row">
      <div class="col-6">
        <div style="margin-left: 10px;">
          <button class="btn btn-primary" onclick="window.print()">PRINT</button>
        </div>
      </div>
    </div>
  </div>

  <div id="content">
  <div style="text-align: center;"><h1><b>JUSTICIA SOCIAL  VOTA 34</b></h1></div>
  <br>
  <br>
  <?php echo($coodinador) ?>
    <?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    mb_internal_encoding('UTF-8');
    include_once('../conexion.php');

    $postdata = file_get_contents("php://input");

   
    $busqueda = $_GET['id'];

    // $sql = " SELECT codart_art, nombre_art, coduni_fac FROM GET_INV_BUSCANDO(?) "; 
    $sql = " SELECT ID_ele,IDusuario_ele,IDcoordinador_ele,IDmesa_ele,IDrecinto_ele,nombre_ele,apodo_ele,cedula_ele,telefono_ele, (SELECT nombre FROM coordinadores WHERE ID=IDcoordinador_ele ) AS Coordinador , (SELECT nombre_rec FROM recinto WHERE ID_rec =IDrecinto_ele )as recinto ,(SELECT nombre FROM mesas WHERE ID_mes = IDmesa_ele) as mesa  FROM electores where IDcoordinador_ele='$busqueda' ";
    //  echo($sql);


    $result = mysqli_query($conn, $sql);

    if ($result === false) {
      salir($retorno, $conn);
      return;
    } else {

      if ($result) {
        $data = array();
        $index = 0;
        // utf8_encode
       
        echo '<table class="table table-bordered table-striped">';
        echo "<thead>";
        echo "<tr>";
        echo "<th>ID</th>";
        echo "<th>NOMBRE</th>";
        echo "<th>APODO</th>";
        echo "<th>CEDULA</th>";
        echo "<th>TELEFONO</th>";
        echo "<th>MESA</th>";
        echo "<th>RECINTO</th>";
        echo "</tr>";
        echo "</thead>";
        echo "<tbody>";

        while ($row = mysqli_fetch_array($result)) {
          $coodinador  = $row['Coordinador'];
          $index = $index + 1;
          if($index == 1){
            echo "<tr><b> <spam style='margin-left:10px'><h3>COORDINADOR: </spam>  $coodinador </h3></b></tr>";
          }
       
          echo "<tr>";
          echo "<td>" .   $index;
          echo "<td>" .  ($row['nombre_ele']) . "</td>";
          echo "<td>" .  ($row['apodo_ele']) . "</td>";
          echo "<td>" .  $row['cedula_ele'] . "</td>";
          echo "<td>" .  $row['telefono_ele'] . "</td>";
          echo "<td>" .  $row['mesa'] . "</td>";
          echo "<td>" .  $row['recinto'] . "</td>";
          echo "</tr>"; 
        }
        echo "</tbody>";
        echo "</table>";
       
        echo(' <br>');
       
        mysqli_close($conn);
      } else {
        echo json_encode($sql);
        return;
      }
    }


    function salir($retornoS, $connS)
    {
      mysqli_close($connS);
      echo json_encode($retornoS);
      return;
    }

    ?>


  </div>
  <div id="editor"></div>
</body>

</html>