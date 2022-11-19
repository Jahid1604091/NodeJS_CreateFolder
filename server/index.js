const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000; 

app.get('/',(req,res)=>{
    res.send('API running...')
})

app.use(express.json());
app.use('/api/folder',require('./api/create'))
app.use('/api/folder',require('./api/read'))

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode...`)
})
