import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('user', (table) => {
    table.increments('id').primary();
    table.string('userGameId').notNullable();
    table.string('gameType').notNullable();
    table.json('metadata');
    table.dateTime('updatedAt', { useTz: false }).notNullable();
    table.dateTime('lastManualUpdatedAt', { useTz: false }).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('user');
}
