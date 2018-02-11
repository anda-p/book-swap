import React from 'react';

class BookSummary extends React.Component {
    render() {
        return (
            <div className="col-md-4">
                <h3> {this.props.title} </h3>
                <hr />
                <p>
                    {this.props.description}
                </p> 
                {this.props.available ? 
                    <button type="button" className="btn btn-success">Borrow</button>
                : ""}   
            </div>    
        );
    }
}

export default BookSummary;