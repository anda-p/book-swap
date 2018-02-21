import React from 'react';
import {connect} from 'react-redux';

import BookSummary from './BookSummary';
import CategoryFilters from './CategoryFilters';

const BOOKS_PER_ROW = 3;

const splitInRows = (elements, noPerRow) => {
  let mappedRows = [], currentRow = [];

  elements.map((e, index)=>{
    if (index % noPerRow === 0 && index > 0){
      mappedRows.push(currentRow);
      currentRow = [];
    }    
    currentRow.push(e);
  });

  if (elements.length % noPerRow !== 0){
    mappedRows.push(currentRow);
  }

  return mappedRows;
}

const BooksContainer = ({ books }) => (
  <div className="container">
    <h1> These are all the books </h1>
    <CategoryFilters />
    {splitInRows(books, BOOKS_PER_ROW).map((bookRow, index)=> 
      <div className="row" key={index}>
        {bookRow.map((book, index)=>
          <BookSummary {...book} key={index}/>
        )}
      </div>)}
  </div>
);

function mapStateToProps(state, ownProps){
  return {
    books: state.books.filter(book => book.displayed)
  }
}

export default connect(mapStateToProps)(BooksContainer);