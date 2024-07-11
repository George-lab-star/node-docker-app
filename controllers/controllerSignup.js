const auth = require("../services/serviceAuth.js");

const { Pool } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "db",
    database: "auth_db",
    password: "qwezxc",
    port: 5432,
});

exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    const client = await pool.connect();
    try {
        const hashedPassword = await auth.hashPassword(password);
        const result = await client.query(
            `INSERT INTO users (username, email, password_hash) VALUES ('${username}', '${email}', '${hashedPassword}') RETURNING *`
        );
        res.send(`User ${username} was created!`);
    } 
    catch (error) {
        console.error('Ошибка при регистрации пользователя:', error);
        throw error;
    } 
    finally {
        client.release();
    }
}

