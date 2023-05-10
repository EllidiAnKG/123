const express = require("express")
const bodyParser = require ("body-parser")

const sqlite3 = require('sqlite3')
const{open} =require('sqlite')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
let db = new sqlite3.Database("./db/finder.db")

open({
    filename: "./db/finder.db",
    driver: sqlite3.Database
}).then((db)=>{
    app.get('/people', async(req, res)=>{
        const people = await db.all("SELECT * FROM People")
        res.json(people)
    })
    app.get('/team', async(req, res)=>{
        const people = await db.all("SELECT * FROM Team")
        res.json(people)
    })
    app.get('/people/lk', async(req, res)=>{
        const people = await db.all("SELECT * FROM LK")
        res.json(people)
    })
    app.get('/game', async(req, res)=>{
        const people = await db.all("SELECT * FROM Game")
        res.json(people)
    })
    app.get('/tournirs', async(req, res)=>{
        const people = await db.all("SELECT * FROM Tournirs")
        res.json(people)
    })

    app.listen(3000,()=>{
        console.log("rabotaet"+3000)
    })
})


 export function formAdder() {
    db.run("INSERT INTO People(name, nickname, gender) VALUES('dadaya','nickname','gender')",(err) => {
        if(err) {
            return console.log(err.message); 
        }
        console.log('DOBAVILI-Name');
    })
    db.close()
}








// expres nodemon sqlite sqlite3 установить