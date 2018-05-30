import '@mapd/connector/dist/browser-connector'


export type MapdConnector = any

const connector: Promise<MapdConnector> = new ( window as any ).MapdCon()
  .protocol( 'http' )
  .host( 'kali.mapd.com' )
  .port( '9092' )
  .dbName( 'mapd' )
  .user( 'mapd' )
  .password( 'HyperInteractive' )
  .connectAsync()


export default connector
