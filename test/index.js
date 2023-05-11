const express = require("express")
const bodyParser = require ("body-parser")
var cors = require('cors')
const jsonParser = express.json()

const sqlite3 = require('sqlite3')
const{open} =require('sqlite')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
let db = new sqlite3.Database("./db/finder.db")

app.use(cors())

open({
    filename: "./db/finder.db",
    driver: sqlite3.Database
}).then((db)=>{
    app.get('/people/', async(req, res)=>{
        const people = await db.all("SELECT * FROM People")
        res.json(people)
        console.log(people)
    })
    
    app.post("/people/",jsonParser, (req,res)=>{
        let {name, nickname, password} = req.body;

        db.run ("INSERT INTO People(name , nickname)VALUES(?,?)",["name" , "nickname"],function(err){
            if(err){
                return console.log(err)
                
            }
            else{
                console.log("dobavili_first")
                res.redirect('/')
            }
        })
       
    })

    
    
    app.get('/team', async(req, res)=>{
        const team = await db.all("SELECT * FROM Team")
        res.json(team)
    })
    app.get('/lk', async(req, res)=>{
        const lk = await db.all("SELECT * FROM LK")
        res.json(lk)
    })
    app.get('/game', async(req, res)=>{
        const game = await db.all("SELECT * FROM Game")
        res.json(game)
    })
    app.post("/team",jsonParser, (req,res)=>{
        res.json({
            code:200,
            data:req.team
        })
    })
    app.get('/tournirs', async(req, res)=>{
        const tournirs = await db.all("SELECT * FROM Tournirs")
        res.json(tournirs)
    })

    app.listen(3000,()=>{
        console.log("rabotaet"+3000)
    })

})

// function addForm(){
// db.run("INSERT INTO People(name, nickname, gender) VALUES('dadaya','nickname','gender')",(err) => {
// 	if(err) {
// 		return console.log(err.message); 
// 	}
// 	console.log('DOBAVILI-Name');
// })
// db.close()
// }


// db.run("DELETE FROM People WHERE id>1",(err) => {
// 	if(err) {
// 		return console.log(err.message); 
// 	}
// 	console.log('delete name');
// })









// expres nodemon sqlite sqlite3 установить