CREATE DATABASE ANJII;
CREATE TABLE EMP (
  empId INTEGER PRIMARY KEY,
  name VARCHAR(50),
  age VARCHAR(50),
  address VARCHAR(50), 
  marks VARCHAR(50),
  salary INTEGER NOT NULL
  );
INSERT INTO EMP
(empId ,name,age,address,marks,salary)
VALUES
(1, 'Chandan' , 24,  'Indore',100   ,10000),
(2, 'Niranjan', 22,  'Hyderabad',102,4500),
(3, 'Raushan' , 27,  'Bhopal',103   ,8500),
 (4,'Vikas'   , 25,  'Mumbai',104   ,6500),
 (5, 'Komal'   , 23,  'Kota',105 ,2000);

SELECT * FROM EMP ;
TRUNCATE TABLE EMP;



