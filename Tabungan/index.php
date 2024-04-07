<?php
  require 'fungsi.php';
  $tabung = query("SELECT * FROM tabel");
  $hutang = query("SELECT * FROM tabel2");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buku Tabungan Online</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <style>
      /*
      .table{
          max-width: 600px; //Atur lebar maksimal tabel 
          margin: 50px auto 0;
      }
      .btn{
          max-width: 50px; // Atur lebar maksimal tabel 
          margin: 20px 5%;
      }
      .teks {
        color: red;
        animation: glitch 1.0s infinite;
      }
       @keyframes glitch{
        65% {
          color: green;
          opacity: 1;
        }
        50% {
          color: yellowgreen;
          opacity: 0.50;
        }
      }*/
      body {
        background-image: url("futuristic-moon.jpg");
        background-size: cover;
      }
      .table{  
          position: relative;
          max-width: 600px; /* Atur lebar maksimal tabel */
          margin: 50px auto 0;
      }
      #but{
          max-width: 200px; /* Atur lebar maksimal tabel */
          margin: 10px 14%;
      }
      
      .teks {
        color: black;
        text-align: center;
        animation: glitch 1.0s infinite;
      }
      .teks2 {
        color: whitesmoke;
        text-shadow: 2px 3px black;
        font-weight: bold;
        text-align: center;
      }
       @keyframes glitch{
        65% {
          color: white;
          opacity: 1;
        }
        50% {
          color: red;
          opacity: 0.50;
        }
      }

    </style>
  </head>
<body>
<table class="table table-bordered border-black
table-dark table-striped">
  <h2 class = "teks2">
    Celengan
  </h2>
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
				<a class="btn btn-warning btn-sm" href="" >Edit</a> / 
				<a class="btn btn-danger btn-sm" href="indexDel.php?No=<?= $show["No"]; ?>" onclick = "return confirm('Apa Yakin Di hapus?');">Delete</a>
			</td>
			<!-- Main Php -->
			<td><?= $show['Nabung']; ?></td>
			<td><?= $show['Tanggal']; ?></td>
			<td><?= $show['Jumlah']; ?></td>
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
            foreach ($tabung as $show) {
              $total += $show['Jumlah'];
            }
            echo "Rp.".number_format($total,0,',','.');
           ?> 
      </td>
    </tr>
  </tfoot>
</table>

<pre>
 			<a class="btn btn-primary btn-sm" href="indexinput.php" role="button">Submit Nabung</a>
</pre>
 
 <marquee width="300px" hspace="10%" direction="left" scrollamount="7"> 
    <h1 class="teks">Semangat !!!</h1> 
  </marquee>
  
<!-- Hutang  -->

<h2 class = "teks2">
  Hutang 
</h2>
  <table class="table table-bordered border-black
table-dark table-striped">
  <thead class ="table-light">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Update</th>
      <th scope="col">Hutang</th>
      <th scope="col">Tanggal</th>
      <th scope="col">Jumlah</th>
    </tr>
  </thead>
  <tbody class = "table-group-divider">
  <?php $i = 1; ?>
	  	<?php foreach ($hutang as $show2) : ?>
	<tr>
		<th scope="row"> <?= $i; ?></th>
			<td>
				<a class="btn btn-warning btn-sm" href="" >Edit</a> / 
				<a class="btn btn-danger btn-sm" href="indexDel2.php?No=<?= $show2["No"]; ?>" onclick = "return confirm('Apa Yakin Di hapus?');">Delete</a>
			</td>
			<!-- Main Php -->
			<td><?= $show2['Hutang']; ?></td>
			<td><?= $show2['Tanggal']; ?></td>
			<td><?= $show2['Jumlah']; ?></td>
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
            foreach ($hutang as $show2) {
              $total += $show2['Jumlah'];
            }
            echo "Rp.".number_format($total,0,',','.');
           ?> 
      </td>
    </tr>
  </tfoot>
</table>
<pre>
 			<a class="btn btn-danger btn-sm" href="indexHutang.php" role="button">Submit Hutang</a>
</pre>
</body>
</html>