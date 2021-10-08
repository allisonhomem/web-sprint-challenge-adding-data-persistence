const router = require('express').Router();
const Resources = require('./model.js');


router.get('/', (req, res, next) => {
    try {
        res.json({message: "get resources is working"})
    }
    catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    try{
        res.json({message: "post new resource is working"})
    }
    catch (err) {
        next(err)
    }
})


router.use((req, res, next, err) => {
    res.status(500).json({
        customMessage: "an error occurred accessing the resources database",
        message: err.message
    })
})

module.exports = router;
