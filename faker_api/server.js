const express = require("express");
const app = express();
const port = 8000;
const Companies = require('./Companies')
const Users = require('./Users')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('<h1>yo</h1>')
})

app.get('/api/users/new', (req,res) =>{
    console.log(`Creating new user`)
    
    res.json(new Users())
    })

app.get('/api/companies/new', (req,res) =>{
    console.log(`Creating new company`)
        
    res.json(new Companies())
    })

app.get('/api/users/companies/new', (req,res) =>{
    console.log(`getting new company and user`)
            
    res.json({users: new Users(), companies: new Companies()})
    })





app.listen( port, () => console.log("Listening on port:" + port) );