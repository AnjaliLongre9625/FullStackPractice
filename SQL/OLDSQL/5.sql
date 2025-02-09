CREATE DATABASE bhadii;
USE bhadii;
CREATE TABLE studentd (
    studentd_id INT PRIMARY KEY,
    studentd_name VARCHAR(255));
    
INSERT INTO studentd (studentd_id, studentd_name)
VALUES (101, 'Anjali'),
       (102, 'Bob'),
       (3, 'Charlie');
       
CREATE TABLE coursed (
    coursed_id INT PRIMARY KEY,
    coursed_name VARCHAR(255));
    
INSERT INTO coursed (coursed_id, coursed_name)
VALUES (101, 'Anjali'),
       (102, 'Bob'),
       (103, 'History');
       
SELECT a.studentd_name ,b.coursed_name
FROM studentd as a
JOIN coursed  as b
on a.studentd_name=coursed_name;

SELECT*FROM studentd;
SELECT*FROM  coursed;




       
