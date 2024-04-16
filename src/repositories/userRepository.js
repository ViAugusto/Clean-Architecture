const { Pool } = require('pg');

class UserRepository { 
    constructor() {
        this.pool = new Pool({
            user: 'user',
            host: 'localhost',
            database: 'database',
            password: 'password',
            port: 5432,
        });
    }

    async findAll() {
        const client = await this.pool.connect();
        try {
            const result = await client.query('SELECT * FROM users');
            return result.rows;
        } catch (error) {
            
        } finally {
            client.release();
        }
    }

    async findById(id) {
        const client = await this.pool.connect();
        try {
            const result = await client.query('SELECT * FROM users WHERE id = $1', [id]);
            return result.rows[0];
        } catch (error) {
            
        } finally {
            client.release();
        }
    }

    async findByUsername(username) {
        const client = await this.pool.connect();
        try {
            const result = await client.query('SELECT * FROM users WHERE username = $1', [username]);
            return result.rows[0];
        } catch (error) {
            
        } finally {
            client.release();
        }
    }

    async create(user) {
        const client = await this.pool.connect();
        try {
            const result = await client.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [user.username, user.password]);
            return result.rows[0];
        } catch (error) {
            
        } finally {
            client.release();
        }
    }

    async update(id, user) {
        const client = await this.pool.connect();
        try {
            const result = await client.query('UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING *', [user.username, user.password, id]);
            return result.rows[0];
        } catch (error) {
            
        } finally {
            client.release();
        }
    }

    async delete(id) {
        const client = await this.pool.connect();
        try {
            await client.query('DELETE FROM users WHERE id = $1', [id]);
        } catch (error) {
            
        } finally {
            client.release();
        }
    }
}

module.exports = UserRepository;