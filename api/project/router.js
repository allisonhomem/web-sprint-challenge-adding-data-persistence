const router = require('express').Router();
const Projects = require('./model.js');

router.get('/', (req, res, next) => {
    try {
        res.json({message: "get projects is working"})
    }
    catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    try{
        res.json({message: "post new project is working"})
    }
    catch (err) {
        next(err)
    }
})


router.use((req, res, next, err) => {
    res.status(500).json({
        customMessage: "an error occurred accessing the projects database",
        message: err.message
    })
})

module.exports = router;
