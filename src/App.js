import './App.css';
import MainBar from './Components/MainBar'
import Background from './Components/Background'
import StoreListings from './Components/StoreListings';


function App() {
  return (
    <div className="App">
      <MainBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
