import React, {useEffect} from 'react';
import Logo from "../../assets/img/top-logo.svg"

const Header = () => {
  useEffect(() => {
    document.querySelectorAll('.navbar li >a').forEach(link => {
      link.addEventListener("click", clickHandler);
    })
  }, []);

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const target = document.querySelector(href);

    if (null == target) {
      return false;
    }
  
    target.scrollIntoView({
      behavior: "smooth"
    });
  }
  return (
    <header className='header' id="header">
    <div className='container'>
      <a href='#inicio' className='logo'>
        <img src={Logo} alt='logo 25Watts' />
      </a>
      <nav className='navbar'>
        <ul>
          <li>
            <a href='#inicio'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#products'>Products</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
}

export default Header;
