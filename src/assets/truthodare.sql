CREATE TABLE IF NOT EXISTS `challenges` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `dare_id` int(10) NOT NULL,
  `challenge` varchar(191) NOT NULL
);
INSERT OR IGNORE INTO `challenges` (`id`, `dare_id`, `challenge`) VALUES
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
CREATE TABLE IF NOT EXISTS `dares` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `title` varchar(191) NOT NULL DEFAULT 'Dare'
);
INSERT OR IGNORE INTO `dares` (`id`, `title`) VALUES
	(1, 'English'),
	(2, 'Chinese');
CREATE TABLE IF NOT EXISTS `questions` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `truth_id` int(10) NOT NULL,
  `question` varchar(191) NOT NULL
);
INSERT OR IGNORE INTO `questions` (`id`, `truth_id`, `question`) VALUES
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
CREATE TABLE IF NOT EXISTS `settings` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `num_of_players` int(10) NOT NULL DEFAULT '6',
  `truth_list` int(10) NOT NULL DEFAULT '0',
  `dare_list` int(10) NOT NULL DEFAULT '0'
);
INSERT OR IGNORE INTO `settings` (`id`, `num_of_players`, `truth_list`, `dare_list`) VALUES
	(1, 6, 0, 0);
CREATE TABLE IF NOT EXISTS `truths` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `title` varchar(191) NOT NULL DEFAULT 'Truth'
);
INSERT OR IGNORE INTO `truths` (`id`, `title`) VALUES
	(1, 'English'),
	(2, 'Chinese');
