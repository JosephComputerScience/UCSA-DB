#!/bin/bash
# chmod +x <filename.sh> if getting permission error

# Variables
IMAGE_NAME="ucsa-db-image"
CONTAINER_NAME="ucsa-db-container"
POSTGRES_PASSWORD="password"
POSTGRES_USER="ucsa"
DB_NAME="ucsa-db"

# Check if the container already exists
if [ "$(docker ps -a -q -f name=$CONTAINER_NAME)" ]; then
  echo "Container $CONTAINER_NAME already exists."
else
  docker build -t $IMAGE_NAME -f Dockerfile .
  docker run --name $CONTAINER_NAME -e POSTGRES_DB=$DB_NAME -e POSTGRES_USER=$POSTGRES_USER -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD -p 5432:5432 -d $IMAGE_NAME
  echo "Container $CONTAINER_NAME created and running."
fi

until docker exec $CONTAINER_NAME pg_isready ; do sleep 1; done;

echo "Beginning npm run migrations"
npm run migrations
echo "Finished npm run migrations"