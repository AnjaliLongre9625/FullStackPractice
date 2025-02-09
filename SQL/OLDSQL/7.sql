-- Create Department table
CREATE TABLE Department (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100)
);
-- Create Course table
CREATE TABLE Course (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES Department(department_id)
);

-- Create Student table
CREATE TABLE Student (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100),
    birthdate DATE
);

-- Create Enrollment table
CREATE TABLE Enrollment (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (course_id) REFERENCES Course(course_id)
);

-- Insert sample data into Department table
INSERT INTO Department (department_id, department_name) VALUES
    (1, 'Computer Science'),
    (2, 'Mathematics'),
    (3, 'Physics');

-- Insert sample data into Course table
INSERT INTO Course (course_id, course_name, department_id) VALUES
    (101, 'Introduction to Programming', 1),
    (102, 'Linear Algebra', 2),
    (103, ' Mechanics', 3);

-- Insert sample data into Student table
INSERT INTO Student (student_id, student_name, birthdate) VALUES
    (1001, 'Anjali', '2004-01-31'),
    (1002, 'Umang ', '2001-02-20'),
    (1003, 'Levish', '2004-10-01');

-- Insert sample data into Enrollment table
INSERT INTO Enrollment (enrollment_id, student_id, course_id, enrollment_date) VALUES
    (2001, 1001, 101, '2023-08-01'),
    (2002, 1001, 102, '2023-08-02'),
    (2003, 1002, 101, '2023-08-05'),
    (2004, 1003, 103, '2023-08-10');


-- Create Tables
CREATE TABLE Auditorium (
    auditorium_id INT PRIMARY KEY,
    name VARCHAR(255)
);
CREATE TABLE Seat (
    seat_id INT PRIMARY KEY,
    row_id INT,
    seat_number INT,
    seat_type_id INT);

CREATE TABLE SeatType (
    seat_type_id INT PRIMARY KEY,
    type_description VARCHAR(255)
);

CREATE TABLE ScheduledMovie (
    movie_id INT PRIMARY KEY,
    auditorium_id INT,
    start_time DATETIME,
    end_time DATETIME,
    FOREIGN KEY (auditorium_id) REFERENCES Auditorium(auditorium_id)
);

CREATE TABLE Movie (
    movie_id INT PRIMARY KEY,
    title VARCHAR(255),
    genre VARCHAR(255),
    release_year INT
);

CREATE TABLE Customer (
    customer_id INT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE Reservation (
    reservation_id INT PRIMARY KEY,
    scheduled_movie_id INT,
    customer_id INT,
    seat_id INT,
    FOREIGN KEY (scheduled_movie_id) REFERENCES ScheduledMovie(movie_id),
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
    FOREIGN KEY (seat_id) REFERENCES Seat(seat_id)
);

-- Insert Sample Data
-- Insert data into each table (adjust values as needed)
INSERT INTO Auditorium (auditorium_id, name) VALUES
    (1, 'Main Auditorium'),
    (2, 'Small Auditorium');


INSERT INTO SeatType (seat_type_id, type_description) VALUES
    (1, 'Standard'),
    (2, 'VIP');

INSERT INTO Seat (seat_id, row_id, seat_number, seat_type_id) VALUES
    (1, 1, 1, 1),
    (2, 1, 2, 1),
    (3, 2, 1, 2),
    (4, 2, 2, 2);

INSERT INTO Movie (movie_id, title, genre, release_year) VALUES
    (1, 'Avengers: Endgame', 'Action', 2019),
    (2, 'Inception', 'Sci-Fi', 2010);

INSERT INTO ScheduledMovie (movie_id, auditorium_id, start_time, end_time) VALUES
    (1, 1, '2023-08-27 18:00:00', '2023-08-27 21:00:00'),
    (2, 2, '2023-08-28 15:00:00', '2023-08-28 17:30:00');

INSERT INTO Customer (customer_id, name, email) VALUES
    (1, 'Anjali', 'anjalilongre349@gmail.com'),
    (2, 'Jane Smith', 'jane@example.com');

INSERT INTO Reservation (reservation_id, scheduled_movie_id, customer_id, seat_id) VALUES
    (1, 1, 1, 1),
    (2, 2, 2, 4);