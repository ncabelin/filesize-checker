var express = require('express');
var multer = require('multer');
var upload = multer();
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.post('/', upload.single('file'), function(req, res, next) {
	res.json({ filesize: req.file.size });
});

app.listen(port, function() {
	console.log('App running at port ' + port);
});