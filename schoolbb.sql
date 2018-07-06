

/*!40101 SET NAMES utf8 */;



DROP TABLE IF EXISTS `bbpinglun`;
CREATE TABLE `bbpinglun` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `content` varchar(100) DEFAULT NULL,
  `time` varchar(30) DEFAULT NULL,
  `ip` varchar(30) DEFAULT NULL,
  `weiyibiaoshi` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

#
# Data for table "bbpinglun"
#

/*!40000 ALTER TABLE `bbpinglun` DISABLE KEYS */;
INSERT INTO `bbpinglun` VALUES (1,'风一的男子','三两清酒，些许朋友，孑然一身，枕边的你了却此生','2018.05.13 16:30','1.1.1.1',1),(2,'大叔','小兄弟可以啊','2018.05.13 16:30','1.1.1.1',1),(3,'萝莉','哈哈哈哈哈','2018.05.13 16:30','1.1.1.1',2);
/*!40000 ALTER TABLE `bbpinglun` ENABLE KEYS */;

#
# Structure for table "bbuser"
#

DROP TABLE IF EXISTS `bbuser`;
CREATE TABLE `bbuser` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `vip` int(2) DEFAULT '0',
  `zan` int(5) DEFAULT '0',
  `dxname` varchar(20) DEFAULT NULL,
  `dxemail` varchar(30) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `qq` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `time` varchar(30) DEFAULT NULL,
  `ip` varchar(30) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=69 DEFAULT CHARSET=utf8;

#
# Data for table "bbuser"
#

/*!40000 ALTER TABLE `bbuser` DISABLE KEYS */;
INSERT INTO `bbuser` VALUES (1,0,100000,'易狗','123456@qq.com','一奇',330729121,'我这才明白 真正爱一个人后 眼角眉梢都是你 \r\n四面八方都是你 上天入地都是你 成是你死是你.','2018.05.13 10:30','1.1.1.1','3'),(2,0,14,'小明','123@qq.com','小花',0,'hahahha哈哈哈哈哈','2018-05-14 11:25','192.168.1.10','2'),(4,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,0,5,'123123','','123123123',2147483647,'3123123','2018-06-04 02:06','192.168.1.10','3'),(6,0,19,'1','','123',123,'哈哈哈','2018-06-04 02:08','192.168.1.6','3'),(7,0,5,'2','','123123123',2147483647,'3123123','2018-06-04 02:06','192.168.1.10','3'),(8,0,19,'付伟琪','','123',123,'哈哈哈','2018-06-04 02:08','192.168.1.6','3'),(9,0,27,'cesh','','ceshiii',0,'ceshi','2018-06-04 02:11','192.168.1.10','5'),(10,0,2,'111','','111',1111,'1111','2018-06-04 01:13','192.168.1.10','5'),(11,0,27,'3','','ceshiii',0,'ceshi','2018-06-04 02:11','192.168.1.10','5'),(12,0,5,'4','','123123123',2147483647,'3123123','2018-06-04 02:06','192.168.1.10','3'),(13,0,19,'5','','123',123,'哈哈哈','2018-06-04 02:08','192.168.1.6','3'),(14,0,5,'6','','123123123',2147483647,'3123123','2018-06-04 02:06','192.168.1.10','3'),(15,0,19,'7','','123',123,'哈哈哈','2018-06-04 02:08','192.168.1.6','3'),(16,0,5,'8','','123123123',2147483647,'3123123','2018-06-04 02:06','192.168.1.10','3'),(17,0,19,'9','','123',123,'哈哈哈','2018-06-04 02:08','192.168.1.6','3'),(18,0,27,'10','','ceshiii',0,'ceshi','2018-06-04 02:11','192.168.1.10','5'),(19,0,2,'11','','111',1111,'1111','2018-06-04 01:13','192.168.1.10','5'),(20,0,27,'12','','ceshiii',0,'ceshi','2018-06-04 02:11','192.168.1.10','5'),(21,0,2,'13','','111',1111,'1111','2018-06-04 01:13','192.168.1.10','5'),(22,0,27,'14','','ceshiii',0,'ceshi','2018-06-04 02:11','192.168.1.10','5'),(23,0,2,'15','','111',1111,'1111','2018-06-04 01:13','192.168.1.10','5'),(24,0,2,'16','','111',1111,'1111','2018-06-04 01:13','192.168.1.10','5');
/*!40000 ALTER TABLE `bbuser` ENABLE KEYS */;

#
# Structure for table "content"
#

DROP TABLE IF EXISTS `content`;
CREATE TABLE `content` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "content"
#

/*!40000 ALTER TABLE `content` DISABLE KEYS */;
/*!40000 ALTER TABLE `content` ENABLE KEYS */;

#
# Structure for table "liaotian"
#

DROP TABLE IF EXISTS `liaotian`;
CREATE TABLE `liaotian` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `time` varchar(30) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `ip` varchar(30) DEFAULT NULL,
  `touxiang` varchar(50) DEFAULT NULL,
  `vip` int(2) DEFAULT '0',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=90 DEFAULT CHARSET=utf8;

