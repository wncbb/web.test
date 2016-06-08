var router=require('koa-router');
var indexRouter=new router();

indexRouter.get('/', function*(){
  this.body= 'hello world'; 
});

module.exports=indexRouter;





