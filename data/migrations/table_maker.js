exports.up = function (knex) {
    return knex.schema.createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name', 50)
            .notNullable()
        table.string('project_description', 150)
        table.boolean('project_completed')
             .defaultTo(false)
    })
    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name', 50)
             .unique()
             .notNullable()
        table.string('resource_description', 150)
    })
    .createTable('tasks', table => {
        table.increments('task_id')
        table.string('task_description', 150)
             .notNullable()
        table.string('task_notes', 150)
        table.boolean('task_completed')
             .defaultTo(false)
        table.integer('project_id')
             .unsigned()
             .notNullable()
             .references('project_id')
             .inTable('projects')
             .onUpdate('CASCADE')
             .onDelete('CASCADE')
    })
    .createTable('project_resources', table => {
        table.increments('project_resource_id')
        table.integer('project_id')
             .unsigned()
             .notNullable()
             .references('project_id')
             .inTable('projects')
             .onUpdate('CASCADE')
             .onDelete('CASCADE')
        table.integer('resource_id')
             .unsigned()
             .notNullable()
             .references('resource_id')
             .inTable('resources')
             .onUpdate('CASCADE')
             .onDelete('CASCADE')
    })
}

exports.down = function (knex) {
   return knex.schema
   .dropTableIfExists('project_resources')
   .dropTableIfExists('tasks')
   .dropTableIfExists('resources')
   .dropTableIfExists('projects');
}