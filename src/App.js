import './style/App.css';
import './style/Column.css';
import './style/Header.css';
import './style/Img.css';
import './style/Main.css';
import './style/Menu.css';
import './style/Row.css';
import './style/Text.css';

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
