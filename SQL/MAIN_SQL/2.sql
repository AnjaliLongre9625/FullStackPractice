CREATE DATABASE college1;

CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user1(
id INT,
age INT,
name VARCHAR(30) NOT NULL,
email VARCHAR(30) UNIQUE,
followers INT DEFAULT 0,
following int,
CONSTRAINT CHECK (age>=13),
PRIMARY KEY(id)
);

CREATE TABLE post(
id INT PRIMARY KEY,
content VARCHAR(100) ,
user1 INT ,
FOREIGN KEY (user_id) REFERENCES user(id)
);



