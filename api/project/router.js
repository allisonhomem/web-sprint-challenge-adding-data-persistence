const router = require('express').Router();
const Projects = require('./model.js');

router.get('/', (req, res, next) => {
  
    Projects.getProjects()
            .then(array => {
                const projects = array.map(project => {
                    return {
                        ...project,
                        project_completed: (project.project_completed===1) ? true : false
                    }
                })
                res.status(200).json(projects)
            })
            .catch(err => next(err)) 
})

router.post('/', (req, res, next) => {
    const {project_name} = req.body

    if(!project_name) {
        res.status(404).json({message: "project name is required"})
    }
    else {
        Projects.createNewProject(req.body)
                .then(object => {
                    const newProject = {
                        ...object,
                        project_completed: (object.project_completed===1) ? true : false
                    }
                    res.status(201).json(newProject)
                })
                .catch(err => next(err))
    }
})


router.use((req, res, next, err) => {
    res.status(500).json({
        customMessage: "an error occurred accessing the projects database",
        message: err.message
    })
})

module.exports = router;
