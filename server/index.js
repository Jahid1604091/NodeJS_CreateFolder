const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000; 
const connectDB = require('./db');
const path = require('path');
connectDB()


app.use(express.json({extended:false}));
app.use('/api/folder/create',require('./api/create'))
app.use('/api/folder/read',require('./api/read'))
app.use('/api/folder/delete',require('./api/delete'))


app.use('/root',express.static(path.join(__dirname,'/root')))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../client/build')));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../client','build','index.html'))
    })
}
else{
    app.get('/',(req,res)=>{
        res.send('API running...')
    })
}

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode...`)
})
