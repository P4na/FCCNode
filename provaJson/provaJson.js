/** PROVA JSON
 * creato persona.js e utilizzato per inserire un oggetto
 * che poi richiamo dentro alla main page e mando a schermo con res.json
 */

 const express = require("express")
 const app = express()
 
 const {persone} = require("./persone")
 
 app.get("/", (req,res)=>{
     res.send("homepage")
 })
 
 app.get("/persone", (req,res)=>{
    res.json(persone)
})

 app.listen(3000)