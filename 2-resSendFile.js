const express = require("express")

const app = express()

app.get("/", (req,res)=>{
    res.sendFile("homepage.html", {root: __dirname+"/public"});
})

app.get("/about", (req,res)=>{
    res.sendFile("about.html", {root: __dirname+"/public"});
})

app.get("/contact", (req,res)=>{
    res.sendFile("contact.html", {root: __dirname+"/public"});
})

app.all("*", (req,res)=>{
    res.sendFile("404.html", {root: __dirname+"/public"});
})


app.listen(3000)

//res.SendFile(paginaDaUsare, percorso dentro oggetto anonimo : {root: percorso})