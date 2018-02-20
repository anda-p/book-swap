import React from 'react';
import {connect} from 'react-redux';

import BookSummary from './BookSummary';
import Filters from './Filters';

class AllBooks extends React.Component {
  booksInRows(){
    let mappedRows = [], currentRow = [];
    this.props.books.filter(book=>book.displayed).map((book, index)=>{
      if (index % 3 === 0 && index > 0){
        mappedRows.push(currentRow);
        currentRow = [];
      }    
      currentRow.push(book);
    });

    if (this.props.books.length % 3 !== 0){
      mappedRows.push(currentRow);
    }

    return mappedRows;
  }

  render() {
    return (
      <div className="container">
        <h1> These are all the books </h1>
        <Filters />
        {this.booksInRows().map((bookRow, index)=> 
          <div className="row" key={index}>
            {bookRow.map((book, index)=>
              <BookSummary {...book} key={index}/>
            )}
          </div>)}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(AllBooks);