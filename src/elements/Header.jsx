import bigAva from './../assets/freenas.svg';

export function Header() {
  return <div className='header'>
    <div className='row'><img src={bigAva} width='60vmin' alt='logo' />
      <h3>AKula</h3></div>
  </div>;
}