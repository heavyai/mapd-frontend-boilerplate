import React from 'react'
import 'mapd3/dist/mapd3.css'
import { Chart, DataManager } from 'mapd3'

const styles = require( './LineChart.sass' )


// time, number, string
const keyType = 'time'
const dataConfig = {
  keyType,
  range: [ 0, 100 ],
  pointCount: 100,
  groupCount: 1,
  lineCount: 1,
  stringMinMaxLength: [ 5, 10 ],
  randomStepSize: 50,
  nullRatio: 10
}
const dataManager = DataManager()
  .setConfig( dataConfig )
const data = dataManager.generateTestDataset()

const chartConfig = {
  keyType: 'time',
  chartType: 'line',
  tooltipIsEnabled: false,
  legendIsEnabled: false,
  binningIsEnabled: false,
  xDomainEditorIsEnabled: false,
  yDomainEditorIsEnabled: false,
  brushRangeIsEnabled: false,
  brushIsEnabled: true
}


type Props = {}

const LineChart: React.StatelessComponent<Props> = () => {
  const initializeChart = ( ref: HTMLDivElement ) => {
    Chart( ref )
      .setConfig( chartConfig )
      .setData( data )
  }

  return (
    <div className={ styles.wrapper }>
      <div className={ styles.container } ref={ initializeChart } />
    </div>
  )
}


export default LineChart
