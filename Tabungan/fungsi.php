<?php
// Koneksi
$conn = mysqli_connect('localhost','root','Kepo','keuangan');
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

    $n= htmlspecialchars($data['Nama']);
    $t= htmlspecialchars($data['Tanggal']);
    $j= htmlspecialchars($data['Jumlah']);
    // Query insert data
		$query = "INSERT INTO tabungan VALUES ('0','$t','$n','$j')";
		mysqli_query($conn,$query);
		return mysqli_affected_rows($conn);
}

function hapus($no) {
    global $conn;

    mysqli_query($conn, "DELETE FROM tabungan WHERE No = $no");
	return mysqli_affected_rows($conn);
}
