const express = require('express');


const app = express();
const port = 3000


app.get("/", (req,res)=>{
    res.send('srcp hello world');
})


app.listen(port, ()=>{
    console.log("app is listening on the port", port);

})

