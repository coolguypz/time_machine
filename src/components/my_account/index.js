import React from 'react';
import ORDER from './my_order';
import REWARD from './my_reward';
import TOOL from './my_tools';

function MYACCOUNT(){
    return(
        <div className="container">
            <ORDER />
            <REWARD />
            <TOOL />
        </div>
    )
  
}

export default MYACCOUNT;