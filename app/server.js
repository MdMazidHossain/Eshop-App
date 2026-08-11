const express = require('express');
const { Pool } = require('pg');
const redis = require('redis');
const amqp = require('amqplib');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST || 'postgres',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'eshop'
});

// Redis
const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST || 'redis'}:6379`
});
redisClient.connect();

// RabbitMQ
let channel;
async function connectRabbitMQ() {
  const conn = await amqp.connect(`amqp://${process.env.RABBITMQ_HOST || 'rabbitmq'}`);
  channel = await conn.createChannel();
  await channel.assertQueue('orders');
}
connectRabbitMQ();

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/products', async (req, res) => {
  const result = await pool.query('SELECT * FROM products');
  res.json(result.rows);
});

app.listen(PORT, () => {
  console.log(`🚀 E-Shop running on port ${PORT}`);
});
