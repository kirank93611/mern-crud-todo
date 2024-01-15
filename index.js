// write basic express boilerplate code,
//wit express.json() middleware
const express=require("express");
const { createTodo, updateTodo }=require("./backend/types");
const { create } = require("domain");
const { parse } = require("path");
const app=express();
const {todo}=require("./db")

app.use(express.json());

app.post("/todo",async function(req,res) {
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    // put it in mongodb
})

app.get("/todos",async function(req,res) {
    const todo =await todo.find();
    console.log(todos) //promise

    res.json({
        todos
    })
})

app.put("/completed",async function(req,res) {
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }

    await todo.update({
        _id:req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})