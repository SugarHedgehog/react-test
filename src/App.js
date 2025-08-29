import logo from './freenas.svg';
import akula from './akula.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='row'><img src={logo} width='80vmin' alt='logo' />
          <h2>AKula</h2></div>
      </div>
      <div className='row'>
        <div className='menu'>
          <div className='flex-container-col'>
            <a href='#s'>My Sea</a>
            <a href='#s'>Diner News</a>
            <a href='#s'>Temperature</a>
            <a href='#s'>Setting</a>
          </div>
        </div>
        <div className='main'>
          <div className='flex-container-main'>
    <img className='img-preview' src={akula} alt='ava'></img>
<div className='flex-container-row'>
            <img className='img-ava' src={akula} alt="akula" width="100" height="100"></img>
            <div className='flex-container-col'>
              <p>Name: Ariel</p>
              <p>Year: 21</p>
              <p>City: Seawill</p>
            </div>
          </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
