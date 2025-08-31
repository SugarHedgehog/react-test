import { DataAkula } from './DataAkula';
import akula from './../assets/akula.png';

export function DataAvaAkula() {
  return <div className='data-row'>
    <img className='img-ava' src={akula} alt="akula" width="100" height="100"></img>
    {DataAkula()}
  </div>;
}