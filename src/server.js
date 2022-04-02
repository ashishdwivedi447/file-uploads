const app = require("./index.js");

const connect = require("./configs/db");

app.listen(5000, async (req, res) => {
  try {
    await connect();
    console.log("Listening at 5000");
  } catch (error) {
    console.log(error);
  }
});
