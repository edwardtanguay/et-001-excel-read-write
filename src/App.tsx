import './App.scss';
import translations from './data/translations.json';

function App() {
	return (
		<div className="App">
			<h1>Excel Read/Write Example</h1>
			<p>Welcome to this site.</p>

			<h2>There are {translations.length} translations:</h2>

			<table className="blueTable">
				<tbody>
				{translations.map((translation, i) => {
					return (
						<tr className="translation" key={i}>
							<td className="fromLanguage">
								{translation.fromLanguage}
							</td>
							<td className="toLanguage">
								{translation.toLanguage}
							</td>
							<td className="toPhrase">
								{translation.toPhrase}
							</td>
							<td className="fromPhrase">
								{translation.fromPhrase}
							</td>
						</tr>
					);
				})}
				</tbody>
			</table>
		</div>
	);
}

export default App;
