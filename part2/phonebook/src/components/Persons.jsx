import React from 'react';

const Persons = (props) => {

    return (
        <div>
            <h2>Numbers</h2>
            {props.showList()}
        </div>
    )
}

export default Persons;