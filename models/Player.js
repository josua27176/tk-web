const mongoose = require("mongoose");
const config = require("../config");

const schema = new mongoose.Schema({
    _id: String,
    name: String,
    playerKills: Number,
    successfulRaids: Number,
    balance: Array,
    playTime: Number,
    entityKills: Number
});

module.exports = mongoose.model("Player", schema, config.mongoPlayerCollection);
