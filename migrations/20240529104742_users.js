
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
		table.increments('id').primary();
		table.string('name', 50).notNullable();
        table.string('email', 80).notNullable();
		table.timestamp('createdAt').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
	})
};


exports.down = function(knex) {
  
};
