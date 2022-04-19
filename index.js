let http = require('http');
let fs = require('fs');

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};

http.createServer(handleRequest).listen(8000);

/*
//put these lines in a seperate file
const mysql = require('mysql2');

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "raamatukogu"
    // here you can set connection limits and so on
});

module.exports = connection;

//put these on destination page
const connection = require('../util/connection');

async function getAll() {
    const sql = "SELECT id FROM objekt";
    const [rows] = await connection.promise().query(sql);
    return rows;
} 
exports.getAll = getAll; */