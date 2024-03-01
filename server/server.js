
import express from "express"
import React from "react"
// import MyComponent from "../src/MyComponent" 

const app = express()

app.get("/", (req, res) => {
    
  //render MyComponent here
  res.send();
})

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})
