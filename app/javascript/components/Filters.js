import React from 'react';
import Checkbox from './Checkbox';

class Filters extends React.Component {
  render() {
      return (
              <Checkbox
                onChange={(text) => alert(text)}
                text="All books" />
      );
  }
}

export default Filters;