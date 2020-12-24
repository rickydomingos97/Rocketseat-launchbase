const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const cards = require("./data")

server.use(express.static('public'))
server.use(express.static('images'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", (req, res) => {
    const data = {
        avatar_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*TkXVfLTwsHdwpUEjGzdi9w.jpeg&f=1&nofb=1",
        name: "Rocketseat",
        description: 'Evolua rápido como a tecnologia',
        techs: [
            { name: "Node.js"},
            { name: "Javascript"},
            { name: "React Native"},
            { name: "HTML / CSS"}
        ]
    }
    return res.render("home", { home: data })
})

server.get("/blog", (req, res) => {

    return res.render("blog", { items: cards})
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;
    const course = courses.find(course => course.id === id);
  
    if (!course) {
      return res.status(404).render("error404.njk");
    }
  
    return res.redirect(`https://rocketseat.com.br/${course.id}`);
  });

server.use(function(req, res) {
    res.status(404).render("not-found");
  })


server.listen(5300, () => { 
    console.log("server is runing")
})

