import React from 'react'

import './Chart.css'
import Chartbar from './CharBar'
function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues);
    console.log('maxValue -- ' + totalMaximum)
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => (
                <Chartbar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
            ))}
        </div>
    )
}

export default Chart
