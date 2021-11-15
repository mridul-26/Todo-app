const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-list-db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to database."));

db.once('open',function () {
    console.log("Successfully connected to databse");
})