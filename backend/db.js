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

mongoose.connect(process.env.DB_URL_MONGO);

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
