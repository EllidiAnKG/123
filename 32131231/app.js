const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const pageContacts = require("./view/vipupu")
const pageContacts1 = require("./view/vipupu1")
const pageContacts2 = require("./view/vipupu2")
const pageContacts3 = require("./view/vipupu3")

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}))

app.get('/contacts', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"21.12.2000"
    }
    response.send(pageContacts)
    response.json(student)
})
app.get('/about', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"21.12.2000"
    }
    response.send(pageContacts1)
    response.json(student)
})
app.get('/main', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"21.12.2000"
    }
    response.send(pageContacts2)
    response.json(student)
})
app.get('/shop', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"21.12.2000"
    }
    response.send(pageContacts3)
    response.json(student)
})



app.listen(8001,()=>{
    console.log("8000 port")
})