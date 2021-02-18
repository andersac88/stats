"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
var Summary_1 = require("./Summary");
//import { HtmlReport } from './reportTargets/HtmlReport';
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
var staticMatchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
staticMatchReader.load();
// const summary = new Summary(new WinsAnalysis('Liverpool'), new HtmlReport());
// summary.buildAndPrintReport(matchReader.matches)
var staticSummary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
staticSummary.buildAndPrintReport(staticMatchReader.matches);
