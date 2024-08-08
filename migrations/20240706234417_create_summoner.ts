import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('summoner', (table) => {
    table.string('summoner').notNullable();
    table.string('tag').notNullable();
    table.string('summonerName').notNullable();
    table.string('accountId').notNullable();
    table.string('summonerId').notNullable();
    table.integer('summonerLevel').notNullable();
    table.integer('profileIconId').notNullable();
    table.dateTime('updatedAt').notNullable();
    table.primary(['summoner', 'tag']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('summoner');
}
