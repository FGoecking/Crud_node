module.exports = function(app){

    this.getLivros = function(connection, callback){
        connection.query('select * from livros;', callback);
    }

    this.getLivro = function(connection, callback){
        connection.query('select * from livros where id_livro = 2;', callback);
    }

    return this;
}