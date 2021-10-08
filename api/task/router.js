const router = require('express').Router();
const Tasks = require('./model.js');
const Projects = require('../project/model.js');


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

router.post('/', async (req, res, next) => {
    const {task_description, project_id} = req.body

    if (!task_description || !project_id) {
        res.status(404).json({message: "task description and project id are required fields"})
    }
    else {
        const validProject = await Projects.getProjectById(project_id);

        if (!validProject) {
        res.status(400).json({message: "must enter a valid project id"})
        }
        else {
            Tasks.createNewTask(req.body)
                 .then(task => {
                  const newTask = {
                    ...task,
                    task_completed: (task.task_completed===1) ? true : false
                 }
                 res.status(201).json(newTask)
                 })
                 .catch(err => next(err))
        }
    }
})

router.use((req, res, next, err) => {
    res.status(500).json({
        customMessage: "an error occurred accessing the tasks database",
        message: err.message
    })
})

module.exports = router;
