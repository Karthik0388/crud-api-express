const express = require("express");
const morgon = require("morgan");
const cors = require('cors');
const { PORT, NODE_ENV } = require("./config");
const { dbConnection } = require("./config/db");
const app = express();
const PostRoute = require("./Routes/student");

//*?---------------Database Connection starts here---------*/
dbConnection();
//*?---------------Database Connection ends here---------*/

//*!---------------Middleware Section starts here---------*/
if (NODE_ENV === "development") {
  app.use(morgon("dev"));
}
app.use(express.json());
//?cors
app.use(cors())
//*!---------------Middleware Section starts here---------*/

//?--------------------Load Routes starts Here--------------
app.use("/api/students/", PostRoute);
//?--------------------Load Routes ends Here--------------

//listen port
app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server is Running on Port number ${PORT}`);
});
