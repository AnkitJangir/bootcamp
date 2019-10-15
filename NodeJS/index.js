//const express = require("express");

/*const server =express();

server.use(express.static('public'));
server.get("/demo",function(req,res){
    res.send("hello");
})
server.listen(8080,function(){
    console.log("server started")
})*/



const bodyParser = require("body-parser") // No need to install if you have installed express
const express=require("express");
const server = express();
const mongoose = require("mongoose");

server.use(bodyParser.json());   // for JSON data body
server.use(bodyParser.urlencoded({ extended: false }))
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const Schema = mongoose.Schema;

////toDo

const todoSchema = new Schema({
  title:{ type:String,required:true},
  status: {type:Boolean,required:true},
  date: { type: Date, default: Date.now } 
});
const todo = mongoose.model('todo', todoSchema);

server.post("/todo",function(req,res){
  let todo = new todo();

  todo.title=req.body.title;
  todo.status=req.body.status;
  todo.date=new Date();
  todo.save();
});

//////Task  

const taskSchema = new Schema({
  title:  String,
  status: Boolean,
  date: { type: Date, default: Date.now },    
});
const Task = mongoose.model('Task', taskSchema); 


server.post("/task",function(req,res){
  let task = new Task();

  task.title=req.body.title;
  task.save();
})

server.listen(8080,function(){
  console.log("server started")
})

/*const morgan = require('morgan')  // after installing

//server.use(morgan('tiny'));
server.use(morgan('combined'));

server.listen(8080,function(){
    console.log("server started")
})



server.get("/fun",(req,res)=>{
    res.json(req.query);
   console.log(req.query)
})


*/

/*var server = express()

const session=require(express-session);
server.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }   // make secure : true incase you are using HTTPS
}));
 server.get('/user', function(req, res) {
    if (req.session.views) {
      req.session.views++
      res.json({views:req.session.views})
    } else {
      req.session.views = 1
      res.send('welcome to the session demo. refresh!')
    }
  })*/
/*app.get("/login",function(req,res){
    res.send("<h1>Hello</h1>");
})*/
/*app.get("/login",function(req,res){
    res.json(req.query);
    console.log(req.query)
})*/
/*app.get("/login/:name/:age/:subject",function(req,res){
    res.json(req.params);
    console.log(req.params)
})
*/