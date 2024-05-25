const express = require('express');
const bodyParser = require('body-parser');
const connectRabbitMQ = require('../config/rabbitmq');

const app = express();
app.use(bodyParser.json());

connectRabbitMQ((channel) => {
  channel.assertQueue('notification_queue', { durable: true });
  channel.consume('notification_queue', (msg) => {
    const { transactionId, userId, status } = JSON.parse(msg.content.toString());
    console.log(`Sending notification to user ${userId} about transaction ${transactionId} with status ${status}`);
    channel.ack(msg);
  });
});

app.listen(3001, () => {
  console.log('Notification service running on port 3001');
});
