import express from "express";
import {readFile} from 'fs/promises'


const app = express()

app.get("/",async (request,response) =>{
  response.send(await readFile('./index.html','utf-8'));
});

app.listen(5000,()=>{
  console.log(`listening to http://localhost:5000`)
});

