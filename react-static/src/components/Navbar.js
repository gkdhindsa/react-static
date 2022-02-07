import logo from '../logo.svg'
function Navbar() {
    return ( 
        <header >
        <nav className='nav'>
          <div className="brand">
            <img src={logo} alt="" className='logo'/>
            <h2 >ReactFacts</h2>
          </div>
          
          <ul className='nav-items'>
            <li className='list-item'>
              Pricing
            </li>
            <li className='list-item'>
              About
            </li>
            <li className='list-item'>
              Contact
            </li>
          </ul>
        </nav>
      </header>
     );
}

export default Navbar;