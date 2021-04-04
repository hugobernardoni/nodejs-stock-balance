require('dotenv').config({  
    path: process.env.NODE_ENV === "dev" ? ".env.development" : ".env"
  })
const express = require('express')

const app = express();
app.get('/', (req, res) => {
    res.send('OkkkkK');
})

app.listen(process.env.PORT, () => console.log(`Server running in port ${process.env.PORT}`))

module.exports = app;