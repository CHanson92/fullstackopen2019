import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = props => {
	return (
		<p>
			{props.text}: {props.value}
		</p>
	);
};

const Statistics = props => {
	if (props.all === 0) {
		return <p>No feedback given</p>;
	}
	return (
		<div>
			<h1>Statistics</h1>
			<table>
				<tbody>
					<tr>
						<td>
							<Statistic text='Good' value={props.setGood} />
						</td>
					</tr>
					<tr>
						<td>
							<Statistic
								text='Neutral'
								value={props.setNeutral}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<Statistic text='Bad' value={props.setBad} />
						</td>
					</tr>
					<tr>
						<td>
							<Statistic text='All' value={props.all} />
						</td>
					</tr>
					<tr>
						<td>
							<Statistic
								text='Average'
								value={(props.all / 3).toFixed(2)}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<Statistic
								text='Positive'
								value={
									((props.setGood / props.all) * 100).toFixed(
										2,
									) + '%'
								}
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
	// save clicks of each button to own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<>
			<h1>Give Feedback</h1>
			<Button onClick={() => setGood(good + 1)} text='good' />
			<Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
			<Button onClick={() => setBad(bad + 1)} text='bad' />
			<Statistics
				setGood={good}
				setNeutral={neutral}
				setBad={bad}
				all={good + neutral + bad}
			/>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
