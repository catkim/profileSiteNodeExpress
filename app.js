var express = require('express');

var app = express();

var hbs = require('express-handlebars');

app.set('view engine', 'hbs');
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultView: 'main'
  //layoutDir: __dirname + '/views/layouts'
}));


app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

// routes
app.get('/', function(req, res){
  res.render('home', {title: 'Homepage'});
});

app.get('/contact', function(req, res){
    res.render('contact', {title: 'Contact'});
});

app.use(function(req, res, next){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http:localhost:' + app.get('port') + '; press Ctrl-C to terminate.')
});
