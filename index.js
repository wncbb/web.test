var path=require('path');

var koa=require('koa');
var serve=require('koa-static');
var bodyParser=require('koa-bodyparser');
var render=require('koa-ejs');
var mount=require('koa-mount');

var indexRouter=require('./controller/indexRouter.js');

var app=koa();

app.use(serve(path.join(__dirname, 'static')));
app.use(bodyParser());

render(app, {
  root: path.join(__dirname, 'view'),
  viewExt: 'ejs',
  cache: false,
  debug: true
});

app.use(function*(next){
  console.log(this.request.ip+':'+this.request.url);
  yield next;
});

app.use(mount('/', indexRouter.routes()));

app.listen(3000);


//app.use(function*(){  
//});




