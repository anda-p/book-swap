import React from 'react';

import Tags from './Tags';

const BookSummary = ({title, description, tags, available}) => (
    <div className="col-md-4">
        <h3> {title} </h3>
        <hr />
        <p> {description} </p> 
        <Tags values={tags} />
        {available ? <button type="button" className="btn btn-success">Borrow</button>: ""}   
    </div>    
);

export default BookSummary;