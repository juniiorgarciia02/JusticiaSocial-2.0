<!DOCTYPE html>
<html>
<head>
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
</head>
<body>
   <br>
   <div style="margin-left: 10px;">
      <a href='index.php'><button class='btn btn-primary'>Back</button></a>
   </div>
   <br>
   <div style="margin-left: 10px;" >
      <div class="card" >
         <form method="POST" style="margin-left: 10px;">
            <div class="form-group">
               <label for="disabledTextInput">ID : </label>
               <input type="text" id="disabledTextInput" class="form-control" placeholder="Ingresar ID" name="ID">
            </div>
            <br>
            <div class="form-group">
               <label for="disabledTextInput">Nombre Cliente: </label>
               <input type="text" id="disabledTextInput" class="form-control" placeholder="Nombre cliente" name="nombre">
            </div>
            <br>
            <div class="form-group">
               <label for="disabledTextInput">Provincia: </label>
               <input type="text" id="disabledTextInput" class="form-control" placeholder="Provincia" name="provincia">
            </div>
            <br>
            <div class="form-group">
               <label for="disabledTextInput">Municipio: </label>
               <input type="text" id="disabledTextInput" class="form-control" placeholder="Municipio" name="municipio">
            </div>
            <br>
               <div  style="text-align: center;">
                 <input type="submit" name="save" value="GUARDAR" class="btn btn-primary">      
                
               </div>
               <br>
         </form>

   <br>
   <br>
      </div>
   </div>
   

<?php
	if(isset($_POST['save'])){
		$ID = $_POST['ID'];
		$nombre = $_POST['nombre'];
		$provincia = $_POST['provincia'];
      $municipio = $_POST['municipio'];
		//update our table

      if($ID == null ){

      }
      $db = new SQLite3('Loterias.db');

		$sql = "INSERT INTO Loterias (ID, Nombrecliente, provincia, municipio) VALUES ('$ID', '$nombre', '$provincia','$municipio')";
		$db->exec($sql);
		// header('location: index.php');
	}
?>

   <script>
    $('#datatable').DataTable();
   </script>

    
</body>
</html>
