const mysql = require('mysql');

const connMySQL = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:'',
        database:'crud_livros',
    }); 
}

module.exports = function () {
    return connMySQL;
}

    