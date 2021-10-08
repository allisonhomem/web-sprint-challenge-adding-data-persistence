const db = require('../../data/dbConfig.js');

async function getResources() {
    return db('resources');
}

async function getResourceById(resource_id) {
    return db('resources').where('resource_id', resource_id).first();
}

async function getResourceByName(resource_name) {
    return db('resources').where('resource_name', resource_name).first()
}

async function createNewResource(newResource) {
     const [id] = await db('resources').insert(newResource);
     return getResourceById(id);
}

module.exports = {
    getResources,
    getResourceByName,
    createNewResource
}
