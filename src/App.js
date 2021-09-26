import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Donors from './Components/Donors/Donors';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Donors></Donors>
    </div>
  );
}

export default App;
