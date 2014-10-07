CREATE DATABASE  IF NOT EXISTS `tienda` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `tienda`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: tienda
-- ------------------------------------------------------
-- Server version	5.6.12-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `arma`
--

DROP TABLE IF EXISTS `arma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `arma` (
  `SERIE_ARMA` varchar(12) NOT NULL,
  `DESCRIPCION` varchar(150) DEFAULT NULL,
  `CARACTERISTICAS` varchar(150) DEFAULT NULL,
  `MARCA` varchar(65) DEFAULT NULL,
  `PRECIO` decimal(6,2) DEFAULT NULL,
  `MODELO` varchar(65) DEFAULT NULL,
  `CATEGORIA` int(11) DEFAULT NULL,
  `AUTORIZACION` int(11) DEFAULT NULL,
  `URL_IMAGEN` varchar(100) DEFAULT NULL,
  `FE_INGRESO` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ESTADO` int(1) DEFAULT '1',
  PRIMARY KEY (`SERIE_ARMA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `arma`
--

LOCK TABLES `arma` WRITE;
/*!40000 ALTER TABLE `arma` DISABLE KEYS */;
INSERT INTO `arma` VALUES ('10103220','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','RUGER ',2235.00,'503-R-KMK512',1,4,'503-R-KMK512','2014-10-04 20:43:55',2),('10103221','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','RUGER ',2235.00,'503-R-KMK512',1,4,'503-R-KMK512','2014-10-04 20:43:55',2),('10103222','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','RUGER ',2235.00,'503-R-KMK512',1,4,'503-R-KMK512','2014-10-04 20:43:55',2),('10103223','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','RUGER ',2235.00,'503-R-KMK512',1,4,'503-R-KMK512','2014-10-04 20:43:55',2),('10103224','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','RUGER ',2235.00,'503-R-KMK512',1,4,'503-R-KMK512','2014-10-04 20:43:55',2),('10103225','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','RUGER ',2235.00,'503-R-KMK512',1,4,'503-R-KMK512','2014-10-04 20:43:55',2),('10103226','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','RUGER ',2235.00,'503-R-KMK512',1,4,'503-R-KMK512','2014-10-04 20:43:55',2),('10103227','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','RUGER ',2235.00,'503-R-KMK512',1,4,'503-R-KMK512','2014-10-04 20:43:55',1),('10103228','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','RUGER ',2235.00,'503-R-KMK512',1,4,'503-R-KMK512','2014-10-04 20:43:55',1),('10103229','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','Pistola RUGER KMK-512, Target Mk III, 10103 22 LR acero inoxidable 10 tiros cañón de 5.5\", 02 cacerinas y maletín.','RUGER ',2235.00,'503-R-KMK512',1,4,'503-R-KMK512','2014-10-04 20:43:55',1),('12500311','Pistola TAURUS PT-25 (1-250031) 25 Auto pavonado-m ','Pistola TAURUS PT-25 (1-250031) 25 Auto pavonado-madera 09 tiros cañón de 2.75, doble acción.','TAURUS',1235.00,'503-TAU-PT25',1,4,'503-TAU-PT25','2014-10-04 20:43:54',2),('12500312','Pistola TAURUS PT-25 (1-250031) 25 Auto pavonado-m ','Pistola TAURUS PT-25 (1-250031) 25 Auto pavonado-madera 09 tiros cañón de 2.75, doble acción.','TAURUS',1235.00,'503-TAU-PT25',1,4,'503-TAU-PT25','2014-10-04 20:43:54',2),('12500313','Pistola TAURUS PT-25 (1-250031) 25 Auto pavonado-m ','Pistola TAURUS PT-25 (1-250031) 25 Auto pavonado-madera 09 tiros cañón de 2.75, doble acción.','TAURUS',1235.00,'503-TAU-PT25',1,4,'503-TAU-PT25','2014-10-04 20:43:54',1),('12500314','Pistola TAURUS PT-25 (1-250031) 25 Auto pavonado-m ','Pistola TAURUS PT-25 (1-250031) 25 Auto pavonado-madera 09 tiros cañón de 2.75, doble acción.','TAURUS',1235.00,'503-TAU-PT25',1,4,'503-TAU-PT25','2014-10-04 20:43:55',1),('23813800','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','SIG SAUER',3300.00,'503-P238-EQ',1,4,'503-P238-EQ','2014-10-04 20:43:55',2),('23813801','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','SIG SAUER',3300.00,'503-P238-EQ',1,4,'503-P238-EQ','2014-10-04 20:43:55',2),('23813802','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','SIG SAUER',3300.00,'503-P238-EQ',1,4,'503-P238-EQ','2014-10-04 20:43:55',2),('23813803','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','SIG SAUER',3300.00,'503-P238-EQ',1,4,'503-P238-EQ','2014-10-04 20:43:56',2),('23813804','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','SIG SAUER',3300.00,'503-P238-EQ',1,4,'503-P238-EQ','2014-10-04 20:43:56',1),('23813805','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','SIG SAUER',3300.00,'503-P238-EQ',1,4,'503-P238-EQ','2014-10-04 20:43:56',1),('23813806','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','SIG SAUER',3300.00,'503-P238-EQ',1,4,'503-P238-EQ','2014-10-04 20:43:56',1),('23813807','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','SIG SAUER',3300.00,'503-P238-EQ',1,4,'503-P238-EQ','2014-10-04 20:43:56',1),('23813808','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','SIG SAUER',3300.00,'503-P238-EQ',1,4,'503-P238-EQ','2014-10-04 20:43:56',1),('23813809','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','Pistola SIG SAUER P238 (Equinox) (238-380-EQ) 380 AUTO inoxidable-dos tonos 06 tiros cañón de 2.7\", 01 cacerina.','SIG SAUER',3300.00,'503-P238-EQ',1,4,'503-P238-EQ','2014-10-04 20:43:56',1),('27728841','Pistola COLT Government-1911 A1 (2772884) 22 LR pa ','Pistola COLT Government-1911 A1 (2772884) 22 LR pavonada 12 tiros cañón 5\", 1 cacerina, maletín.','COLT ',2100.00,'503-COLT1911',1,4,'503-COLT1911','2014-10-04 20:43:53',2),('27728842','Pistola COLT Government-1911 A1 (2772884) 22 LR pa ','Pistola COLT Government-1911 A1 (2772884) 22 LR pavonada 12 tiros cañón 5\", 1 cacerina, maletín.','COLT ',2100.00,'503-COLT1911',1,4,'503-COLT1911','2014-10-04 20:43:54',2),('27728843','Pistola COLT Government-1911 A1 (2772884) 22 LR pa ','Pistola COLT Government-1911 A1 (2772884) 22 LR pavonada 12 tiros cañón 5\", 1 cacerina, maletín.','COLT ',2100.00,'503-COLT1911',1,4,'503-COLT1911','2014-10-04 20:43:54',2),('27728844','Pistola COLT Government-1911 A1 (2772884) 22 LR pa ','Pistola COLT Government-1911 A1 (2772884) 22 LR pavonada 12 tiros cañón 5\", 1 cacerina, maletín.','COLT ',2100.00,'503-COLT1911',1,4,'503-COLT1911','2014-10-04 20:43:54',2),('27728845','Pistola COLT Government-1911 A1 (2772884) 22 LR pa ','Pistola COLT Government-1911 A1 (2772884) 22 LR pavonada 12 tiros cañón 5\", 1 cacerina, maletín.','COLT ',2100.00,'503-COLT1911',1,4,'503-COLT1911','2014-10-04 20:43:54',2);
/*!40000 ALTER TABLE `arma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ci_sessions`
--

DROP TABLE IF EXISTS `ci_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ci_sessions` (
  `session_id` varchar(40) COLLATE utf8_bin NOT NULL DEFAULT '0',
  `ip_address` varchar(16) COLLATE utf8_bin NOT NULL DEFAULT '0',
  `user_agent` varchar(150) COLLATE utf8_bin NOT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ci_sessions`
--

LOCK TABLES `ci_sessions` WRITE;
/*!40000 ALTER TABLE `ci_sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `ci_sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_attempts`
--

DROP TABLE IF EXISTS `login_attempts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login_attempts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(40) COLLATE utf8_bin NOT NULL,
  `login` varchar(50) COLLATE utf8_bin NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_attempts`
--

LOCK TABLES `login_attempts` WRITE;
/*!40000 ALTER TABLE `login_attempts` DISABLE KEYS */;
/*!40000 ALTER TABLE `login_attempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_autologin`
--

DROP TABLE IF EXISTS `user_autologin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_autologin` (
  `key_id` char(32) COLLATE utf8_bin NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `user_agent` varchar(150) COLLATE utf8_bin NOT NULL,
  `last_ip` varchar(40) COLLATE utf8_bin NOT NULL,
  `last_login` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`key_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_autologin`
--

LOCK TABLES `user_autologin` WRITE;
/*!40000 ALTER TABLE `user_autologin` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_autologin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profiles`
--

DROP TABLE IF EXISTS `user_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_profiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `country` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `website` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profiles`
--

LOCK TABLES `user_profiles` WRITE;
/*!40000 ALTER TABLE `user_profiles` DISABLE KEYS */;
INSERT INTO `user_profiles` VALUES (1,1,NULL,NULL),(2,2,NULL,NULL);
/*!40000 ALTER TABLE `user_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `activated` tinyint(1) NOT NULL DEFAULT '1',
  `banned` tinyint(1) NOT NULL DEFAULT '0',
  `ban_reason` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `new_password_key` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `new_password_requested` datetime DEFAULT NULL,
  `new_email` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `new_email_key` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `last_ip` varchar(40) COLLATE utf8_bin NOT NULL,
  `last_login` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `created` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'jriverac','$2a$08$VmvdAvYR.9RSOWCffOfcOO35BFmSRiLjs5.FB9.nknTDmpbTob6Ba','jrivera@armaq.com',1,0,NULL,NULL,NULL,NULL,NULL,'127.0.0.1','2014-10-07 10:11:39','2014-09-29 04:11:39','2014-10-07 10:11:39'),(2,'jriverak','$2a$08$xwNGAcqmXxdxKelkF08cB.RYva1M1R76gL3dxtqk6PHmWdwmsMude','jriverak@armaq.com',1,0,NULL,NULL,NULL,NULL,NULL,'127.0.0.1','0000-00-00 00:00:00','2014-09-29 04:14:48','2014-09-29 04:14:48');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `COD_USUARIO` int(11) NOT NULL AUTO_INCREMENT,
  `DNI` varchar(8) DEFAULT NULL,
  `NOMBRES` varchar(85) DEFAULT NULL,
  `AP_PATERNO` varchar(85) DEFAULT NULL,
  `AP_MATERNO` varchar(85) DEFAULT NULL,
  `SEXO` int(1) DEFAULT '1',
  `FE_NACIMIENTO` date DEFAULT NULL,
  `EMAIL` varchar(85) DEFAULT NULL,
  `CELULAR` varchar(9) DEFAULT NULL,
  `DIRECCION` varchar(100) DEFAULT NULL,
  `FE_REGISTRO` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`COD_USUARIO`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'70151662','FDFDFDFF','DFDFD','DFDF',NULL,'0000-00-00','DFDFDF@GMAIL.COM','DFDFDF','DFDF','2014-10-04 18:46:02'),(2,'70151662','FDFDFDFF','DFDFD','DFDF',NULL,'0000-00-00','DFDFDF@GMAIL.COM','DFDFDF','DFDF','2014-10-04 18:48:56'),(3,'25278001','jhonatan','river','carbajal',1,'0000-00-00','yonatan.rc@gmail.com','945927258','el alamo eo as ','2014-10-04 19:35:58'),(4,'70151662','jhonatan','river','carbajal',1,'0000-00-00','yonatan.rc@gmail.com','945927258','el alamo eo as','2014-10-04 19:48:15'),(5,'25778999','juana','de la cruz','cortez',1,'0000-00-00','yonatan.rc@gmail.com','945927258','el alamo eo as','2014-10-04 19:51:26');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `venta` (
  `COD_REGISTRO` varchar(15) NOT NULL,
  `COD_USUARIO` int(11) DEFAULT NULL,
  `SERIE_ARMA` varchar(12) DEFAULT NULL,
  `TIPO_PAGO` varchar(45) DEFAULT NULL,
  `FE_REGISTRO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `ESTADO` int(1) DEFAULT '1',
  `FE_RESPUESTA` datetime DEFAULT NULL,
  `COD_SUCAMEC` varchar(45) DEFAULT NULL,
  `NRO_LICENCIA` varchar(45) DEFAULT NULL,
  `FE_ENTREGA` datetime DEFAULT NULL,
  PRIMARY KEY (`COD_REGISTRO`),
  KEY `VENTA_ARMA_idx` (`SERIE_ARMA`),
  KEY `VENTA_USUARIO_idx` (`COD_USUARIO`),
  CONSTRAINT `VENTA_ARMA` FOREIGN KEY (`SERIE_ARMA`) REFERENCES `arma` (`SERIE_ARMA`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `VENTA_USUARIO` FOREIGN KEY (`COD_USUARIO`) REFERENCES `usuario` (`COD_USUARIO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta`
--

LOCK TABLES `venta` WRITE;
/*!40000 ALTER TABLE `venta` DISABLE KEYS */;
INSERT INTO `venta` VALUES ('10010103220',5,'10103220','4','2014-10-05 02:07:27',1,NULL,NULL,NULL,NULL),('10010103221',1,'10103221','4','2014-10-05 02:09:34',2,NULL,NULL,NULL,NULL),('10010103222',3,'10103222','3','2014-10-05 02:12:24',1,NULL,NULL,NULL,NULL),('10010103223',1,'10103223','3','2014-10-05 02:28:05',1,NULL,NULL,NULL,NULL),('10010103224',4,'10103224','3','2014-10-05 02:29:09',1,NULL,NULL,NULL,NULL),('10010103225',1,'10103225','3','2014-10-05 02:33:20',1,NULL,NULL,NULL,NULL),('10010103226',3,'10103226','4','2014-10-05 23:25:07',1,NULL,NULL,NULL,NULL),('10012500312',1,'12500312','4','2014-10-05 02:20:03',1,NULL,NULL,NULL,NULL),('10023813800',3,'23813800','0','2014-10-05 02:23:12',1,NULL,NULL,NULL,NULL),('10023813801',3,'23813801','3','2014-10-05 02:24:04',1,NULL,NULL,NULL,NULL),('10023813802',4,'23813802','4','2014-10-05 02:25:34',3,NULL,NULL,NULL,NULL),('10023813803',1,'23813803','0','2014-10-05 23:08:03',3,NULL,NULL,NULL,NULL),('10027728842',4,'27728842','2','2014-10-05 02:05:12',1,NULL,NULL,NULL,NULL),('10027728843',5,'27728843','3','2014-10-05 02:13:44',1,NULL,NULL,NULL,NULL),('10027728844',1,'27728844','4','2014-10-05 02:14:53',1,NULL,NULL,NULL,NULL),('10027728845',1,'27728845','4','2014-10-05 02:18:54',1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `venta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-10-07  8:09:22
