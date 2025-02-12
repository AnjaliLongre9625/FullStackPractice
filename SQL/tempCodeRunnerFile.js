const { faker } = require('@faker-js/faker');
const mysql = require('mysql2/promise'); // Use mysql2/promise for async/await

(async () => {
    let connection;
    try {
        // Establish connection
        connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            database: "delta_app",
            password: "@Durgamalti9871",
        });

        // Execute the query to show tables
        const [tables] = await connection.query("SHOW TABLES");
        console.log("Tables in database:", tables);
        console.log("Total tables:", tables.length);

        // Function to generate a random user
        let getRandomUser = () => ({
            userId: faker.string.uuid(), // UUID format for userId
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(), // Consider hashing this before storing
            birthdate: faker.date.birthdate().toISOString().split('T')[0], // Convert to 'YYYY-MM-DD'
            registeredAt: new Date().toISOString().slice(0, 19).replace('T', ' ') // MySQL DATETIME format
        });

        let user = getRandomUser();
        console.log("Generated User:", user);

        // Insert query using placeholders
        const query = `INSERT INTO user (id, username, password) VALUES (?, ?, ?)`;

        // Execute the INSERT query
        const [result] = await connection.execute(query, [
            user.userId,  // Mapping userId from faker to 'id'
            user.email,   // Storing email as username
            user.password // Consider bcrypt hashing the password before storing
        ]);

        console.log("User inserted successfully! Insert ID:", result.insertId);
    } catch (err) {
        console.error("Error:", err);
    } finally {
        if (connection) {
            await connection.end();
            console.log("Database connection closed.");
        }
    }
})();
