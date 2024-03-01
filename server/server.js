
import express from "express"

// import MyComponent from "../src/MyComponent" 
import cors from "cors"
import bodyParser from "body-parser"

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post("/login", (req, res) => {
try {
  console.log(req.body,);
    const { name } = req.body;
    if(name){
 
      res.json({ name  });
    }
    return res.json({ mesage:"please enter a name" });
} catch (error) {
  console.log(error);
}

})

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})
