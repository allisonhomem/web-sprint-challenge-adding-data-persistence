const db = require('../../data/dbConfig.js');

async function getTasks() {
    return db('tasks');
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

