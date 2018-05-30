import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure( { adapter: new Adapter() } )


import rmwcPolyfillMock from 'rmwc/Base/testPolyfill'

rmwcPolyfillMock()
