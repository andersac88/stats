import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

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
