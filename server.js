var express = require('express');
var multer  = require('multer');
var app = express();
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/getfile', upload.single('fileupload'), function (req, res) {
  res.json({"name": req.file.originalname, "type": req.file.mimetype, "size": req.file.size});
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
