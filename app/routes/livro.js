module.exports = function(app){

    app.get('/livro', function(req,res){

        var connection = app.config.dbConnection();
        var livrosModel = app.app.models.livrosModel;

        livrosModel.getLivro(connection, function(error, result){
            res.render('livros/livro', { livro : result });
        });

    });
}