#!/bin/bash
# chmod +x <filename.sh> if getting permission error

# Default values
CONTAINER_NAME=ucsa-db-container
IMAGE_NAME=ucsa-db-image

docker kill $CONTAINER_NAME
docker rm $CONTAINER_NAME
docker image rm $IMAGE_NAME