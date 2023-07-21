<?php 

	require 'fungsi.php';
	if (isset ($_POST["submit"])) {
		// add uang masuk

		if (add2($_POST) > 0) {
			
			echo "

				<script>
					alert('Data pengeluaran is Succsess submit');
					// document.location.herf = 'keuanganindex.php'
				</script>
			";
		} else {

			echo "

				<script>
					alert('Data Failed to add');
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
	<link rel="shortcut icon" href="logodown.png">
	<title>Input Pengeluaran</title>
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
			Tambah Pengeluaran
	</h2>
	<form action="" method="post">
		
		<div class="input-group mb-3">
		  <span class="input-group-text">Tanggal</span>
		  <input type="text" name="Tanggal" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="Tanggal">
		</div>

		<div class="input-group mb-3">
		  <span class="input-group-text" >Nama</span>
		  <input type="text" name="Nama" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="Nama">
		</div>

		<div class="input-group mb-3">
		  <span class="input-group-text" id="inputGroup-sizing-default">Jumlah</span>
		  <input type="text" name="Jumlah" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="Jumlah">
		</div>

		<button type="submit" name="submit" class="btn btn-danger" style="font-weight: bold;">SUBMIT</button>
		
		<a class="btn btn-outline-dark" href="index.php" role="button" style="font-weight:bold;">KEMBALI</a>

	</form>

</body>
</html>