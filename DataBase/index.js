

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


const taskSchema = new Schema({
  item:  String,
  status:{type: Boolean,default:false},
  date: { type: Date, default: Date.now },    
});
const Task = mongoose.model('Task', taskSchema); 

server.post("/task",(req,res)=>{
  let task=new Task();
  task.item=req.body.newItem;
  console.log(req.body);
  task.save();
})
server.listen(8081,function(){
  console.log("server started")
})
