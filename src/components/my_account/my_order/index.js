import React from 'react';

function ORDER(){
    return(
        <div className='container'>
            <div className="row">
                <h5 className='float-left'>订单</h5>
                <small className="ml-3">这些年的业绩</small>
            </div>
            <div className='row p-4 border shadow p-3 mb-5 bg-white rounded'> 
                    <div className="col">
                        <p>共振定单</p>
                    </div>
                    <div className="col">
                        <p>时光机订单</p>
                    </div>
                    <div className="col">
                        <p></p>
                    </div>
            </div>
        </div>
    )
}

export default ORDER;