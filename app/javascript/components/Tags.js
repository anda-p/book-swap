import React from 'react';

import {colors} from '../tagColors';

const Tags = ({ values }) => (
    <p>
        {values.map((tag, index)=>
            <span className="badge badge-default tag" key={index}
                style={{ background: colors[tag]}}>{tag}</span>)}
    </p>    
);

export default Tags;