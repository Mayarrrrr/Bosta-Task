import React from "react";
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import CustomToggle from "./CustomToggle";
import logoar from '../../imgs/bosta-ar-logo.png';
import logoen from '../../imgs/bosta-en-logo.png';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};


const NavBar = () => {
  const { t ,  i18n } = useTranslation();

    return ( 
    <div>
    <Navbar expand="lg" className="" dir={t('dir')}>
      <Container fluid>
        <Navbar.Brand href="#">
            <img 
            src={t('language') === ' ENG ' ? logoen : logoar}
            height='40vh'
            width='135px'
            style={{marginRight:'8vh', marginLeft:'8vh'}}
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{fontWeight:'bold'}}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#" style={{marginLeft:'5vh'}}>{t('Home')}</Nav.Link>
            <Nav.Link href="#" style={{marginLeft:'5vh'}}>{t('Prices')}</Nav.Link>
            <Nav.Link href="#" style={{marginLeft:'50vh'}}> {t('Call sales')}</Nav.Link>
           
            <Nav.Link href="#" style={{marginLeft:'2vh',color:'black',textDecoration:'none'}}><CustomToggle/></Nav.Link>
            <div class="vr" style={{marginLeft:'2vh'}}/>
            <Nav.Link href="#" style={{marginLeft:'3vh'}}>{t('Sign in')} </Nav.Link>
            <NavDropdown title={t('language')} id="navbarScrollingDropdown" style={{marginLeft:'8vh'}}>
              <NavDropdown.Item onClick={() => changeLanguage('en')}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage('ar')}>Arabic</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
     );
}
 
export default NavBar;