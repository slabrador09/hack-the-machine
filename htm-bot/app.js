const express = require('express')
const app = express()
const port = process.env.port || 8080

app.get('/', (req, res) => res.send('HackTheMachine!'))
app.get('/htmbot', (req, res) => res.send('HackTheMachine!'))
app.post('/htmbot', (req, res) => {
    res.status(201).json({msg: 'request accepted'})
})

app.listen(port, () => console.log(`HtmBot is listening on port ${port}!`))
