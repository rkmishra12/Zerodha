const { model } = require("mongoose");

const { PositionSchema } = require("../schemas/PositionSchema");

const PositionModel = new model("postion",PositionSchema);

module.exports = PositionModel ;