#
# Data for table "liaotian"
#

/*!40000 ALTER TABLE `liaotian` DISABLE KEYS */;
INSERT INTO `liaotian` VALUES (1,'一奇','2018-06-25 00:18:58','终于弄好匿名聊天了','192.168.1.10','1',0),(2,'一奇','2018-06-25 00:19:10','现在还缺回车发送','192.168.1.10','1',0),(3,'一奇','2018-06-25 00:19:20','还有登录用户判断','192.168.1.10','1',0),(4,'一奇','2018-06-25 00:19:28','非常不错','192.168.1.10','1',0);
/*!40000 ALTER TABLE `liaotian` ENABLE KEYS */;

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `qq` bigint(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `shenggao` varchar(10) DEFAULT NULL,
  `tizhong` varchar(10) DEFAULT NULL,
  `xinbie` int(2) DEFAULT '0',
  `school` varchar(100) DEFAULT NULL,
  `qianming` varchar(255) DEFAULT NULL,
  `zcip` varchar(100) DEFAULT NULL,
  `dlip` varchar(100) DEFAULT NULL,
  `zctime` varchar(30) DEFAULT NULL,
  `dltime` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','e10adc3949ba59abbe56e057f20f883e','一奇',330729121,'330729121@qq.com',1760263696,18,'165cm','60kg',1,'重庆邮电大学移通学院','努力一下吧，ha ha','192.168.1.10','127.0.0.1','2018.06.04 19:55','2018-06-25 11:05:26'),(2,'hello','e10adc3949ba59abbe56e057f20f883e','付伟奇',10001,'10001@qq.com',1588496696,18,NULL,NULL,2,NULL,NULL,'192.168.1.10','192.168.1.10',NULL,'2018-06-05 12:16'),(3,'1588888881','e10adc3949ba59abbe56e057f20f883e','哈哈哈哈哈',330729121,'1000000000000@qq.com',15888888,18,NULL,NULL,0,NULL,NULL,'192.168.1.1','192.168.1.10',NULL,NULL),(4,'123456','e10adc3949ba59abbe56e057f20f883e','123',NULL,'123456',0,0,'','',0,'','','192.168.1.10','127.0.0.1','2018-06-07 21:46','2018-06-25 08:58:15'),(5,'123','4297f44b13955235245b2497399d7a93',NULL,NULL,'123456',NULL,NULL,NULL,NULL,0,NULL,NULL,'192.168.1.10','192.168.1.10','2018-06-07 21:47','2018-06-22 14:50'),(6,'1588','4297f44b13955235245b2497399d7a93',NULL,123456,'1588',NULL,NULL,NULL,NULL,2,NULL,NULL,'192.168.1.10','192.168.1.10','2018-06-07 21:47','2018-06-13 11:22'),(7,'123123','c4ca4238a0b923820dcc509a6f75849b',NULL,NULL,'123123',NULL,NULL,NULL,NULL,0,NULL,NULL,'192.168.1.10',NULL,'2018-06-10 19:36',NULL),(8,'haha','dc1daee7fecf2a59a2471a6d363b776e',NULL,NULL,'123@qq.com',NULL,NULL,NULL,NULL,0,NULL,NULL,'192.168.1.10',NULL,'2018-06-13 19:05',NULL),(9,'adad','e10adc3949ba59abbe56e057f20f883e',NULL,NULL,'123@qq.com',NULL,NULL,NULL,NULL,0,NULL,NULL,'192.168.1.10',NULL,'2018-06-22 10:08',NULL),(10,'111111','4297f44b13955235245b2497399d7a93',NULL,NULL,'123',NULL,NULL,NULL,NULL,0,NULL,NULL,'192.168.1.10',NULL,'2018-06-22 10:10',NULL),(11,'123123123','4297f44b13955235245b2497399d7a93',NULL,NULL,'123123',NULL,NULL,NULL,NULL,0,NULL,NULL,'192.168.1.10','192.168.1.10','2018-06-22 10:10','2018-06-22 10:12'),(12,'a111','4297f44b13955235245b2497399d7a93',NULL,NULL,'123123',NULL,NULL,NULL,NULL,0,NULL,NULL,'192.168.1.10',NULL,'2018-06-22 10:11',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

#
# Structure for table "zan"
#

DROP TABLE IF EXISTS `zan`;
CREATE TABLE `zan` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `vip` int(2) DEFAULT '0',
  `ip` varchar(100) DEFAULT NULL,
  `weiyibiaoshi` int(11) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

#
# Data for table "zan"
#

/*!40000 ALTER TABLE `zan` DISABLE KEYS */;
INSERT INTO `zan` VALUES (26,1,'192.168.1.10',1,'2018-06-04'),(27,1,'192.168.1.10',2,'2018-06-04'),(48,1,'192.168.1.10',47,'2018-06-15'),(49,1,'192.168.1.6',47,'2018-06-15'),(50,1,'192.168.1.6',2,'2018-06-15'),(51,1,'192.168.1.6',1,'2018-06-15');
/*!40000 ALTER TABLE `zan` ENABLE KEYS */;
