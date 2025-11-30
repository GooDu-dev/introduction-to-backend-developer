const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    const a = req.query.a
    const b = req.query.b

    result = a + b

    if (a == 2) {
        result = 40
    }

    res.json({
        name: "Hello World",
        result: result,
    })
})

app.post("/user", (req, res) => {
    // Create new user, product, game
    const name = req.body.name

    res.json({
        "message": "Created, " + name
    })
})

app.get("/user", (req, res) => {
    res.json({
        "user": "Devfle"
    })
})

app.listen(3000, () => {
    console.log("Server starts successfully")
})