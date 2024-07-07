# UCSA-DB

User Champion Stat Aggregator Database

# Docker

The database runs on docker and to create the docker simply run the script

`scripts/docker/create_container.sh`

To clean up the image and containers you can run the script

`scripts/docker/create_container.sh`

If you're getting an error running the scripts than add permission with

`chmod +x <script location>`

# Config

To change the config environment in `config/config.ts` just set the global env `ENV=<desired enviornment>` and update the `config/config.ts` with the enviornment config

# Create A Migration

`npm install -g knex`

`npm install -g ts-node`

`knex migrate: make <migration description> -x ts`

# Run Migrations

`npm run migrations`

# Technology

Docker\
Knex\
PostgreSQL
