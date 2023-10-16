// fungsi compponen navbar
import NavBar from './comp/navbar';
import Page from './comp/landingPage';
import Ngaji from './comp/pengajian';
import Cata from './comp/catalog';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// css
import "./tampilan/nav.css";
import "./tampilan/pengajian.css";
import "./tampilan/landingPage.css"

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Page />} />
          <Route path="/pengajian" element={<Ngaji />} />
          <Route path="/*"  element={<Navigate to="/" />}  />
        </Routes>
      </Router>
      <Cata />
  </div>
  );
}
export default App;

