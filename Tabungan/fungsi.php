<?php
// Koneksi
$conn = mysqli_connect('localhost','root','','Tabungan');
function query($query) {
    global $conn;
    $select = mysqli_query($conn, $query);
    $rows = [];
    while($show = mysqli_fetch_assoc($select)) {
        $rows[] = $show;
    }
    return $rows;
}

function tabung($data) {
    global $conn;

    $n= htmlspecialchars($data['Nabung']);
    $t= htmlspecialchars($data['Tanggal']);
    $j= htmlspecialchars($data['Jumlah']);
    // Query insert data
		$query = "INSERT INTO tabel VALUES ('0','$n','$t','$j')";
		mysqli_query($conn,$query);
		return mysqli_affected_rows($conn); 
}

function hapus($no) {
    global $conn;

    mysqli_query($conn, "DELETE FROM tabel WHERE No = $no");
	return mysqli_affected_rows($conn);
}