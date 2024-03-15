<?php
//Create a new SQLite3 Database
$db = new SQLite3('Loterias.db');
 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificación de comercios</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/dataTables.bootstrap5.min.css" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"  crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/dataTables.bootstrap5.min.js"  crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>



   <div class="container">
    <div class="text-center">
        <img src="logo.png" width="350px" alt="Logo">
    </div>
         <table id="datatable" class="table table-striped">
            <thead>
                <td>ID</td>
                <td>Cliente</td>
                <td>Provincia</td>
                <td>Cuidad</td>
                <td>Estado</td>
            </thead>
            <tbody>
            <?php
                //include our connection
                //include 'dbconfig.php';
    
                //query from the table that we create
                $sql = "SELECT * FROM Loterias";
                $query = $db->query($sql);
        
                while($row = $query->fetchArray()){
                    echo "
                        <tr>
                            <td>".$row['ID']."</td>
                            <td>".$row['Nombrecliente']."</td>
                            <td>".$row['provincia']."</td>
                            <td>".$row['municipio']."</td>
                            <td><span class='badge text-bg-success'>Activo</span></td>
                        </tr>
                    ";
                }
            ?>

            </tbody>
         </table>
   </div>

   

   <script>
    $('#datatable').DataTable();
   </script>

    
</body>
</html>