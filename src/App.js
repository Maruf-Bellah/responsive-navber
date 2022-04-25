import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Header/Navbar/Navbar';
import Pricing from './Pricing/Pricing';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
