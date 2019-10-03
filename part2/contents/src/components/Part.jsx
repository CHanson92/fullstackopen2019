import React from 'react';

const Part = props => {
    const flatArray = props.parts.reduce((total, amount) => {
        return total.concat(amount);}, [])
	return (
        <>
            {flatArray.map((i, index) => <p key={index}>{i.name}: {i.exercises}</p>)}
        </>
    );
};

export default Part;
