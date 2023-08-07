<?php
// memanggil file fungsi
	require 'fungsi.php';
	$uang = query("SELECT * FROM uangmasuk");
	$uang2 = query("SELECT * FROM uangkeluar");
	$utang = query("SELECT * FROM utang");
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
	
	<style>
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

	<link href='logo1.png' rel='shortcut icon'>
	<title>Table Keuangan MR.Kuncay</title>
</head>
<body style="background-color:#494949">
	<h2 style="color:white; font-weight: bold;">Uang Masuk</h2>

<table class="table table-primary" style="position: relative;">
  <thead class="table-light">
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
	  	<?php foreach ($uang as $tampil) : ?>
	<tr>
		<th scope="row"> <?= $i; ?></th>
			<td>
				<a href="">Edit</a> / 
					<a href="del.php?No=<?= $tampil["No"]; ?>" onclick = "return confirm('Apa Yakin Di hapus?');">Delete</a>
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
	  				foreach ($uang as $tampil) {
	  					$total += $tampil['Jumlah'];
	  				}
	  				echo "Rp.".number_format($total,0,',','.');
	  			 ?>	
  		</td>
  	</tr>
  </tfoot>
</table>
 	<pre>
 			<a class="btn btn-primary btn-sm" href="keuangan.php" role="button">Submit Pemasukan</a>

 	</pre>

	<h2 style="color:white; font-weight: bold;">Uang Keluar</h2>
	<table class="table table-light" style="position: relative;">
  <thead class="table-danger">
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
	  	<?php foreach ($uang2 as $tampil) : ?> <tr>
			<th scope="row"> <?= $i; ?></th>
	  	<td>
	  		<a href="">Edit</a> / 
	  			
	  			<a href="del2.php?No=<?= $tampil["No"]; ?>" onclick = "return confirm('Apa Yakin Di hapus?');">Delete</a>
	  	</td>
			
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
	  				foreach ($uang2 as $tampil) {
	  					$total += $tampil['Jumlah'];
	  				}
	  				echo "Rp.".number_format($total,0,',','.');
	  			 ?>	
  		</td>
  	</tr>
  </tfoot>
</table>
<?php 
	
	$total_masuk = 0;
	foreach ($uang as $tampil) {
		$total_masuk += $tampil['Jumlah'];
	}

	$total_keluar = 0;
	foreach ($uang2 as $tampil) {
		$total_keluar += $tampil['Jumlah'];
	}

	$saldo =  $total_masuk - $total_keluar;

	// echo "Sisa Akhir: Rp.".number_format($saldo,0,',','.');

 ?>
	<pre>			<a class="btn btn-primary btn-sm" href="keuangan2.php" role="button">Submit Pengeluaran</a>

	</pre>

 <div class="last">
 		<h1 class="tex">Sisa akhir
 		<h2 id="sisa"> </h2>
 		</h1>

 		<script>
 			var total_masuk = <?= $total_masuk ?>;
 			var total_keluar = <?= $total_keluar ?>;
 			var saldo = total_masuk - total_keluar;
 			var sisa = document.getElementById('sisa');

 			sisa.innerHTML = 'Rp.' + saldo.toLocaleString('id-ID');
 		</script>
 </div>
 
 <pre>
 		<!--utang -->
 	</pre>

 	<h2 style="color:white; font-weight: bold;">Utang Piutang</h2>
 		<table class="table table-light" style="position: relative;">
  		<thead class="table-warning">
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
	  	<?php foreach ($utang as $tampil) : ?>
	<tr>
		<th scope="row"> <?= $i; ?></th>
			<td>
				<a href="">Edit</a> / 
					<a href="utangdel.php?No=<?= $tampil["No"]; ?>" onclick = "return confirm('Apa Yakin Di hapus?');">Delete</a>
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
	  				foreach ($utang as $tampil) {
	  					$total += $tampil['Jumlah'];
	  				}
	  				echo "Rp.".number_format($total,0,',','.');
	  			 ?>	
  		</td>
  	</tr>
  </tfoot>
</table>
 	<pre>
 			<a class="btn btn-primary btn-sm" href="utang.php" role="button">Submit Utang</a>

 	</pre>
 	
 	<a href="tabungan.php" class="link-info sticky-lg-top" style="font-weight: bold;">Tabungan</a>
</body>
</html>