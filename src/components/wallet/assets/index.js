import React from 'react'

function Assets(){
    const assetname = [
        {
            name:'通证USDT资产',
            price:'100',
            func:'提取'
        },
        {
            name:'TIME资产',
            price:'200',
            func:'提取'
        },
        {
            name:'光年值TOKEN',
            price:'9028.8468',
            func:''
        },
        {
            name:'节点TOKEN',
            price:'2020676.9953',
            func:''
        },
        {
            name:'元宇宙通证钱包(TIME)',
            price:'177456.7754',
            func:'充值'
        },
        {
            name:'元始积分',
            price:'1000',
            func:'划转'
        }
    ]
    return(
        <div className="container">

            {
                assetname.map(v => 
                <div className="container mb-2 p-2">
                    <div className="row mb-1 ">
                    <div className="float-left">{v.name}</div>
                    <div className="col">
                    {v.func ? <div className="float-right  btn btn-warning">{v.func}</div> : ""} 
                    {v.price ? <div className="float-right mr-3 ">{v.price}</div> : ""}
                    </div>
                    </div>
                    <div className="row border mt-2">
                    </div>
                </div>
                

                )
            }
            
        </div>
    )
}

export default Assets;