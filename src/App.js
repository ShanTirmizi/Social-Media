import './App.css';
import Navbar from './component/Navbar/Navbar';
import Model from './component/Model/Model';
import Context from './Global/Context';
import Create from './component/Create/Create';
import Posts from './component/Posts/Posts';

function App() {
  return (
    <Context>
      <Navbar/>
      <div className="container">
        <Create />
        <Posts />
      </div>
      <Model />
    </Context>
  );
}

export default App;
