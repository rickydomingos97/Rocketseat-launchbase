const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))
server.use(express.static('images'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/teachers", (req, res) => {
 
    return res.render("teachers")
})

server.get("/students", (req, res) => {
 
    return res.render("students")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  })

server.listen(5000, () => { 
    console.log("server is runing")
})
