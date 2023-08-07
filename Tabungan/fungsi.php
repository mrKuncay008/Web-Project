<?php
// Koneksi
$conn = mysqli_connect('localhost','root','','Tabungan');
function query($query) {
    global $conn;
    $select = mysqli_query($conn, $query);
    $rows = [];
    while($show = mysqli_fetch_assoc($select)) {
        $rows = $show;
    }
    return $rows;
}

function Nabung($data) {
    global $conn;

    $n= htmlspecialchars($data['Nabung']);
    $t= htmlspecialchars($data['Tanggal']);
    $j= htmlspecialchars($data['Jumlah']);
}