var http = require ('http');
var express = require('express');
var fs = require('fs');
var bodyparser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var tabArt = require('./schema_Mongoose.js');
var fs = require('fs');





 
mongoose.connect('mongodb://localhost/sendhil');
 app.use (express.static('public'));
  app.use (express.static('views'));
var url = require('url');
app.set ('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: false }));

 



app.post('/creeArticles',function(req, res){

  
	var codeArticle = req.body.codeArticle;
	var Designation = req.body.Designation;
	if((req.body.codeArticle === "") || (req.body.Designation ==="") ||  (req.body.prix ==="")){

 
 

 
	}   

	new tabArt({

		 Code:  req.body.codeArticle,
    Designation: req.body.Designation,
    prix:    req.body.prix
 
	}).save(function(err, data){
if(err) throw err;
console.log(data);
	});
  
    
 res.render('menuArticles.ejs',{title : 'Les Données sont enregistrées avec sucées.'});


});

  app.get('/menuArticles', function(req, res){

res.render('menuArticles',{title : 'GESTION DES ARTICLES'});

 });




 app.get('/TablesDesArticles', function(req, res){

 var createJson = "";     
     
  tabArt.find({})
    .exec(function (err, data) {
        if (err) 
            throw err;
 
            //res.json(data);
     createJson = JSON.stringify(data);
      
     
      
      
      
      fs.writeFile("./views/article.JSON", createJson, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
          
});   
res.render('tableDesArticles',{title : 'TABLE DES ARTICLES'});
     
    });
     
     
     
 


 });




 

app.listen(3131);


