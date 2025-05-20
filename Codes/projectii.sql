-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 20, 2025 at 07:49 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projectii`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `fname` varchar(40) DEFAULT NULL,
  `lname` varchar(40) DEFAULT NULL,
  `uname` varchar(40) DEFAULT NULL,
  `pwd` varchar(40) DEFAULT NULL,
  `acc` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`fname`, `lname`, `uname`, `pwd`, `acc`) VALUES
('Prabin', 'Poudel', 'prabin123', '123456', 2),
('Kushal', 'Dhakal', 'kushal123', '123456', 1),
('rupa', 'bastakoti', 'rupa123', '123456', 2),
('Bibek', 'Adhikari', 'Bibek123', '123456', 2),
('', '', '', '', 1),
('Chaman', 'Dallakoti', 'chaman123', '123456', 1);

-- --------------------------------------------------------

--
-- Table structure for table `uploads`
--

CREATE TABLE `uploads` (
  `id` int(11) NOT NULL,
  `pname` varchar(30) DEFAULT NULL,
  `pprice` int(11) DEFAULT NULL,
  `serchar` int(11) DEFAULT NULL,
  `tax` varchar(10) DEFAULT NULL,
  `total` varchar(10) DEFAULT NULL,
  `pdes` varchar(1000) DEFAULT NULL,
  `fname` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `uploads`
--

INSERT INTO `uploads` (`id`, `pname`, `pprice`, `serchar`, `tax`, `total`, `pdes`, `fname`) VALUES
(19, 'Bla Bla Bla', 1234000, 100, '160420', '1394520', 'This is bla bla bla bla bla', '../files/QN1.png'),
(20, 'no name', 9890000, 234544, '1285700', '11410244', 'sdfgjlskdfjgls;dfjgs;ldfjg;sldfjgl;sdfjg', '../files/wallpaper.jpg'),
(21, 'Banana', 1200, 32, '156', '1388', 'This is the best buy bananna.', '../files/wallpaper.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `uploads`
--
ALTER TABLE `uploads`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `uploads`
--
ALTER TABLE `uploads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
