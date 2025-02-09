-- Create Customers table
CREATE TABLE Customers (
    customer_id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

-- Create Cars table
CREATE TABLE Cars (
    car_id INTEGER PRIMARY KEY,
    make TEXT NOT NULL,
    model TEXT NOT NULL,
    year INTEGER NOT NULL,
    rental_rate DECIMAL(8, 2) NOT NULL
);

-- Create Rentals table
CREATE TABLE Rentals (
    rental_id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    car_id INTEGER NOT NULL,
    rental_start_date DATE NOT NULL,
    rental_end_date DATE NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY (car_id) REFERENCES Cars(car_id)
);

-- Insert sample data into Customers table
INSERT INTO Customers (first_name, last_name, email)
VALUES
    ('John', 'Doe', 'johndoe@email.com'),
    ('Jane', 'Smith', 'janesmith@email.com'),
    ('Bob', 'Johnson', 'bobjohnson@email.com');

-- Insert sample data into Cars table
INSERT INTO Cars (make, model, year, rental_rate)
VALUES
    ('Toyota', 'Camry', 2022, 50.00),
    ('Honda', 'Civic', 2021, 45.00),
    ('Ford', 'Escape', 2023, 60.00);

-- Insert sample data into Rentals table
INSERT INTO Rentals (customer_id, car_id, rental_start_date, rental_end_date)
VALUES
    (1, 1, '2023-09-10', '2023-09-15'),
    (2, 2, '2023-09-12', '2023-09-17'),
    (3, 3, '2023-09-14', '2023-09-19');
