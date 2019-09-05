const express = require('express')
const app = express()

app.use('/css-router', express.static('docs'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/docs/index.html')
})

app.listen(3000)