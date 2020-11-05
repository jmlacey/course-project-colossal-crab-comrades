"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducers = void 0;
var WeatherForecasts = require("./WeatherForecasts");
var Counter = require("./Counter");
var GlobalChat = require("./GlobalChat");
var GameMainMenuToggler = require("./GameMainMenuToggler");
var PlayerOutputProcessor = require("./PlayerOutputProcessor");
var GameData = require("./GameData");
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
exports.reducers = {
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer,
    globalchat: GlobalChat.reducer,
    gameMainMenuToggler: GameMainMenuToggler.reducer,
    playerOutputProcessor: PlayerOutputProcessor.reducer,
    gameData: GameData.reducer
};
//# sourceMappingURL=index.js.map