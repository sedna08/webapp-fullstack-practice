# This repository is a practice fullstack development using NextJS for Frontend, NodeJS backed, and PostgreSQL database

## How To Run

### Run docker compose
- run command in CLI
    - `docker compose build`
    - `docker compose up -d`

- Once containers are running. migrate prisma schema, run command
    - `docker exec -it backend npx prisma migrate dev --name init`
        - This will create the Table "User" in the database

- To check table in the database if it is created after prisma migration, run command to go into psql database
    - `docker exec -it db psql -U user`
    - `user#\c mydb`
    - `user#\dt` - To check relations
    - `user#select * from "User";` This will show empty rows in the table.