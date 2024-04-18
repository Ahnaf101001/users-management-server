const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {id: 1, name: "Farabi", email:"farabi@gmail.com"},
    {id: 5, name: "Surjo", email:"surjo@gmail.com"},
    {id: 2, name: "Hasan", email:"hasan@gmail.com"},
    {id: 3, name: "Noyon", email:"noyon@gmail.com"},
    {id: 4, name: "Rahad", email:"rahad@gmail.com"},
    {id: 5, name: "Fahim", email:"fahim@gmail.com"},
]

app.get('/', (req, res) =>{
    res.send('Users Management Server is running!!!!!!');
});

app.get('/users', (req, res) =>{
    res.send(users);
});

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});