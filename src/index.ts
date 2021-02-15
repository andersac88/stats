import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

console.log(reader.data);

enum MatchResult {
	Homewin = 'H',
	AwayWin = 'A',
	Draw = 'D',
}

let manUnitedWins = 0;

for (let match of reader.data) {
	if (match[1] === 'Manchester United' && match[5] === MatchResult.Homewin) {
		manUnitedWins++;
	} else if (
		match[2] === 'Manchester United' &&
		match[5] === MatchResult.AwayWin
	) {
		manUnitedWins++;
	}
}

console.log(`Manchester United won ${manUnitedWins} games`);
