const mongoose=require('mongoose');


/*
{
    title:String,
    description:string,
    completed:Boolean
}
*/
mongoose.connect("mongodb+srv://kiran:Kiraniit%404321@cluster0.021uocl.mongodb.net/");
console.log("database connected");
//mongodb url handy
//

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);

module.exports={
todo
}