module.exports = function(app){
    

    app.get('/livros', function(req, res){

        const connection = app.config.dbConnection();
        const livrosModel = app.app.models.livrosModel;

        livrosModel.getLivros(connection, function(error, result){
            res.render("livros/livros", {livro : result});
        });
  
    });
    
};
