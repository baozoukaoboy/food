#1:创建food数据库
SET NAMES UTF8;
DROP DATABASE IF EXISTS food;
CREATE DATABASE food CHARSET=UTF8;
USE food;
CREATE TABLE fooduser(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(25),
    upwd VARCHAR(32),
);
INSERT INTO fooduser VALUES(null,'刘德华','123456');
INSERT INTO fooduser VALUES(null,'张学友','123456');
INSERT INTO fooduser VALUES(null,'郭富城',"123456");
INSERT INTO fooduser VALUES(null,'黎明',"123456");

CREATE TABLE foodcart(
    pid INT,
    title VARCHAR(128),
    val INT,
    price DECIMAL(4,2),
    img VARCHAR(255)   
);