CREATE DATABASE DATA1;
USE DATA1;
CREATE TABLE EMPLOYEE (
  empId INTEGER PRIMARY KEY,
  name VARCHAR(50),
  age VARCHAR(50),
  address VARCHAR(50), 
  salary INTEGER NOT NULL
  );
INSERT INTO EMPLOYEE 
(empId ,name,age,address,salary)
VALUES
(1, 'Chandan' , 24,  'Indore'   ,10000),
(2, 'Niranjan', 22,  'Hyderabad',4500),
(3, 'Raushan' , 27,  'Bhopal'   ,8500),
 (4,'Vikas'   , 25,  'Mumbai'   ,6500),
 (5, 'Komal'   , 23,  'Kota'	    ,2000),
 (6,'Gayatri'  , 25,  'Delhi'    ,1500),
 (7,'John'	  , 32,	 'Ahmedabad',2000);

SELECT DISTINCT* FROM EMPLOYEE ;


