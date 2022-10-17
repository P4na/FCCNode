//importo il modulo express dopo averla installata
const express = require("express")

//importa il etodo all'interno della variabile app, facendo così puoi effettivamente usare express
const app = express()

//creo un collegamento online di tipo GET al percorso localhost:<portaInserita dentro listen> + <elemento scritto nel primo param>
app.get("/", (req,res)=>{
    res.send("hello world")
})

app.get("/about", (req, res)=>{res.send("about")})

app.get("/contact", (req, res)=>{res.send("contact")})

// prendo qualsiasi percorso non gestito da app e li do una risposta uguale a tutte
app.all("*", (req, res)=>{ res.send("risorsa non trovata")})


// apro un collegamento alla porta 3000 per metterlo online
app.listen(3000)


