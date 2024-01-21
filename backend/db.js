const mongoose = require("mongoose");
const { boolean } = require("zod");

/*
{
    title:String,
    description:string,
    completed:Boolean
}
*/
mongoose.connection.once("once", () => {
  console.log("database connected");
});

mongoose.connect(
  "mongodb+srv://kiran:kiraniit1234@cluster0.021uocl.mongodb.net/todo"
);

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
