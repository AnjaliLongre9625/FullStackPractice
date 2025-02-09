CREATE DATABASE my_school;
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(255)
);
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(255),
    student_id INT,
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);
INSERT INTO students (student_id, student_name) VALUES
(1, 'John Doe'),
(2, 'Jane Smith');

INSERT INTO employees (employee_id, employee_name, student_id) VALUES
(101, 'Employee 1', 1),
(102, 'Employee 2', 2),
(103, 'Employee 3', 1);
