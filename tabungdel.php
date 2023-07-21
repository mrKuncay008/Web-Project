<?php 

	require 'fungsi.php';
	$No4 = $_GET['No'];

	if (del4($No4) > 0) {
		echo "

				<script>
					alert('Data Taubungan is Succsess Delete');
					document.location.href = 'tabungan.php';
				</script>
			";
		} else {

			echo "

				<script>
					alert('Data Failed to Delete');
					document.location.href = 'tabungan.php';
				</script>";
		}		

 ?>