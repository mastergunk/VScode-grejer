// Detta deklarerar deppendencies och konstanta variabler
const express = require("express")
const app = new express()
const portNr = 8080

// Hämta in body-parser
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// Hämta in fs och deklarera filsökväg
const fs = require("fs")
const jsonFilePath = "./data.json"

// Detta startas när servern när Node kör scriptet, en listen metod
app.listen(portNr,()=>{
    console.log("Server ligger nu på 8080 och lyssnar") // console.log är samma som print i python
})

// Skapa en get metod till ROOT adressen
app.get("",(req,res)=>{
    res.send("Hello World!") // res = responde
})

app.get("/korv",(req,res)=>{
    res.send("Gott med korv!") // res = responde
})

app.get("/bild",(req,res)=>{ // /bild är en directory på server
    res.sendFile("photo-1471899236350-e3016bf1e69e.jpg", {root: __dirname}) // res = responde
})

//Skapa en POST metod
app.post("", (req, res) => {
    // I req.body ligger inkommande payload
    const payload = req.body
    // Payload innehåller 2st attribut: name, age
    //Skicka tillbaka response
    res.send(payload.name + " " + payload.age)
    //res.send()
    //let jsonData = JSON.stringify(DataTransfer, null, 2)

    //Sparar JSON string till fil
    //fs.writeFile(jsonFilePath, jsonData, (err) => )
})