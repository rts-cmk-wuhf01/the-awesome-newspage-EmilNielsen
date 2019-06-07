-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2019 at 01:18 PM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `the_awesome_newspage`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `ID` int(11) NOT NULL,
  `article_title` varchar(128) NOT NULL,
  `article_text` varchar(3072) NOT NULL,
  `article_image` varchar(128) NOT NULL,
  `article_postdate` datetime NOT NULL,
  `article_likes` int(11) NOT NULL,
  `is_featured` tinyint(4) NOT NULL,
  `fk_category_id` int(11) NOT NULL,
  `fk_author_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `ID` int(11) NOT NULL,
  `author_name` varchar(32) NOT NULL,
  `author_image` varchar(128) NOT NULL,
  `author_title` varchar(32) NOT NULL,
  `about` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`ID`, `author_name`, `author_image`, `author_title`, `about`) VALUES
(1, 'David Shield', 'dShield.jpg', 'Senior Editor', 'David Shield is a member of the editorial staff here at Awesome Newspage. He usually writes about news in the tech industry'),
(2, 'Melissa Shield', 'mShield.png', 'Editor', 'Melissa Shield has a background in hardware development for Computers. She usually writes about news in the tech industry');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `ID` int(11) NOT NULL,
  `category_title` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`ID`, `category_title`) VALUES
(1, 'Politics'),
(2, 'Fashion'),
(3, 'Business'),
(4, 'Breaking News'),
(5, 'Technology'),
(6, 'Health'),
(7, 'Travel'),
(8, 'Food/Drink'),
(9, 'Sports'),
(10, 'Vehicles'),
(11, 'Hotels'),
(12, 'Art'),
(13, 'Luxury');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `ID` int(11) NOT NULL,
  `comment_postdate` datetime NOT NULL,
  `comment_text` varchar(1024) NOT NULL,
  `fk_user_id` int(11) NOT NULL,
  `fk_article_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `site_info`
--

CREATE TABLE `site_info` (
  `ID` int(11) NOT NULL,
  `info_title` varchar(128) NOT NULL,
  `info_email` varchar(64) NOT NULL,
  `info_phone` varchar(32) NOT NULL,
  `info_url` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `site_info`
--

INSERT INTO `site_info` (`ID`, `info_title`, `info_email`, `info_phone`, `info_url`) VALUES
(1, 'The Awesome Newspage', 'awesomenewspage@newspage.com', '+43 5278 2883 884', 'www.yoursitename.com');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `user_name` varchar(32) NOT NULL,
  `user_email` varchar(64) NOT NULL,
  `user_password` varchar(64) NOT NULL,
  `user_image` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `user_name`, `user_email`, `user_password`, `user_image`) VALUES
(1, 'Melli', 'mellishield@mail.com', 'shieldzar3theStrongest', 'youngShield.png');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `ID` int(11) NOT NULL,
  `video_url` varchar(128) NOT NULL,
  `video_image` varchar(128) NOT NULL,
  `video_postdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`ID`, `video_url`, `video_image`, `video_postdate`) VALUES
(1, 'https://www.youtube.com/watch?v=dMBwLyyqcBk', 'New Anime Plot', '2019-06-07 12:54:10'),
(2, 'https://www.youtube.com/watch?v=fkhEsYcxdBo', 'kitchenGun.png', '2019-06-06 11:15:35'),
(3, 'https://www.youtube.com/watch?v=PdLv10bVydM', 'legendsNeverDie.png', '2017-11-02 09:33:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `site_info`
--
ALTER TABLE `site_info`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `site_info`
--
ALTER TABLE `site_info`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
