#!/bin/bash
docker-compose -f ../docker/docker-compose.prod.yml up -d && docker-compose -f ../docker/docker-compose.prod.yml logs -f