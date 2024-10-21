-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 21, 2024 at 07:14 AM
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
-- Database: `mis`
--

-- --------------------------------------------------------

--
-- Table structure for table `misdata`
--

CREATE TABLE `misdata` (
  `fname` varchar(40) DEFAULT NULL,
  `lname` varchar(40) DEFAULT NULL,
  `uname` varchar(40) DEFAULT NULL,
  `pwd` varchar(40) DEFAULT NULL,
  `acc` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `misdata`
--

INSERT INTO `misdata` (`fname`, `lname`, `uname`, `pwd`, `acc`) VALUES
('Prabin', 'Poudel', 'prabin123', '123456', 2),
('Kushal', 'Dhakal', 'kushal123', '123456', 1),
('rupa', 'bastakoti', 'rupa123', '123456', 2);

-- --------------------------------------------------------

--
-- Table structure for table `uploads`
--

CREATE TABLE `uploads` (
  `pname` varchar(30) DEFAULT NULL,
  `pprice` int(11) DEFAULT NULL,
  `pdes` varchar(1000) DEFAULT NULL,
  `fname` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `uploads`
--

INSERT INTO `uploads` (`pname`, `pprice`, `pdes`, `fname`) VALUES
('pen', 2400, 'this is zero gravity pen', 'files/youtubelogopng.png'),
('sugar', 230, 'This is whole grain sugar. ', 'files/istockphoto-1371245517-612x612.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
