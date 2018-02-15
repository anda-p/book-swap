import React from 'react';
import Checkbox from './Checkbox';
import {connect} from 'react-redux';
import {toggleFilter} from '../actions/filterActions';

class Filters extends React.Component {
  render() {
    const { all, active } = this.props.filters;
    const isActive = (filter) => active.indexOf(filter) !== -1;

    console.log(this.props.filters)
      return (
        <div>
          {this.props.filters.all.map((filter, index)=>
            <Checkbox text={filter} 
                      key={index} 
                      onChange={(checked) => this.props.toggleFilter(filter, checked)}
                      checked={isActive(filter)}/>
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