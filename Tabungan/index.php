<?php
  require 'fungsi.php';
  $tabung = query("SELECT * FROM tabel");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buku Tabungan Online</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
</head>
<body>
<table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Nabung</th>
      <th scope="col">Tanggal</th>
      <th scope="col">Jumlah</th>
    </tr>
  </thead>
  <tbody>
  <?php $i = 1; ?>
	  	<?php foreach ($Nabung as $tampil) : ?>
	<tr>
		<th scope="row"> <?= $i; ?></th>
			<td>
				<a href="">Edit</a> / 
					<a href="" onclick = "return confirm('Apa Yakin Di hapus?');">Delete</a>
				</td>

			<!-- Main Php -->
			<td><?= $tampil["Nabung"]; ?></td>
			<td><?= $tampil["Tanggal"]; ?></td>
			<td><?= $tampil["Jumlah"]; ?></td>
	</tr>
			<?php $i++; ?>
			<?php endforeach; ?>
  </tbody>
</table>
</body>
</html>