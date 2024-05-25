const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../config/db');
const connectRabbitMQ = require('../config/rabbitmq');

const app = express();
app.use(bodyParser.json());

app.post('/payments', (req, res) => {
  const { amount, userId } = req.body;
  pool.query('INSERT INTO transactions(amount, user_id, status) VALUES($1, $2, $3) RETURNING id', [amount, userId, 'pending'], (error, results) => {
    if (error) {
      throw error;
    }
    const transactionId = results.rows[0].id;

    connectRabbitMQ((channel) => {
      const msg = JSON.stringify({ transactionId, userId, status: 'pending' });
      channel.assertQueue('notification_queue', { durable: true });
      channel.sendToQueue('notification_queue', Buffer.from(msg));
    });

    res.status(201).send({ transactionId });
  });
});

app.listen(3000, () => {
  console.log('Payment service running on port 3000');
});
