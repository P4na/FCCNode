/** PROVA JSON
 * creato persona.js e utilizzato per inserire un oggetto
 * che poi richiamo dentro alla main page e mando a schermo con res.json
 */

 const express = require("express")
 const app = express()
 
 const {persone} = require("./provaJson/persone")
 
 app.get("/", (req,res)=>{
     res.send("homepage")
 })
 
 app.get("/persone", (req,res)=>{
    const nuovePersone = persone.map((persona)=>{
        const {nome, cognome, eta} = persona
        return {nome, cognome, eta}
    })
    res.json(nuovePersone)
})

app.get("/persone/:id", (req,res) => {
    const persona = persone.find((persona)=> persona.id === req.params.id)    
    res.json(persona)
})

 app.listen(3000)