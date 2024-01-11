-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 11, 2024 at 02:14 PM
-- Server version: 10.5.20-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `keuangan`
--

-- --------------------------------------------------------

--
-- Table structure for table `tabungan`
--

CREATE TABLE `tabungan` (
  `No` int(11) NOT NULL,
  `Tanggal` date DEFAULT NULL,
  `Nama` varchar(100) DEFAULT NULL,
  `Jumlah` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tabungan`
--

INSERT INTO `tabungan` (`No`, `Tanggal`, `Nama`, `Jumlah`) VALUES
(4, '2023-03-17', '		  Saham', 0);

-- --------------------------------------------------------

--
-- Table structure for table `uangkeluar`
--

CREATE TABLE `uangkeluar` (
  `No` int(11) NOT NULL,
  `Nama` varchar(100) DEFAULT NULL,
  `Jumlah` int(11) DEFAULT NULL,
  `Tanggal` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `uangkeluar`
--

INSERT INTO `uangkeluar` (`No`, `Nama`, `Jumlah`, `Tanggal`) VALUES
(124, 'laptop', 1550000, '2023-04-29'),
(126, 'mbayu', 90000, '2023-04-29'),
(127, 'Mb ayu', 40000, '2023-05-02'),
(128, 'makan', 18500, '2023-05-02'),
(129, 'rokok', 19000, '2023-05-02'),
(130, 'bapak', 350000, '2023-05-02'),
(131, 'air mie gelas', 10000, '2023-05-02'),
(132, 'rokok', 19000, '2023-05-03'),
(133, 'makan ', 18000, '2023-05-03'),
(134, 'roti', 25000, '2023-05-03'),
(135, 'Celengan', 25000, '2023-05-02'),
(136, 'Celengan', 50000, '2023-05-03'),
(137, 'bensin', 25000, '2023-05-03'),
(138, 'Celengan', 75000, '2023-05-04'),
(139, 'Macam macam', 319276, '2023-05-06'),
(140, 'Celengan', 25000, '2023-05-07'),
(141, 'Pengeluaran macam macam', 835339, '2023-05-10'),
(142, 'Celengan', 150000, '2023-05-10'),
(143, 'Nabrak', 500000, '2023-05-10'),
(144, 'Polisi', 20000, '2023-05-10'),
(145, 'Nasi kuning', 12000, '2023-05-10'),
(146, 'Rokok', 39600, '2023-05-10'),
(147, 'rokok', 21000, '2023-05-11'),
(148, 'Nasi kuning', 12000, '2023-05-11'),
(149, 'Makan', 19500, '2023-05-11'),
(150, 'air', 5000, '2023-05-11'),
(151, 'pecel lele', 16000, '2023-05-11'),
(152, 'rokok', 19900, '2023-05-12'),
(153, 'Makan', 16500, '2023-05-12'),
(154, 'air', 5000, '2023-05-12'),
(155, 'Makan', 40000, '2023-05-12'),
(156, 'Celengan', 30000, '2023-05-12'),
(157, 'Makan', 16000, '2023-05-13'),
(158, 'Rokok', 26000, '2023-05-13'),
(159, 'Celengan', 50000, '2023-05-15'),
(160, 'Rokok', 19000, '2023-05-15'),
(161, 'Makan', 22000, '2023-05-15'),
(162, 'Cuci motor', 16000, '2023-05-15'),
(163, 'Rokok', 19000, '2023-05-16'),
(164, 'Makan', 20000, '2023-05-16'),
(165, 'Ayam', 25000, '2023-05-16'),
(170, 'Bubur', 17000, '2023-05-17'),
(171, 'Susu', 5000, '2023-05-17'),
(172, 'Makan', 20000, '2023-05-17'),
(173, 'Bensin', 12000, '2023-05-17'),
(174, 'roko sosis', 7000, '2023-05-17'),
(175, 'Kuliah', 650000, '2023-05-17'),
(177, 'Cudel dan anu', 145000, '2023-04-18'),
(178, 'Makan', 15000, '2023-04-18'),
(179, 'roko', 13000, '2023-05-20'),
(180, 'susu kopi', 8000, '2023-05-20'),
(181, 'makan', 15000, '2023-05-20'),
(182, 'Celengan', 45000, '2023-05-25'),
(183, 'Celengan', 25000, '2023-05-26'),
(184, 'Celengan', 10000, '2023-05-27');

-- --------------------------------------------------------

--
-- Table structure for table `uangmasuk`
--

CREATE TABLE `uangmasuk` (
  `No` int(11) NOT NULL,
  `Nama` varchar(100) DEFAULT NULL,
  `Jumlah` int(11) DEFAULT NULL,
  `Tanggal` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `uangmasuk`
--

INSERT INTO `uangmasuk` (`No`, `Nama`, `Jumlah`, `Tanggal`) VALUES
(40, 'Gajian', 3450000, '2023-04-29'),
(41, 'bandara', 50000, '2023-05-02'),
(42, 'Sterofoam', 45000, '2023-05-04'),
(43, 'Bandara', 50000, '2023-05-05'),
(44, 'Mala', 352000, '2023-05-07'),
(45, 'Mala', 404000, '2023-05-10'),
(46, 'mala', 65000, '2023-05-11'),
(47, 'mala', 400000, '2023-05-11'),
(48, 'Sterofoam', 45000, '2023-05-16'),
(49, 'Shopee', 750000, '2023-05-20'),
(50, 'Bintang ekspres', 30000, '2023-05-25'),
(51, 'Sterofoam', 45000, '2023-05-25');

-- --------------------------------------------------------

--
-- Table structure for table `utang`
--

CREATE TABLE `utang` (
  `No` int(11) NOT NULL,
  `Tanggal` date DEFAULT NULL,
  `Nama` varchar(100) DEFAULT NULL,
  `Jumlah` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `utang`
--

INSERT INTO `utang` (`No`, `Tanggal`, `Nama`, `Jumlah`) VALUES
(15, '2023-04-29', 'Shopi pinjam', 289000),
(18, '2023-05-20', 'Shopee', 750000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tabungan`
--
ALTER TABLE `tabungan`
  ADD PRIMARY KEY (`No`);

--
-- Indexes for table `uangkeluar`
--
ALTER TABLE `uangkeluar`
  ADD PRIMARY KEY (`No`);

--
-- Indexes for table `uangmasuk`
--
ALTER TABLE `uangmasuk`
  ADD PRIMARY KEY (`No`);

--
-- Indexes for table `utang`
--
ALTER TABLE `utang`
  ADD PRIMARY KEY (`No`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tabungan`
--
ALTER TABLE `tabungan`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `uangkeluar`
--
ALTER TABLE `uangkeluar`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=185;

--
-- AUTO_INCREMENT for table `uangmasuk`
--
ALTER TABLE `uangmasuk`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `utang`
--
ALTER TABLE `utang`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
