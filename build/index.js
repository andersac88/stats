"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
console.log(reader.data);
var MatchResult;
(function (MatchResult) {
    MatchResult["Homewin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Manchester United' && match[5] === MatchResult.Homewin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Manchester United' &&
        match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Manchester United won " + manUnitedWins + " games");
