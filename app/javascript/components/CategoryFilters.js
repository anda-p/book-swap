import React from 'react';
import Checkbox from './Checkbox';
import {connect} from 'react-redux';
import {toggleFilter} from '../actions/filterActions';

const CategoryFilters = ({ filters, toggleFilter }) => (
  <div class="row">
    {filters.all.map((filter, index)=>
    <div className="col-md-2">
      <Checkbox text={filter.name} 
                key={index} 
                onChange={(checked) => toggleFilter(filter.name, checked)}
                checked={filter.enabled}/>
    </div>            
    )}
  </div>      
);

const mapStateToProps = (state, ownProps) => { 
  return { filters : state.filters } 
}

const mapDispatchToProps = {
  toggleFilter
 };

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilters);