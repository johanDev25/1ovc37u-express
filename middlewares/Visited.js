const mongoose = require("mongoose");
const PageView = require("../models/PageView");

const visited = async (req, res, next) => {
  const pageVisited = await PageView.create({ path: req.originalUrl, date: Date.now(), userAgent: req.get('User-Agent') })
  next();
}

module.exports = visited;
