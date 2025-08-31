import akula from './assets/akula.png';
import './App.css';
import { Menu } from './elements/Menu';
import { Header } from './elements/Header';
import { DataAvaAkula } from './elements/DataAvaAkula';

function App() {
  return (
    <div className="App">
      {Header()}
      <div className='row'>
          {Menu()}
        <div className='main'>
          <div className='flex-container-main'>
            <img className='img-preview' src={akula} alt='ava'></img>
            {DataAvaAkula()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
