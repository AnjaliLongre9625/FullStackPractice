
  
CREATE TABLE multitabledepartment (
    department_id INT PRIMARY KEY,
    name VARCHAR(255),
    location_id INT
);

CREATE TABLE job1 (
    job_id INT PRIMARY KEY,
    function VARCHAR(255)
);

CREATE TABLE employee (
    employee_id INT PRIMARY KEY,
    date DATE,
    job_id INT,
    FOREIGN KEY (job_id) REFERENCES job(job_id)
);

INSERT INTO multitabledepartment (department_id, name, location_id)
VALUES
    (1, 'Anjali', 101),
    (2, 'Saloni', 102),
    (3, 'Priya', 103);

INSERT INTO job1 (job_id, function)
VALUES
    (1, 'Software Engineer'),
    (2, 'Teacher'),
    (3, 'Cse engineer');

INSERT INTO employee (employee_id,name,DOB, job_id,manager_id,hire_date,salary,department_id)
VALUES
    (101, 'Anjali','2004-01-15', 1,107,'2004-01-15',100000000,1578),
    (102, 'Saloni','2026-03-20', 2,108,'2004-01-15',10000000,1899),
    (103, 'Jayant','2026-02-10', 3,109,'2004-01-15',10000000,1335);
    
SELECT COUNT(*) AS employee_count
FROM employee;