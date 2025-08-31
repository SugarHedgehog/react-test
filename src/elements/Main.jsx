import akula from './../assets/akula.png'
import {DataAvaAkula} from './DataAvaAkula'

export function Main() {
  return <div className='main'>
    <div className='flex-container-main'>
      <img className='img-preview' src={akula} alt='ava'></img>
      {DataAvaAkula()}
    </div>
  </div>;
}