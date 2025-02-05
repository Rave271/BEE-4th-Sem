const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('Hello World');
});
app.get('/search', (req, res) => {
    console.log(req.query);
    const { name, age } = req.query;
    const intage=parseInt(age);
    // if(name === undefined){
    //     res.send("Please enter name");
    // }else{
    //     console.log(typeof(intage));
    //     res.send(`You searched for ${name} ${age}`);
    // }
    if(name === undefined){
        res.send("Please enter name");
    }else{
                res.send(`Welcome ${name} ! Your age is ${intage}`);
    }

    });
app.get('*', (req, res) => {
res.send('404 Not Found');
});
app.all('*', (req, res) => {
    res.send('404 Not Found for Any Post or Get requests');
    });
app.listen(2727, () => {
console.log('Server is running on http://localhost:2727');
});
