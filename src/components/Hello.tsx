import React from 'react'


type Props = {
  name: string
}


const Hello: React.StatelessComponent<Props> = ( { name } ) =>
  <div>
    Hello { name }!
  </div>


export default Hello
