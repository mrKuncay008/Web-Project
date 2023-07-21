<?php 
	require 'fungsi.php';

	//query data No tabungan
	$No4 = $_GET['No'];
	$tabung = query("SELECT * FROM tabungan WHERE No = $No4")[0];
	if (isset ($_POST["submit"])) {
		// add uang masuk

		if (ubah($_POST) > 0) {
			
			echo "

				<script>
					alert('Data Tabungan is Succsess Edit');
					// document.location.herf = 'keuanganindex.php'
				</script>
			";
		} else {

			echo "

				<script>
					alert('Data Failed to edit');
				</script>
			";
		}
	}

 ?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" href="">
	<title>Edit Data Tabungan</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<style type="text/css">
		
		body {
			
			max-width: 500px; 
			margin: auto; 
			background: whitesmoke; 
			padding: 10px;	
		}
	</style>

</head>
<body>
	<h2 style="text-align: center; position: relative; font-weight: bold;">
			Edit Data Tabungan
	</h2>
	<form action="" method="post">
		
		<input type="hidden" name="No" value="<?= $tabung["No"]; ?>">
		<div class="input-group mb-3">
		  <span class="input-group-text">Tanggal</span>
		  <input type="text" name="Tanggal" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="Tanggal" required value ="
		  <?= $tabung["Tanggal"]; ?>">
		</div>

		<div class="input-group mb-3">
		  <span class="input-group-text" >Nama</span>
		  <input type="text" name="Nama" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="Nama" required value ="
		  <?= $tabung["Nama"]; ?>">
		</div>

		<div class="input-group mb-3">
		  <span class="input-group-text" id="inputGroup-sizing-default">Jumlah</span>
		  <input type="text" name="Jumlah" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="Jumlah" required value ="
		  <?= $tabung["Jumlah"]; ?>">
		</div>

		<button type="submit" name="submit" class="btn btn-warning" style="font-weight: bold;">SUBMIT</button>
		
		<a class="btn btn-outline-dark" href="tabungan.php" role="button" style="font-weight:bold;">KEMBALI</a>

	</form>

</body>
</html>