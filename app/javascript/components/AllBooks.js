import React from 'react';
import {connect} from 'react-redux';

import BookSummary from './BookSummary';

class AllBooks extends React.Component {
  render() {
    return (
      <div className="container">
        <h1> These are all the books </h1>
        {this.props.books.map((book, index)=> 
        <div key={index}>
          <BookSummary {...book} />
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