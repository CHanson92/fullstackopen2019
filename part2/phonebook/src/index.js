import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Filter from './components/Filter';
import AddPerson from './components/AddPerson';
import Persons from './components/Persons';
import './index.css';

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: +44123456789 },
		{ name: 'Chris Hanson', number: +44987654321 },
		{ name: 'Marija Ziterbart', number: +44456789123 },
		{ name: 'Johno Fisher', number: +987123456 },
	]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [search, setSearch] = useState('');

	const handleSearchChange = event => {
		setSearch(event.target.value);
	};

	const handleNameChange = event => {
		setNewName(event.target.value);
	};

	const handleNumberChange = event => {
		setNewNumber(event.target.value);
	};

	const addPerson = event => {
		event.preventDefault();
		console.log('I am working');
		const personObject = {
			name: newName,
			number: newNumber,
		};

		if (persons.find(i => i.name === newName)) {
			alert(`${newName} is already in the phonebook!`);
			setNewName('');
		setNewNumber('');
		} else {
			setPersons(persons.concat(personObject));
			setNewName('');
			setNewNumber('');
		}
	};
	
    const showList = () => {
		const list = persons.filter(i => i.name.search(search) !== -1);
		const filteredList = list.map((i, index) => <p key={index}>name: {i.name} number: {i.number}</p>)
		return filteredList;
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter value={search} handleSearchChange={() => handleSearchChange} />
			<AddPerson onSubmit={() => addPerson} persons={persons} newName={newName} newNumber={newNumber} handleNameChange={() => handleNameChange} handleNumberChange={() => handleNumberChange} />
			<Persons showList={() => showList()} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
