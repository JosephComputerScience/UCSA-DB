import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('summoner', (table) => {
    table.string('summoner').notNullable();
    table.string('tag').notNullable();
    table.primary(['summoner', 'tag']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('summoner');
}
