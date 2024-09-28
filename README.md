# This repository is a practice fullstack development using NextJS for Frontend, NodeJS backed, and PostgreSQL database

## Prerequisite - Install Docker on your Machine

### For Windows:

1. Download Docker Desktop: Go to the Docker Desktop for Windows page and download the installer.
2. Run the Installer: Double-click the downloaded `Docker Desktop Installer.exe` to run the installer.
3. Follow the Installation Wizard: Follow the prompts in the installation wizard to complete the setup.
4. Start Docker Desktop: Once installed, start Docker Desktop from the Start menu.

### For macOS:
1. Download Docker Desktop: Visit the Docker Desktop for Mac page and download the installer.
2. Run the Installer: Open the downloaded .dmg file and drag the Docker icon to the Applications folder.
3. Start Docker Desktop: Open Docker from the Applications folder and follow the prompts to complete the setup.

### For Linux (Ubuntu example):
1. Update Your Packages:
    ```
    sudo apt-get update
    sudo apt-get install \
        ca-certificates \
        curl \
        gnupg \
        lsb-release
    ```
2. Add Docker’s Official GPG Key:
    ```
    sudo mkdir -p /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    ```
3. Set Up the Repository:
    ```
    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    ```
4. Install Docker Engine:
    ```
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```
5. Verify Installation:
    ```
    sudo docker run hello-world
    ```

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
    - `user#select * from "User";` - This will show empty rows in the table.

### Access Web-app
- access http://localhost:3000 in your web browser