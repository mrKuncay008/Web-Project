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
      #but{
          max-width: 200px; /* Atur lebar maksimal tabel */
          margin: 10px 14%;
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
				<a type="button" class="btn btn-warning btn-sm" href="">Edit</a>
				<a type="button" class="btn btn-danger btn-sm" href="indexDel.php?No=<?= $show["No"]; ?>" onclick = "return confirm('Apa Yakin Di hapus?');">Delete</a>
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
  		<th colspan="4" style="text-align:right;">
        <button onclick="total()">Total</button>
    </th>
	  <td id="Total-col">
    <?php 
      $totalJumlah = 0;
        foreach ($tabung as $tampil) {
          $totalJumlah += $tampil['Jumlah'];
      }
    ?>
    </td>
  </tr>
  </tfoot>
</table>

<pre>
 			<a id="but" class="but btn btn-primary btn-sm" href="indexinput.php" role="button">Submit Nabung</a>
</pre>
    <marquee width="300px" hspace="20%" direction="left" scrollamount="7"> 
        <h1 class="teks">Semangat !!!</h1> 
    </marquee>
    
<script>
  function total() {
    var totalCol = document.getElementById("Total-col");
    totalCol.innerHTML = "Rp. <?=number_format($totalJumlah, 0,',','.'); ?>";
  }
</script>
</body>
</html>