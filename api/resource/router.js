const router = require('express').Router();
const Resources = require('./model.js');


router.get('/', (req, res, next) => {
    Resources.getResources()
             .then(resources => {
                 res.status(200).json(resources)
             })
             .catch(err => next(err))
})

router.post('/', async (req, res, next) => {
    const {resource_name} = req.body

    const alreadyResourceName = await Resources.getResourceByName(resource_name)

    if(alreadyResourceName){
        res.status(400).json({message: "that resource already exists"})
    }
    else {
        Resources.createNewResource(req.body)
                 .then(newResource => {
                     res.status(201).json(newResource)
                 })
                 .catch(err => next(err))
    }
})


router.use((req, res, next, err) => {
    res.status(500).json({
        customMessage: "an error occurred accessing the resources database",
        message: err.message
    })
})

module.exports = router;
