const express = require("express");
const app = express();
const { conf } = require("./utils/connection");
const cors = require("cors");

app.use(express.json());
app.use(cors({}));

conf();

const projectRoutes = require("./routes/project");
const skillRoutes = require("./routes/skills");
const messageRoutes = require("./routes/messages");


app.use("/projects", projectRoutes);
app.use("/skills", skillRoutes);
app.use("/message", messageRoutes);

app.listen(5000, () => {
  console.log("App listening on port 5000");
});
