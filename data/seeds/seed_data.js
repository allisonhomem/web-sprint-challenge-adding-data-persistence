const projects = [
    {
        project_name: "paint the house",
        project_description: "wainscott and paint downstairs",
        project_completed: true
    }
]

const resources = [
    {
        resource_name: "sage grey paint",
        resource_description: "make sure to get satin finish"
    },
    {
        resource_name: "paint brush",
        resource_description: "four inch angle brush"
    },
    {
        resource_name: "1 inch by 1 inch wood boards",
        resource_description: null
    }
]

const tasks = [
    {
        task_description: "paint wall and wood boards",
        task_notes: null,
        task_completed: 1,
        project_id: 1,
    },
    {
        task_description: "create wainscotting",
        task_notes: "nail wood to wall according to design pattern",
        task_completed: 0,
        project_id: 1
    }
]

const project_resources = [
    {
        project_id: 1,
        resource_id: 1
    },
    {
        project_id: 1,
        resource_id: 2
    },
    {
        project_id: 1,
        resource_id: 3
    }
]

exports.projects = projects;
exports.resources = resources;
exports.tasks = tasks;
exports.project_resources = project_resources;

exports.seed = async function (knex) {
    await knex('projects').insert(projects);
    await knex('resources').insert(resources);
    await knex('tasks').insert(tasks);
    await knex('project_resources').insert(project_resources);
}