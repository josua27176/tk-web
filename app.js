const config = require("./config")
const express = require("express");
const app = express();
const util = require("minecraft-server-util");
const Player = require("./models/Player");
const mongoose = require("mongoose");

app.use(express.static("public"));
app.set("view engine", "ejs");

let queries = {};

// Functions

function getQueries() {
    // Loop through servers to query
    for (let title in config.minecraftServers) {
        const server = config.minecraftServers[title];
        // Query server
        util.queryFull(server.ip, { port: server.port, timeout: 10000 })
        .then((response) => {
            // Set the query value of the server if it responds
            queries[title] = response;
        })
        .catch((error) => {
            if (title in queries) {
                // Remove server from queries if it doesn't respond
                delete queries[title];
            }
        });
    }
}

// Pages

app.get("/", (req, res) => {
    res.render("pages/index");
});

app.get("/profile/:uuid", async (req, res) => {
    const player = await Player.findOne({ uuid: req.params.uuid });
    res.render("pages/profile", { player: player });
});

app.get("/server", async (req, res) => {
    res.render("pages/server", { queries: queries });
});

app.get("/leaderboards", async (req, res) => {
    const players = await Player.find();
    res.render("pages/leaderboards", { players: players });
});

// 404

app.use((req, res) => {
    res.status(404);
    res.render("pages/404");
});

// Startup

// Query minecraft servers at an interval
setInterval(getQueries, config.minecraftServerQueryRate);
getQueries();

// Mongo
mongoose
    .connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to mongo");
    })
    .catch((err) => {
        console.log("Failed to connect to mongo");
        console.log(err);
    });

app.listen(config.port, () => console.log(`Express listening at http://localhost:${config.port}`));
