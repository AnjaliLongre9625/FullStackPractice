CREATE DATABASE temps1;
USE temps1;

CREATE TABLE Collleg (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department_id INT
);
SELECT *FROM collleg;

INSERT INTO Collleg  VALUES (1, "Anji" , 24);
INSERT INTO Collleg VALUES (12, "Nija", 22);
SHOW DATABASES;

CREATE TABLE empi1 (
id INT,
salary INT DEFAULT 250000
);
INSERT INTO  empi1 (id)VALUES(101);
SELECT *FROM empi1;

