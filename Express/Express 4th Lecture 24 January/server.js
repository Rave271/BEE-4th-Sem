const express= require('express');
const app=express();
const port = 2727;

app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.set('view engine','ejs');
app.get('/ejs',(req,res)=>{
    res.render('root',{title:'EJS',message:'Hello EJS'});
});
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});
 
