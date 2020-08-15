const mongoose = require('mongoose');
const readLine = require ('readline');

/* Where did this come from */
let dbURL = 'mongodb://127.0.0.1/loc8r';
if (process.env.NODE_ENV === 'production') {
    dbURL = process.env.DB_HOST || process.env.MONGOODB_URI;
}
// const host = process.env.DB_HOST || 'mongodb://127.0.0.1/loc8r';
// const dbURL = `${host}`;

const connect = () => {
    setTimeout(() => mongoose.connect(dbURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }), 1000);
  }

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error: ' + err);
    return connect();
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose is disconnected');
});

/* Where did this come from */
if (process.platform === 'win32') {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on ('SIGINT', () => {
        process.emit("SIGINT");
    });
}

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit (0);
    });
});

connect();
require('./locations');