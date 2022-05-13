const express2 = require("express")
const minhaAplicação = express2()

minhaAplicação.get("/", function(req,res) {
  res.send("New Route")
})

minhaAplicação.listen(4000)