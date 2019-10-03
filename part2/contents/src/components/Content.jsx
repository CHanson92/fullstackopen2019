import React from 'react';
import Part from './Part';

const Content = (props) => {
    return (
        <>
            <Part parts={props.content} />
        </>
    )
}

export default Content;
