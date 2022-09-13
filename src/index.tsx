import 'lib-flexible'
import ReactDOM from 'react-dom/client'
import Router from 'routers'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// eslint-disable-next-line react/react-in-jsx-scope
root.render(<Router />)
if (process.env.NODE_ENV === 'development') {
  // new Vconsole()
}
