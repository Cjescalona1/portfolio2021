/*
  http://bit.ly/2DTXGpe - `@babel/polyfill` has been deprecated.
  If you need to polyfill certain JS features, uncomment the two imports below.
*/
// import 'core-js/stable'
// import 'regenerator-runtime/runtime' // Needed to polyfill async / await.

/*
  Import our top-level scss file.
  All other scss files should be imported in `styles.scss`.
*/
import './styles/styles.scss'

// Import React.
import React from 'react'
import ReactDOM from 'react-dom'
import Head from './components/Head'
// Import our top-level component.
import App from 'components/App'
// Mount our app.
ReactDOM.render(
  <React.StrictMode>
    <Head/>
    <App />
  </React.StrictMode>,
  document.querySelector('#app'),
)
