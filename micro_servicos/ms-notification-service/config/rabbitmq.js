const amqp = require('amqplib/callback_api');

const connectRabbitMQ = (callback) => {
  amqp.connect('amqp://rabbitmq', (err, connection) => {
    if (err) {
      throw err;
    }
    connection.createChannel((err, channel) => {
      if (err) {
        throw err;
      }
      callback(channel);
    });
  });
};

module.exports = connectRabbitMQ;
