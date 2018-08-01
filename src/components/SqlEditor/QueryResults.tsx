import React from 'react'

const styles = require( './QueryResults.sass' )


import { QueryRequest } from '~/reducers/query'

type Props = {
  request: QueryRequest
}


const table = ( columns: string[], data: Object[] ) =>
  <table className={ styles.table }>
    <thead>
      <tr>
        { columns.map( ( column ) => <th key={ column }>{ column }</th> ) }
      </tr>
    </thead>
    <tbody>
      {
        data.map( ( row, index ) =>
          <tr key={ index }>
            {
              columns.map( ( column ) =>
                <td key={ `${ column }-${ index }` }>{ row[ column ] }</td>
              )
            }
          </tr>
        )
      }
    </tbody>
  </table>


const QueryResults: React.StatelessComponent<Props> = ( { request: { result, error } } ) =>
  <div className={ styles.container }>
    { error
      ? <div className={ styles.error }>{ error.message }</div>
      : result && result.length
        ? table( Object.keys( result[ 0 ] ), result )
        : <div className={ styles.noResults }>No results</div>
    }
  </div>


export default QueryResults
