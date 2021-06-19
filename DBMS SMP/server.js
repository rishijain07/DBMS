var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

var urlencodedParser = bodyParser.urlencoded({ extended: false})

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/hospital', function(req, res) {
    res.render('hospital');
});

app.post('/hospital', urlencodedParser,function(req, res) {
    res.render('hospital');
});

app.get('/doctordetails', function(req, res) {
    res.render('doctordetails');
});

app.get('/patientdetails', function(req, res) {
    res.render('patientdetails');
});

app.get('*',function(req,res){
    res.render('404');
});

app.listen(3000);