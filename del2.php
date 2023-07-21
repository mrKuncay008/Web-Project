<?php 
	
	require 'fungsi.php';
	$No = $_GET['No'];

	if (del2($No) > 0) {
			echo "

				<script>
					alert('Data Pemasukan is Succsess Delete');
					document.location.href = 'index.php';
				</script>
			";
		} else {

			echo "

				<script>
					alert('Data Failed to Delete');
					document.location.href = 'index.php';
				</script>";
		}
 ?>