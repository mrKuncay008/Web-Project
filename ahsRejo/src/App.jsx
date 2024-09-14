import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import HeaderPage from "./comp/Header"
import CatalogPage from "./comp/Catalog"

function App() {

  return (
    <>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    /> 
      <HeaderPage />
      <CatalogPage />
    </>
  )
}

export default App
