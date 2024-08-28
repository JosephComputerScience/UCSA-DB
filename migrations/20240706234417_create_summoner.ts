import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('summoner', (table) => {
    table.string('puuid').primary();
    table.string('tagLine').notNullable();
    table.string('summonerName').notNullable();
    table.string('accountId').notNullable();
    table.string('summonerId').notNullable();
    table.integer('summonerLevel').notNullable();
    table.integer('profileIconId').notNullable();
    table.dateTime('revisionDate').notNullable();
    table.dateTime('updatedAt').notNullable();
    table.index(['summonerName', 'tagLine'], 'indxSummonerNameTagLine');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('summoner');
}
