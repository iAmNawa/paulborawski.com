var port = 30444;
var app = require('express')();

app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:true }));
app.use(require('stylus').middleware(require('path').join(__dirname, 'public')));
app.use(require('express').static('public'));

require('http').createServer(app).listen(port,function(){
  console.log('server is running, on port', port)
});
