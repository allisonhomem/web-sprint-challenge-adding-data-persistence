const router = require('express').Router();
const Tasks = require('./model.js');


router.get('/', (req, res, next) => {
    Tasks.getTasks()
         .then(tasksArray => {
             const tasks = tasksArray.map(task => {
                 return {
                     ...task,
                     task_completed: (task.task_completed===1) ? true : false
                 }
             })
             res.status(200).json(tasks)
         })
         .catch(err => next(err))
})

router.post('/', (req, res, next) => {
    
})


router.use((req, res, next, err) => {
    res.status(500).json({
        customMessage: "an error occurred accessing the tasks database",
        message: err.message
    })
})

module.exports = router;
