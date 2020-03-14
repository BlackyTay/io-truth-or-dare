-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.28 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table truthodare.challenges
CREATE TABLE IF NOT EXISTS `challenges` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `dare_id` int(10) unsigned NOT NULL,
  `challenge` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dare_id` (`dare_id`),
  CONSTRAINT `dare_id` FOREIGN KEY (`dare_id`) REFERENCES `dares` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table truthodare.challenges: ~10 rows (approximately)
DELETE FROM `challenges`;
/*!40000 ALTER TABLE `challenges` DISABLE KEYS */;
INSERT INTO `challenges` (`id`, `dare_id`, `challenge`) VALUES
	(1, 1, 'CE1'),
	(2, 1, 'CE2'),
	(3, 1, 'CE3'),
	(4, 1, 'CE4'),
	(5, 1, 'CE5'),
	(6, 2, 'CC1'),
	(7, 2, 'CC2'),
	(8, 2, 'CC3'),
	(9, 2, 'CC4'),
	(10, 2, 'CC5');
/*!40000 ALTER TABLE `challenges` ENABLE KEYS */;

-- Dumping structure for table truthodare.dares
CREATE TABLE IF NOT EXISTS `dares` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL DEFAULT 'Dare',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table truthodare.dares: ~2 rows (approximately)
DELETE FROM `dares`;
/*!40000 ALTER TABLE `dares` DISABLE KEYS */;
INSERT INTO `dares` (`id`, `title`) VALUES
	(1, 'English'),
	(2, 'Chinese');
/*!40000 ALTER TABLE `dares` ENABLE KEYS */;

-- Dumping structure for table truthodare.questions
CREATE TABLE IF NOT EXISTS `questions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `truth_id` int(10) unsigned NOT NULL,
  `question` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `truth_id` (`truth_id`),
  CONSTRAINT `truth_id` FOREIGN KEY (`truth_id`) REFERENCES `truths` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table truthodare.questions: ~10 rows (approximately)
DELETE FROM `questions`;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` (`id`, `truth_id`, `question`) VALUES
	(1, 1, 'QE1'),
	(2, 1, 'QE2'),
	(3, 1, 'QE3'),
	(4, 1, 'QE4'),
	(5, 1, 'QE5'),
	(6, 2, 'QC1'),
	(7, 2, 'QC2'),
	(8, 2, 'QC3'),
	(9, 2, 'QC4'),
	(10, 2, 'QC5');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;

-- Dumping structure for table truthodare.settings
CREATE TABLE IF NOT EXISTS `settings` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `num_of_players` int(10) unsigned NOT NULL DEFAULT '6',
  `truth_list` int(10) unsigned DEFAULT NULL,
  `dare_list` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `truth_list` (`truth_list`),
  KEY `dare_list` (`dare_list`),
  CONSTRAINT `dare_list` FOREIGN KEY (`dare_list`) REFERENCES `dares` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `truth_list` FOREIGN KEY (`truth_list`) REFERENCES `truths` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table truthodare.settings: ~0 rows (approximately)
DELETE FROM `settings`;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
INSERT INTO `settings` (`id`, `num_of_players`, `truth_list`, `dare_list`) VALUES
	(1, 6, NULL, NULL);
/*!40000 ALTER TABLE `settings` ENABLE KEYS */;

-- Dumping structure for table truthodare.truths
CREATE TABLE IF NOT EXISTS `truths` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL DEFAULT 'Truth',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table truthodare.truths: ~2 rows (approximately)
DELETE FROM `truths`;
/*!40000 ALTER TABLE `truths` DISABLE KEYS */;
INSERT INTO `truths` (`id`, `title`) VALUES
	(1, 'English'),
	(2, 'Chinese');
/*!40000 ALTER TABLE `truths` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
