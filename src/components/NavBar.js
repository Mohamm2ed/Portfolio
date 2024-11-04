import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import qr from '../assets/img/QR.svg';

import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import qrCodeImage from '../assets/img/project-img1.png';


export const NavBar = () => {
  // const handleIconClick = () => {
  //   Swal.fire({
  //     title: 'QR Code',
  //     imageUrl: qrCodeImage,
  //     imageWidth: 150,
  //     imageHeight: 150,
  //     imageAlt: 'QR Code',
  //     showCloseButton: true,
  //   });
  // };
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"> </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          
            </Nav>
     
              <div className="social-icon">
                <a href="https://cvdesignr.com/p/668176977b4b7" target="_blank" rel="noopener noreferrer" ><img src={qr} alt="" /></a>  
                <a href="https://www.linkedin.com/in/mohammed-dechraoui" target="_blank" rel="noopener noreferrer" ><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100011126533216" target="_blank" rel="noopener noreferrer" ><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/mohamaddechraoui" target="_blank" rel="noopener noreferrer" ><img src={navIcon3} alt="" /></a>
              </div>  
                   
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    
    </Router>
  )
}
