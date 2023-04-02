const express = require('express')
const router = express.Router()
const fareController = require('../controllers/fareController')

router.post("/fare", (req, res, next) => {

    fareController.addFare(req)
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})


router.get("/fare", (req, res, next) => {

    fareController.getfare(req)
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {
            res.status(500).send(err)
        })
})




module.exports = router



