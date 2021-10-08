const db = require('../../data/dbConfig.js');

async function getProjects() {
    return db('projects');
}

async function getProjectById(project_id) {
    return db('projects').where('project_id', project_id).first();
}

async function createNewProject(newProject) {
     const [id] = await db('projects').insert(newProject);
     return getProjectById(id);
}

module.exports = {
    getProjects,
    createNewProject
}
