exports.up = function (knex, Promise) {
    return knex.schema.createTable("profiles", (profile) => {
        profile.increments("id")
        profile.string("first_name").notNullable()
        profile.string("last_name").notNullable()
        profile.string("url").notNullable()
        profile.integer("accountUser_id").references("id").inTable("accountUsers").onDelete("CASCADE")
        profile.integer("rating_id").references("id").inTable("ratings").onDelete("CASCADE")
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("profiles")
};