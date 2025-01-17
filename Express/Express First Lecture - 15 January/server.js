const express = require('express');
console.log('Hello World');
const app = express();
console.log(app);


app.get('/', (req, res) => {
    res.end('Hello World');
})
 
app.get('*', (req, res) => {
    res.end('404!');
});

app.listen(2727,()=>{
    console.log("Server is running on port 2727");
});