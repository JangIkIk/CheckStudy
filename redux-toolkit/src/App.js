import './App.css';
import {Count} from './components/Count'
import {Rtk} from './components/Rtk'


function App() {

  return (
    <div className="App">
      <div className='system'>
        <Count></Count>
      </div>
      <div className='system'>
        <Rtk></Rtk>
      </div>
    </div>
  );
}

export default App;
