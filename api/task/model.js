const db = require('../../data/dbConfig.js');

async function getTasks() {
    return db('tasks as t')
           .leftJoin('projects as p','t.project_id', 'p.project_id')  
}

async function getTaskById(task_id) {
    return db('Tasks').where('task_id', task_id).first();
}

async function createNewTask(newTask) {
     const [id] = await db('tasks').insert(newTask);
     return getTaskById(id);
}

module.exports = {
    getTasks,
    createNewTask
}

