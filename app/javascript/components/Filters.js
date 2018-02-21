import React from 'react';
import Checkbox from './Checkbox';
import {connect} from 'react-redux';
import {toggleFilter} from '../actions/filterActions';

class Filters extends React.Component {
  render() {
    return (
      <div class="row">
        {this.props.filters.all.map((filter, index)=>
        <div className="col-md-2">
          <Checkbox text={filter.name} 
                    key={index} 
                    onChange={(checked) => this.props.toggleFilter(filter.name, checked)}
                    checked={filter.enabled}/>
        </div>            
        )}
      </div>      
    );
  }
}

const mapStateToProps = (state, ownProps) => { 
  return { filters : state.filters } 
}

const mapDispatchToProps = {
  toggleFilter
 };

export default connect(mapStateToProps, mapDispatchToProps)(Filters);