// backend/models/userModel.js

const pool = require('../config/db');
const bcrypt = require('bcryptjs');

const createUser = async (name, email, password) => {
  const hash = await bcrypt.hash(password, 10);
  const result = await pool.query(
    'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
    [name, email, hash]
  );
  return result.rows[0];
};

const findUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email=$1', [email]);
  return result.rows[0];
};

module.exports = { createUser, findUserByEmail };
