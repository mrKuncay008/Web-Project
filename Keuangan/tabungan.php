<?php 
	require 'fungsi.php';
	$tabung = query("SELECT * FROM tabungan");
	
 ?>

 <!DOCTYPE html>
 <html>
 <head>
 	<meta charset="utf-8">
 	<meta name="viewport" content="width=device-width, initial-scale=1">
 	 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
	
	<style>
		
		body {
			background-color: darkred;
		}

		.last {
			background-color: white;
			font-weight: bold;
			text-align: center;
			position: relative;
		}
		.tex {
			font-size: small;
			font-weight: bold;
		}

	</style>


 	<link rel="shotcut icon"  href="">
 	<title>Management Tabungan</title>
 </head>
 <body>

<h2 style="color:whitesmoke; font-weight: bold;">Tabungan</h2>

<table class="table table-light" style="position: relative;">
  <thead class="table-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Update</th>
      <th scope="col">Tanggal</th>
      <th scope="col">Nama</th>
      <th scope="col">Jumlah</th>
    </tr>
  </thead>
  <tbody>
   <?php $i = 1; ?>
	  	<?php foreach ($tabung as $tampil) : ?>
	<tr>
		<th scope="row"> <?= $i; ?></th>
			<td>
				<a href="tabungedit.php?No=<?= $tampil["No"]; ?>">Edit</a> / 
					<a href="tabungdel.php?No=<?= $tampil["No"]; ?>" onclick = "return confirm('Apa Yakin Di hapus?');">Delete</a>
				</td>

			<!-- Main Php -->
			<td><?= $tampil["Tanggal"]; ?></td>
			<td><?= $tampil["Nama"]; ?></td>
			<td><?= $tampil["Jumlah"]; ?></td>
	</tr>
			<?php $i++; ?>
			<?php endforeach; ?>
  </tbody>
  <tfoot>
  	<tr>
  		<th colspan="4" style="text-align:right;">Total</th>
	  		<td>
	  			<?php 
	  				$total = 0;
	  				foreach ($tabung as $tampil) {
	  					$total += $tampil['Jumlah'];
	  				}
	  				echo "Rp.".number_format($total,0,',','.');
	  			 ?>	
  		</td>
  	</tr>
  </tfoot>
</table>
 	<pre>
 			<a class="btn btn-primary btn-sm" href="tabunginput.php" role="button">Submit Nabung</a>
 			<a class="btn btn-outline-light btn-sm" href="index.php" role="button" style="font-weight:bold;">KEMBALI</a>

 	</pre>
 </body>
 </html>