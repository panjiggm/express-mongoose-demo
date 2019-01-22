const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const PORT = 8000 // Development Port

// use body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Initialize mongoose
const mongoose = require("mongoose")
const MONGODB_URI = `mongodb://localhost:27017/company`

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true
  }
)

const Schema = mongoose.Schema
const User = mongoose.model(
  "users",
  new Schema(
    {
      first_name: String,
      last_name: String,
      age: Number,
      address: {
        street: String,
        city: String,
        state: String
      }
    },
    { timestamps: true }
  )
)

app.post("/users", (req, res) => {
  User.create(req.body, (err, users) => {
    if (err) return res.send("Gagal cyt")

    res.send({
      data: users
    })
  })
  // res.send(req.body)
})

app.listen(PORT, () => console.log(`App running on ${PORT}`))
