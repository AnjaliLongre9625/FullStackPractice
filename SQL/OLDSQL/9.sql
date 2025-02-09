CREATE DATABASE Anj;

CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Birthdate DATE,
    Department VARCHAR(255),
    Salary DECIMAL(10, 2)
);
CREATE TABLE Student (
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Birthdate DATE,
    Major VARCHAR(255),
    GPA DECIMAL(3, 2)
);

INSERT INTO Employee (EmployeeID, FirstName, LastName, Birthdate, Department, Salary)
VALUES 
    (1, 'John', 'Doe', '1985-05-10', 'IT', 50000.00),
    (2, 'Jane', 'Smith', '1990-02-15', 'HR', 55000.00),
    (3, 'Michael', 'Johnson', '1988-07-20', 'Finance', 60000.00),
    (4, 'Emily', 'Wilson', '1992-11-05', 'Marketing', 52000.00),
    (5, 'David', 'Lee', '1987-03-30', 'Sales', 58000.00);

INSERT INTO Student (StudentID, FirstName, LastName, Birthdate, Major, GPA)
VALUES 
    (1, 'Alice', 'Johnson', '1998-08-25', 'Computer Science', 9.75),
    (2, 'Bob', 'Smith', '1999-03-12', 'Engineering', 8.90),
    (3, 'Eva', 'Davis', '1997-06-18', 'Mathematics', 9.60),
    (4, 'Daniel', 'Miller', '1998-10-05', 'Biology', 9.80),
    (5, 'Grace', 'Wilson', '1996-12-15', 'Physics', 9.85);

SELECT*FROM EMPLOYEE;
select*from Student;

SELECT GPA
FROM Student
WHERE GPA IN(9.75,8.90);
