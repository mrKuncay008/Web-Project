<?php
    require 'fungsi.php';
    $no2 = $_GET["No"];
		if (hapus2($no2) > 0) {
		echo "

				<script>
					alert('Data Succsess Delete');
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