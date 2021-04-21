const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('new release v9') // change this string to ensure a new version deployed
  // another comment ex 11.16
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
