import Excel from 'exceljs';

const fileName = './src/data/translations.xlsx';

const wb = new Excel.Workbook();
await wb.xlsx.readFile(fileName);
const ws = wb.getWorksheet(1);

// ws.getCell('A1').value = 'test';

const r3 = ws.getRow(3119);
r3.values = ['English', 'German', 'house', 'das House'];

wb.xlsx
	.writeFile(fileName)
	.then(() => {
		console.log('file changed');
	})
	.catch((err) => {
		console.log(err.message);
	});

console.log('saved.');
