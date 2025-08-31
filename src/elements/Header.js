import bigAva from './../assets/freenas.svg';

export function Header() {
  return <div className='header'>
    <div className='row'><img src={bigAva} width='80vmin' alt='logo' />
      <h2>AKula</h2></div>
  </div>;
}