import IpInfoBanner from "./Components/IpInfoBanner";
import MapContainer from "./Components/MapComponent";
import SearchBar from "./Components/SearchBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <IpInfoBanner />
      <MapContainer />
    </div>
  );
}

export default App;
