import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Filter from './components/Filter';
import AddPerson from './components/AddPerson';
import Persons from './components/Persons';
import './index.css';
import axios from 'axios';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [search, setSearch] = useState('');

	useEffect(() => {    
		axios      
			.get('http://localhost:3001/persons')      
			.then(response => {              
				setPersons(response.data)      
			})  
		}, []);

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
