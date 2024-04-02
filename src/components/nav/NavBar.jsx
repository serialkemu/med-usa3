import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import user from '../../assets/images/user.png'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-primary sticky-top">
          <div className="container-fluid" ref={navRef}>
            <Link to='/' className='navbar-brand link-dark fw-bold text-decoration-none'>Usikimye</Link>
            <button className="navbar-toggler" type="button" onClick={toggleMenu}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "7rem" }}>
                <li className="nav-item">
                 <Link className='nav-link active link-dark fw-bold text-decoration-none' aria-current="page"  to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link link-dark fw-bold text-decoration-none' to="/report">Report</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" onClick={toggleMenu}>
                    Resources
                  </a>
                  <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} >
                    <li><Link className='dropdown-item link-dark fw-bold text-decoration-none' to="/education">Education</Link></li>
                    <li><Link className='dropdown-item link-dark fw-bold text-decoration-none' to="/counselling">Counselling</Link></li>
                    <li><Link className='dropdown-item link-dark fw-bold text-decoration-none' to="/statistics">Statistics</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                 <Link to="/about" className='nav-link link-dark fw-bold text-decoration-none'>About</Link>
                </li>
              </ul>
              <div className='m-3'>
              <Link  to="./Admin"><img src={user} style={{height:"1.9rem"}}/></Link>
              </div>
             
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-dark" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar;
