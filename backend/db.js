const mongoose = require("mongoose");
const { boolean } = require("zod");
require("dotenv").config();
/*
{
    title:String,
    description:string,
    completed:Boolean
}

*/

mongoose.connect(
  "mongodb+srv://kiran:kiraniit1234@cluster0.021uocl.mongodb.net/todo"
);

mongoose.connection.once("open", () => {
  console.log("DB Connected.");
});

//mongodb url handy
//

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
