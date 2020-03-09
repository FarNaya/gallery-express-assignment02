
const express = require('express');
const path = require('path');
const  ejs = require('ejs');
const pageInfo = require('./pageInfo');
const app = express();

const moment = require('moment');


const gallery = require('./gallery');
app.locals.gallery = gallery;

app.set('view engine', 'ejs');


app.locals.moment = require('moment');

app.set('views', path.join(__dirname, 'views'));



//routes  
app.get('/',function(req, res) {  
 res.render('index',pageInfo.index);
  });
  
app.get('/oliphaunt',function(req, res) {  
 res.render('oliphaunt',pageInfo.oliphaunt);
  });
  
app.get('/theBathSong',function(req, res) {  
 res.render('theBathSong',pageInfo.theBathSong);
  });
  
 app.get('/theStoneTroll',function(req, res) {  
    res.render('theStoneTroll',pageInfo.theStoneTroll);
  });
  
  app.get('/gallery',function(req, res) {  
    res.render('gallery',pageInfo.gallery);
  });

  
  
  app.get('/gallery/:id',function(req,res){
    app.locals.photoid = req.params.id;
    res.render('gallery',{title:'gallery'})

  });


app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
  });

  app.set('port', process.env.PORT || 3000); 
  
  
app.listen(app.get('port'), () => {

    console.log(`server on port ${app.get('port')}`)
})
