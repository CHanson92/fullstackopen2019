import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const RandomButton = ({ onClick }) => (
	<button onClick={onClick}>Next anecdote</button>
);

const VoteButton = ({ onClick }) => <button onClick={onClick}>Vote</button>;

const App = props => {
	const [selected, setSelected] = useState(0);
	const mostVotes = Math.max.apply(null, props.votes);
	const mostVotesIndex = props.votes.indexOf(mostVotes);

	return (
		<>
			<h1>Anecdote of the day</h1>
			<RandomButton
				onClick={() => setSelected(Math.floor(Math.random() * 6))}
			/>
			<VoteButton onClick={() => (props.votes[selected] += 1)} />
			<p>{props.anecdotes[selected]}</p>
			<p>This anecdote has {props.votes[selected]} votes</p>
			<h1>Anecdote with the most votes</h1>
			<p>{props.anecdotes[mostVotesIndex]}</p>
			<p>has {mostVotes} votes</p>
		</>
	);
};

let voteArray = new Array(6).fill(0);

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(
	<App anecdotes={anecdotes} votes={voteArray} />,
	document.getElementById('root'),
);
