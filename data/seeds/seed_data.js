const projects = [
    {
        project_name: "paint the house",
        project_description: "wainscott and paint downstairs",
        project_completed: true
    }
]

const resources = [
    {
        resource_name: "urbane bronze paint",
        resource_description: null
    },
    {
        resource_name: "paint brush",
        resource_description: "four inch angle brush"
    }
]

exports.projects = projects;
exports.resources = resources;

exports.seed = async function (knex) {
    await knex('projects').insert(projects);
    await knex('resources').insert(resources);
}