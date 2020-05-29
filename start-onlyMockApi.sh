eval $(cat .env.local | sed 's/^/export /')
docker-compose -f "docker-compose.onlyMockApi.yml" up -d --build