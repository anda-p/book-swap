import React from 'react';

import {colors} from '../tagColors';

class Tags extends React.Component {
    render() {
        return (
            <p>
                {this.props.values.map((tag, index)=>
                    <span className="badge badge-default tag" key={index}
                        style={{ background: colors[tag]}}>{tag}</span>)}
            </p>    
        );
    }
}


export default Tags;