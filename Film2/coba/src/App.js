// fungsi compponen navbar
import NavBar from './comp/navbar';
import Ngaji from './comp/pengajian';
import "./tampilan/nav.css";
import "./tampilan/pengajian.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Ngaji />
  </div>
  );
}
export default App;
