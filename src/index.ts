import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
//import { HtmlReport } from './reportTargets/HtmlReport';

// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

const staticMatchReader = MatchReader.fromCsv('football.csv');
staticMatchReader.load();

// const summary = new Summary(new WinsAnalysis('Liverpool'), new HtmlReport());

// summary.buildAndPrintReport(matchReader.matches)

const staticSummary = Summary.winsAnalysisWithHtmlReport('Man United');

staticSummary.buildAndPrintReport(staticMatchReader.matches);
