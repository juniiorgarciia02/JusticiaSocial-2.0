<?php
	//include our connection
    $db = new SQLite3('Loterias.db');
	//delete the row of selected id
	$sql = "DELETE FROM Loterias WHERE ID = '".$_GET['id']."'";
	$db->query($sql);
 
	header('location: agregareliminar.php');
?>