import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';
import axios from 'axios';

const App = () => {
	const [countries, setCountries] = useState([]);
	const [search, setSearch] = useState('');

	const handleSearchChange = event => {
		setSearch(event.target.value);
	};

	const showCountryInfo = () => {
		const list = countries.filter(i => i.name.search(search) !== -1);
		const filteredList = list.map(i => (
			<div>
				<h1>{i.name}</h1>
				<p>Capital: {i.capital}</p>
				<p>Population: {i.population}</p>
				<h2>Languages</h2>
				<ul>
					{i.languages.map((l, index) => (
						<li key={index}>{l.name}</li>
					))}
				</ul>
				<img alt={i.name} src={i.flag} />
			</div>
        ));
        return filteredList;
	};

	const showCountries = () => {
		const list = countries.filter(i => i.name.search(search) !== -1);
		const filteredList = list.map((i, index) => (
			<p key={index}>
				{i.name} <button onClick={() => showCountryInfo}>show</button>
			</p>
		));
		if (filteredList.length > 10) {
			return <p>Too many matches, specify another filter</p>;
		} else {
			return filteredList;
		}
	};

	useEffect(() => {
		axios.get('https://restcountries.eu/rest/v2/all').then(response => {
			setCountries(response.data);
		});
	}, []);

	return (
		<>
			<SearchBar
				value={search}
				handleSearchChange={() => handleSearchChange}
			/>
			<CountryList showCountries={() => showCountries()} />
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
