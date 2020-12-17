const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))
server.use(express.static('images'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", (req, res) => {
    return res.render("home")
})

server.get("/blog", (req, res) => {
    return res.render("blog")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  })


server.listen(5000, () => {
    console.log("server is runing")
})

