<!DOCTYPE html>
<html>

<head>
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

  <div style="margin-top: 50px; margin-bottom:25px; " >
    <div class="row">
      <div class="col-6" >
        <div style="margin-left: 10px;">
          <button class="btn btn-primary" id="cmd">generate PDF</button>
        </div>
      </div>

      <div class="col-6">
        <form action="index.php" method="get">
          <b>BUSCAR</b> <input type="text" placeholder="Buscar por nombre" name="search" style="width: 250px;height:30px"><input type="submit" class="btn btn-primary">
        </form>
      </div>

    </div>
  </div>

  <div id="content">
    <?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    mb_internal_encoding('UTF-8');
    include_once('../conexion.php');

    $postdata = file_get_contents("php://input");

    $nombre = $_GET['search'];

    if ($nombre == null) {
      $sql = " SELECT * FROM coordinadores ";
    } else {
      $sql = " SELECT * FROM coordinadores WHERE nombre like '%$nombre%'";
    }

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
        echo "<th>#</th>";
        echo "<th>Nombre</th>";

        echo "</tr>";
        echo "</thead>";
        echo "<tbody>";
        while ($row = mysqli_fetch_array($result)) {
          echo "<tr>";
          echo "<td>" . $row['ID'] . "</td>";
          echo "<td><b><a href='approve.php?id=$row[0]'  >$row[nombre]</a></b></td>";
          echo "</tr>";
        }
        echo "</tbody>";
        echo "</table>";


        mysqli_close($conn);
        // echo json_encode($index);
        // return;
        // echo json_encode($data, JSON_UNESCAPED_UNICODE);
      } else {
        echo json_encode($sql);
        return;
      }
    }


    function salir2($retornoS, $connS)
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