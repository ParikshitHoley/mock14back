const express = require("express")
const { dashboard, randomWord, addUser } = require("../controllers/user.controller")

const userRouter = express.Router()

userRouter.post("/",addUser)
userRouter.get("/dashboard",dashboard)
userRouter.get("/randomword", randomWord)


module.exports = {
    userRouter
}