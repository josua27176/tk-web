# Tarkraft Website
https://tarkraft.com/

## Installation
You must have Node.js and npm installed.

Clone this repository and then run:
```sh
npm install
```
To start the program run:
```sh
npm start
```

## Running The Website
PM2 is a process manager which will keep the app running 24/7 and start up on boot etc.
Instructions on installation and usage can be found here https://www.npmjs.com/package/pm2

## Configuration
Example `config.json`
```json
{
    "port": 80,
    "minecraftServers": {
        "Server One": { "ip": "mc.hypixel.net", "port": 25565 }
    },
    "minecraftServerQueryRate": 10000,
    "mongoUri": "mongodb://localhost:27017/db",
    "mongoPlayerCollection": "player_stats"
}
```