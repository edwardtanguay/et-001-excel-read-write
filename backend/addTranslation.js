import Excel from 'exceljs';

const wb = new Excel.Workbook();
await wb.xlsx.readFile('./src/data/translations.xlsx');
const ws = wb.getWorksheet(1);

ws.getCell('A1').value = 'test';

const r3 = ws.getRow(3);
r3.values = [1, 2, 3, 4, 5, 6];

wb.xlsx
	.writeFile(fileName)
	.then(() => {
		console.log('file created');
	})
	.catch((err) => {
		console.log(err.message);
	});

console.log('saved.');
