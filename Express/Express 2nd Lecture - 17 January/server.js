const express = require('express');
const app=express();

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    console.log(`IP:${req.ip}`)
    next(); // Pass control to the next middleware
});

app.get('/', (req, res) => {
    res.send('Root Directory!');
});
app.get('/home', (req, res) => {
    res.send('Home Page');
});
app.get('/about/:comment/:id/Rave', (req, res) => {
    // res.send(`About Page: ${req.params}`);
    const { comment, id } = req.params;
    res.send(`About Page: ${comment} ${id}`);
});

app.listen(2727, () => {
    console.log('Server is running on port 3000');
});