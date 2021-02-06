#!/bin/bash
docker-compose -f ../docker/docker-compose.dev.yml up -d && docker-compose -f ../docker/docker-compose.dev.yml logs -f