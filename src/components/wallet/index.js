import React from 'react';
import Assets from './assets';
import Start from './start';
import Timc_Assets from './timc_assets';
import Timc_deposit from './timc_deposit';
import Timc_price from './timc_price';
import Time_price from './time_price';

function Wallet(){
    return(
        <div className="container">
            <Assets />
            <Start />
            <Time_price />
            <Timc_price />
            <Timc_deposit />
            <Timc_Assets />
        </div>
    )
}

export default Wallet;