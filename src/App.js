import akula from './assets/akula.png';
import './App.css';
import { Menu } from './elements/Menu';
import { Header } from './elements/Header';
import { Main } from './elements/Main';

function App() {
  return (
    <div className="App">
      {Header()}
      <div className='row'>
          {Menu()}
        {Main()}
      </div>
    </div>
  );
}

export default App;
