<?php
	require 'fungsi.php';
	if (isset ($_POST["submit"])) {
		// add uang masuk

		if (tabung($_POST) > 0) {

			echo "

				<script>
					alert('Data Tabungan is Succsess submit');
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
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input Celengan</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <style>
        body {

			max-width: 500px;
			margin: 50px auto 0;
			background:#56699A;
			padding: 10px;
		}

        h2{
            color: whitesmoke;
            text-align: center;
            position: relative;
            font-weight: bold;
            font-family: "monaco",monospace;
        }
    </style>
</head>
<body>
    <h2>
		Tambah Tabungan
	</h2>
    <form action="" method="post">

		<div class="input-group mb-3">
			<span class="input-group-text" >Tanggal</span>
			<input type="text" name="Tanggal" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="Tanggal">
		</div>

		<div class="input-group mb-3">
			<span class="input-group-text">Nabung</span>
			<input type="text" name="Nama" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="Nama">
		</div>

		<div class="input-group mb-3">
		  <span class="input-group-text" id="inputGroup-sizing-default">Jumlah</span>
		  <input type="text" name="Jumlah" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="Jumlah">
		</div>

		<button type="submit" name="submit" class="btn btn-success" style="font-weight: bold;">SUBMIT</button>

		<a class="btn btn-outline-light" href="index2.php" role="button" style="font-weight:bold;">KEMBALI</a>

	</form>
</body>
</html>
