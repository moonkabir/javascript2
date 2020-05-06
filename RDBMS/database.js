const Sequelize = require('sequelize');

// Option 2: Passing a connection URI
const sequelize = new Sequelize('postgres://moon:moon@localhost:5433/moon');
// test database connection
database.authenticate()
    .then(e=>{
        console.log('Database connection successfully.');
    })
    .catch(e=>{
        console.error('Database connection failed');
    });

//Schema defination

const Task = database.define('task',{
    description:Sequelize.STRING
});

// If you change the schemas sync will update the tables
database.sync()
    .then(e=>{
        console.log("database synced");
    })
    .catch(e=>{
        console.err("Database sync failed");
    })

module.exports = {
    database,
    Task
}