import React from 'react'

function DataKit({children}) {
    return (
        <div className="DataKitWrapper">
            <h2 className="ActiveHeader">
                Active Miner Analysis
            </h2>
            {children}
        </div>
    )
}

export default DataKit;