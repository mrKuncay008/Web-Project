// fungsi compponen navbar
import NavBar from './comp/navbar';
import Page from './comp/landingPage';
import Ngaji from './comp/pengajian';
// css
import "./tampilan/nav.css";
import "./tampilan/pengajian.css";
import "./tampilan/landingPage.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Page />
      {/* <Ngaji /> */}
  </div>
  );
}
export default App;
