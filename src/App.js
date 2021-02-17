import './App.css';
import Navbar from './component/Navbar/Navbar';
import Model from './component/Model/Model';
import Context from './Global/Context';

function App() {
  return (
    <Context>
      <Navbar/>
      <Model />
    </Context>
  );
}

export default App;
