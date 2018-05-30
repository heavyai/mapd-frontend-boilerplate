import React from 'react'
import 'mapd3/dist/mapd3.css'
import { Chart, DataManager, autoFormatter, colors } from 'mapd3'

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

// line, area, stackedArea, bar, stackedBar or array of [line,bar]
const chartType = 'line'

const lineStyles = data.series.map(
  ( _value: any, index: number ) => [ 'solid', 'dashed', 'dotted' ][ index % 3 ]
)

const palette = data.series.map( ( value: any, index: number ) => ( {
  key: value.id,
  value: colors.mapdColors[ index ],
  style: lineStyles[ index ]
} ) )


const chartConfig = {

  // common
  width: 800,
  height: 400,
  margin: {
    top: 32,
    right: 70,
    bottom: 64,
    left: 80
  },

  // time, number, string
  keyType,

  // line, area, stackedArea, bar, stackedBar
  chartType,

  useScrolling: false,

  // intro animation
  isAnimated: false,

  animationDuration: 1500,

  // scale
  colorSchema: palette,

  defaultColor: '#a0f',
  xDomain: 'auto',
  yDomain: 'auto',
  y2Domain: 'auto',

  // data
  // totalAscending, totalDescending, alphaAscending, alphaDescending
  sortBy: 'alphaAscending',
  fillData: false,

  // axis
  tickPadding: 5,
  tickSizes: 8,
  yTicks: 'auto',
  y2Ticks: 'auto',
  xTickSkip: 'auto',

  // xAxisFormat: (d => `${d}%`), // 'auto', format compatible with d3-format or function
  // 'auto', format compatible with d3-format or function
  xAxisFormat: 'auto',
  yAxisFormat: ( ( value: any ) => `${ value }km/h` ),
  y2AxisFormat: '.2f',
  grid: 'horizontal',
  axisTransitionDuration: 0,
  labelsAreRotated: false,

  // hover
  dotRadius: 4,

  // tooltip
  // tooltipFormat: ['.4f', (d => `avg ${d}`)],
  tooltipFormat: autoFormatter( [ { key: 'Measure 0', format: '.6f' } ] ),
  // tooltipTitleFormat: '%b %d, %Y',
  tooltipTitleFormat: ( value: any ) => `${ value }m/s`,
  // tooltipTitleFormat: 'auto',
  // tooltipTitleFormat: '.6f',

  mouseChaseDuration: 0,
  tooltipIsEnabled: true,

  // format
  dateFormat: '%b %d, %Y',
  inputDateFormat: '%m-%d-%Y',
  numberFormat: '.2f',

  // legend
  legendXPosition: 'auto',
  legendYPosition: 'auto',
  legendTitle: 'Dataset',
  legendIsEnabled: true,

  // binning
  binningResolution: '1mo',
  binningIsAuto: true,
  binningToggles: [ '10y', '1y', '1q', '1mo' ],
  binningIsEnabled: true,

  // domain
  xLock: false,
  yLock: false,
  y2Lock: false,
  xDomainEditorIsEnabled: true,
  yDomainEditorIsEnabled: true,
  y2DomainEditorIsEnabled: dataConfig.groupCount > 1,
  // brush range
  // brushRangeMin: 'July 01, 2017',
  // brushRangeMax: 'Sept 02, 2017',
  brushRangeIsEnabled: true,
  // brush
  brushIsEnabled: true,
  // label
  xLabel: 'X Axis Label',
  yLabel: 'Y Axis Label',
  y2Label: dataConfig.groupCount > 1 ? 'Y2 Axis Label' : '',

  // bar
  barSpacingPercent: 10,
  // selectedKeys: data.series[0].values.map(d => d.key).slice(0, 3)
  // line (all, isolated, none)
  dotsToShow: 'isolated'
}


type Props = {}

const LineChart: React.StatelessComponent<Props> = () => {
  const initializeChart = ( ref: HTMLDivElement ) => {
    Chart( ref )
      .setConfig( chartConfig )
      .setData( data )
  }

  return (
    <div className={ styles.container } ref={ initializeChart } />
  )
}


export default LineChart
