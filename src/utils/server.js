const express = require('express')
const nunjucks = require('nunjucks')
const utils = require('./utils')

const server = express()

nunjucks.configure('./src/views', {
  express: server,
  autoescape: true,
  watch: true
});
server.set('view engine', 'html');

// Auto-render any view file that exists
server.use("/:path", (req, res, next)=>{
  utils.matchRoutes(req, res, next)
  // TODO: Can this be simplified with pure res.render(req.params.path)?
})

// Serve anything in the assets folder
server.use(express.static('./src/assets'))

// Error handler
server.use(function (req, res, next) {
  res.status(404).send("Not found: There's no view file at that path")
})

const port = process.env.PORT || 3000
server.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})