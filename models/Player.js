const mongoose = require("mongoose");
const config = require("../config");

const schema = new mongoose.Schema({
    uuid: String,
    name: String,
    playerKills: Number,
    successfulRaids: Number,
    balance: Number,
    playTime: Number,
    entityKills: Number
});

module.exports = mongoose.model("Player", schema, config.mongoPlayerCollection);
