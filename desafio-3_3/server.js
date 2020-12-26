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

server.get("/courses", (req, res) => {

    return res.render("courses", { items: cards})
})

server.get("/courses/:id", function(req,res){           //passando o id do curso pela rota 
  const id = req.params.id;                           //pegando o id da rota

  const course = cards.find(function(course){   //fazemos uma iteração com cada item do array dataCourse
      return course.id == id                          //verificamos se o id da rota é igual ao id de algum item no array
  })

  if(!course){
      return res.render("not-found")
  }

  return res.render("course", { item: course })

})


/* server.get("/courses", function(req, res){
  return res.render("courses", {items: dataCourses, dataLinks})       //enviando o arquivo de dados para o portifolio dentro da variavel items
}) */

/* server.get("/course", (req, res) => {

  return res.render("course", { items: content})

  
}) */

/*

server.get("/launchbase", (req, res) => {

  return res.render("launchbase", { items: cards})
})

server.get("/gostack", (req, res) => {

  return res.render("gostack", { items: cards})
}) */


/* server.get("/courses/:id", function(req, res) {
    const id = req.params.id;
  
    return res.send(`O id fornecido na rota é: ${id}`);
  }); */

/* server.get("/courses:id", function(req, res) {
   const id = req.params.url;
   const course = courses.find(course => course.id === id);
 
   if (!course) {
     return res.status(404).render("Erro 404 meu amigo");
   }
  
    return res.redirect(`/${course.id}`);
  }); */

server.use(function(req, res) {
    res.status(404).render("not-found");
  })

server.listen(5004, () => { 
    console.log("server is runing")
})