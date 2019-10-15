


const bodyParser = require("body-parser") // No need to install if you have installed express
const express=require("express");
const server = express();
const mongoose = require("mongoose");

server.use(bodyParser.json());   // for JSON data body
server.use(bodyParser.urlencoded({ extended: false }))
mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true});

const morgan = require('morgan')  // after installing
const Schema = mongoose.Schema;
server.use(morgan('combined'));


////toDo

const todoSchema = new Schema({
  title:{ type:String,required:true},
  status: {type:Boolean,required:true},
  date: { type: Date, default: Date.now } 
});
const todo = mongoose.model('todo', todoSchema);

server.post("/todo",function(req,res){
  console.log("HEllo");
  let todo = new todo();
  todo.title=req.body.title;
  todo.status=req.body.status;
  todo.save();
  res.json(todo);
});

//////Task  create a database
/*
const taskSchema = new Schema({
  title: {type: String, required:true},
  status: {type:Boolean,required:true},
  date: { type: Date, default: Date.now },    
});
const Task = mongoose.model('Task', taskSchema); 
*/

/*server.post("/task",function(req,res){
  let task = new Task();

  task.title=req.body.title;
  task.status=req.body.status;
  task.save();
  res.json(task);
})
//////read a object
/*
server.get("/task/:name",function(req,res){
  Task.findOne({name:req.params.name},function(err,doc){
      console.log(doc)  // this will contain db object
  })
})


server.get("/tasks",function(req,res){
  Task.find({},function(err,docs){
      console.log(docs); // this is an array which contains all task objects
      
    })
})



/////update 

server.put("/tasks/:title",function(req,res){
  Task.findOneAndUpdate({title:req.params.title},{title:'YouStart'},{overwrite:true},function(err,doc){
      console.log(doc) 
      res.json(Task); // this will contain db object
  })
})

server.put("/task/:title",function(req,res){
  Task.findOneAndUpdate({title:req.params.title},{$set:{title:'YouStart'}},function(err,doc){
      console.log(doc) 
      res.json(Task) // this will contain db object
  })
})


////delete


server.delete("/taskes/:title",function(req,res){
  Task.findOneAndDelete({title:req.params.title},function(err,doc){
      console.log(doc)  // this will contain deleted object object
  })
})
*/


//////read a object

/*server.get("/task/:name",function(req,res){
  Task.findOne({name:req.params.name},function(err,doc){
      console.log(doc)  // this will contain db object
  })
})*/


server.get("/tasks",function(req,res){
  Task.find({},function(err,docs){
      console.log(docs); // this is an array which contains all task objects
      
    })
})



/////update 

server.put("/tasks/:title",function(req,res){
  Task.findOneAndUpdate({title:req.params.title},{title:'YouStart'},{overwrite:true},function(err,doc){
      console.log(doc) 
      res.json(Task); // this will contain db object
  })
})

server.put("/task/:title",function(req,res){
  Task.findOneAndUpdate({title:req.params.title},{$set:{title:'YouStart'}},function(err,doc){
      console.log(doc) 
      res.json(Task) // this will contain db object
  })
})


////delete


server.delete("/taskes/:title",function(req,res){
  Task.findOneAndDelete({title:req.params.title},function(err,doc){
      console.log(doc)  // this will contain deleted object object
  })
})
server.listen(8081,function(){
    console.log("server started")
})
