class StandartFunctions {
  async textStatusServer(PORT) {
    return console.log("server starting PORT " + PORT);
  }
}

module.exports = new StandartFunctions();
