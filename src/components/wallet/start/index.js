import React from 'react'

function Start(){
    return(
        <div className="container">
            <div className="row">
                <div className="btn btn-dark col-2 pt-3 rounded">启动</div>
                <div className="col-2"></div>
                <div className="col-8 border">
                    <div className="row">
                        <div className="col">预计获得TIME</div>
                        <div className="col">22855.7701</div>
                    </div>
                    <div className="row border">
                        <div className="col">
                            进度条
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start;