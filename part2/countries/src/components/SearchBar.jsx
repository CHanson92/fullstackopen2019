import React from 'react';

const SearchBar = props => {
	return (
		<p>
			find countries{' '}
			<input
				value={props.search}
				onChange={props.handleSearchChange()}
			></input>
		</p>
	);
};

export default SearchBar;
