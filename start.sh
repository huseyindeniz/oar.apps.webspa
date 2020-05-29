eval $(cat .env.local | sed 's/^/export /')
docker-compose -f "docker-compose.yml" up -d --build