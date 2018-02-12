import React from 'react';

import tagColors from '../tagColors';

class Tags extends React.Component {
    render() {
        return (
            <p>
                {this.props.values.map((tag, index)=>
                    <span className="badge badge-default tag" key={index}
                        style={{ background: tagColors[tag]}}>{tag}</span>)}
            </p>    
        );
    }
}


export default Tags;