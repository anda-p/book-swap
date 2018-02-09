import React from 'react';
import {connect} from 'react-redux';

class AllBooks extends React.Component {
  render() {
    return (
      <div>
        <h1> These are all the books </h1>
        {this.props.books.map((book, index)=> <p key={index}> {book.title} </p>)}
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