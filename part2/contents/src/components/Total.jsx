import React from 'react';

const Total = props => {
	const flatArray = props.parts.reduce((total, amount) => {
		return total.concat(amount);}, [])
	const exercisesArray = flatArray.map(i => i.exercises);
	const reducer = (acc, value) => acc + value;
	const numberOfExercises = exercisesArray.reduce(reducer);
	return <strong>The total of exercises is {numberOfExercises}</strong>;
};

export default Total;
