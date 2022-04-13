import React, { useState, Component } from 'react';
// import {Link, Route, withRouter} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Nav } from "react-bootstrap";
import HomePage from './HomePage';
import WorkPage from './WorkPage';
import ResumePage from './ResumePage';
import ContactPage from './ContactPage';
import { Wrap, Header, Box, Boxleft, Boxright, LinkContainer, Content, Footer, Icon } from './style';
import Dropdown from '../components/Dropdown';
import { DropdownBox } from '../components/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const App = () => {
  const [showDrop, setShowDrop] = useState(false)
  const [activePage, setActivePage] = useState('HomePage')

  const handleShowDropdown = () => {
    setShowDrop((prevState) => !prevState)
  }

  const ITEMS = [
    { title: 'project1-react', page: 'Home', component: <HomePage/> },
    { title: 'about', page: 'About', component: <WorkPage/>},
    { title: 'resume', page: 'Resume', component: <ResumePage/>},
    { title: 'contact', page: 'Contact', component: <ContactPage/> }
  ]

  return (
    <Wrap>
      <Header>
        <Box>
          <Boxleft>Yang LIU</Boxleft>
          <Boxright>
            <Nav>
              {ITEMS.map(({ title, page }) =>
              (
              <LinkContainer key={title}
              onClick={(e)=>{
                e.preventDefault()
                setActivePage(page)
              }}
              active={activePage === page}
              >
                <Link 
                to={title}>
                  {page}
                </Link>
              </LinkContainer>
              )
              )}
              <Icon onClick={handleShowDropdown}>
                <FontAwesomeIcon icon={faBars} />
              </Icon>
              {showDrop ? <Dropdown /> : <DropdownBox off />}
            </Nav>
          </Boxright>
        </Box>
      </Header>
      {/* content */}
      <Content>
        <Routes>
          {ITEMS.map(({title, component})=>
          (
          <Route 
            key={title} 
            path={title} 
            element={component}
          />
          )
          )}
        </Routes>
      </Content>
      {/* footer */}
      <Footer>
        <p>© 2022 All rights reserved. Designed by YangLIU</p>
      </Footer>
    </Wrap>
  );
}


export default App
