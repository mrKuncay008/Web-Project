<?php 

	//koneksi
	$connect = mysqli_connect('localhost', 'id20450470_moneykuncay', '','id20450470_keuangan');

	function query($query) {

		global $connect;
		$select = mysqli_query($connect, $query);
		$rows = [];
		while ($tampil = mysqli_fetch_assoc($select)) {
			$rows[] = $tampil;
		}
		return $rows;
	}

	function add($data){

		global $connect;
		// ambil data dari tiap form
		$n= $data['Nama'];
		$j= $data['Jumlah'];
		$p= $data['Tanggal'];
	
		// Query insert data
		$query = "INSERT INTO uangmasuk VALUES ('0','$n','$j','$p')";
		mysqli_query($connect,$query);
		return mysqli_affected_rows($connect);
	}

	function add2($data2){

		global $connect;
		// ambil data dari tiap form
		$n2= $data2['Nama'];
		$j2= $data2['Jumlah'];
		$p2= $data2['Tanggal'];
	
		// Query insert data
		$query = "INSERT INTO uangkeluar VALUES ('0','$n2','$j2','$p2')";
		mysqli_query($connect,$query);
		
		// Cek apakah nama uang keluar adalah Celengan
    	
    	if($n2 == "Celengan") {
        	
        	// Jika iya, tambahkan juga ke file Tabungan
        	$query = "INSERT INTO tabungan VALUES ('0','$p2','$n2','$j2')";
        mysqli_query($connect,$query);
    	}		
		return mysqli_affected_rows($connect);
	}
	
	function debt($data3){

		global $connect;
		// ambil data dari tiap form
		$n3= htmlspecialchars($data3['Tanggal']);
		$j3= htmlspecialchars($data3['Nama']);
		$p3= htmlspecialchars($data3['Jumlah']);
	
		// Query insert data
		$query = "INSERT INTO utang VALUES ('0','$n3','$j3','$p3')";
		mysqli_query($connect,$query);
		return mysqli_affected_rows($connect); 
	}
	
	function tabung($data4){

		global $connect;
		// ambil data dari tiap form
		$n4= htmlspecialchars($data4['Tanggal']);
		$j4= htmlspecialchars($data4['Nama']);
		$p4= htmlspecialchars($data4['Jumlah']);
	
		// Query insert data
		$query = "INSERT INTO tabungan VALUES ('0','$n4','$j4','$p4')";
		mysqli_query($connect,$query);
		return mysqli_affected_rows($connect); 
	} 

    function del($no){

		global $connect;
		
		// query delete form id
		mysqli_query($connect, "DELETE FROM uangmasuk WHERE No = $no");
		return mysqli_affected_rows($connect);
	}

	function del2($No){

		global $connect;
		
		// query delete form id
		mysqli_query($connect, "DELETE FROM uangkeluar WHERE No = $No");
		
		// query delete Nama celengan
		mysqli_query($connect, "DELETE FROM tabungan WHERE Nama = 'Celengan'");
		
		return mysqli_affected_rows($connect);
	}
	
		function del3($No3) {

		global $connect;
		// query delete form id uatang
		mysqli_query($connect, "DELETE FROM utang WHERE No = $No3");
		return mysqli_affected_rows($connect);
	}
	
	function del4($No4) {

		global $connect;
		// query delete form id uatang
		mysqli_query($connect, "DELETE FROM tabungan WHERE No = $No4");
		return mysqli_affected_rows($connect);
	}
	
	// Edit file tabungang function

	function ubah($data4) {

		global $connect;
		$No4 = $data4['No'];
		$n4= htmlspecialchars($data4['Tanggal']);
		$j4= htmlspecialchars($data4['Nama']);
		$p4= htmlspecialchars($data4['Jumlah']);
		
		$query = 
			"UPDATE tabungan SET 
					Tanggal = '$n4',
					Nama = '$j4',
					Jumlah = '$p4'
			 WHERE No = $No4";
			mysqli_query($connect, $query);
			return mysqli_affected_rows($connect);
	}

 ?>