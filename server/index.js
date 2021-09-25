import express from 'express';
import cors from 'cors'
//components
import Connection from './connection/db.js';
import DefaultData from './default.js';
import route from './routes/route.js';
import bodyParser from 'body-parser';

const app  = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:true }))
app.use(bodyParser.json({extended:true }))
app.use('/',route)


const PORT = 4000
Connection();
app.listen(PORT,()=> console.log(`Server is running at ${PORT}`))
DefaultData();