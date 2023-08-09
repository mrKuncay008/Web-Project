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
    <style>
      .table{
          max-width: 600px; /* Atur lebar maksimal tabel */
          margin: 50px auto 0;
      }
      .btn{
          max-width: 600px; /* Atur lebar maksimal tabel */
          margin: 25px auto 0;
      }
    </style>
  </head>
<body>
<table class="table table-bordered border-black
table-dark table-striped">

  <thead class ="table-light">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Update</th>
      <th scope="col">Nabung</th>
      <th scope="col">Tanggal</th>
      <th scope="col">Jumlah</th>
    </tr>
  </thead>
  <tbody class = "table-group-divider">
  <?php $i = 1; ?>
	  	<?php foreach ($tabung as $show) : ?>
	<tr>
		<th scope="row"> <?= $i; ?></th>
			<td>
				<a href="">Edit</a> / 
				<a href="" onclick = "return confirm('Apa Yakin Di hapus?');">Delete</a>
			</td>
			<!-- Main Php -->
			<td><?= $show['Nabung']; ?></td>
			<td><?= $show['Tanggal']; ?></td>
			<td><?= $show['Jumlah']; ?></td>
	</tr>
			<?php $i++; ?>
			<?php endforeach; ?>
  </tbody>
</table>

<pre>
 			<a class="btn btn-primary btn-sm" href="indexinput.php" role="button">Submit Nabung</a>
</pre>
</body>
</html>