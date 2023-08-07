<?php 
	
	require 'fungsi.php';
	$no = $_GET['No'];

	if (del($no) > 0) {
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
