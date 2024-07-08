const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ message: "message from docker" });
  });
  
app.listen(9000,()=> console.log("Application running on port 9000"));