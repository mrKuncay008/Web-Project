<?php
    require 'fungsi.php';
    $no = $_GET["No"];
    if (hapus($no) > 0) {
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