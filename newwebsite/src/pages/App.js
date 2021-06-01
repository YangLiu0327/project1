import React, { Component } from 'react';
import {Link, Route, withRouter} from 'react-router-dom';
import { Nav } from "react-bootstrap";
import HomePage from './HomePage';
import WorkPage from './WorkPage';
import ResumePage from './ResumePage';
import ContactPage from './ContactPage';
import {Wrap, Header, Box, Boxleft,Boxright,Linkstyle,Para, Content,Footer} from  './style';

class App extends Component {

  render(){
  // withRouter 提供的属性，获取当前路由
  const { location } = this.props;

  return (
   <Wrap>
     {/* header nav */}
      <Header>
        <Box>
          <Boxleft>Yang LIU</Boxleft>
          <Boxright>
          <Nav activeKey={location.pathname}>
            <Linkstyle as={Link} to="/" className={location.pathname ==="/" && 'active'}><Para>Home</Para></Linkstyle>
            <Linkstyle as={Link} to="/about" className={location.pathname==="/about" && 'active'}><Para>About</Para></Linkstyle>
            <Linkstyle as={Link} to="/resume"  className={location.pathname==="/resume" && 'active'}><Para>Resume</Para></Linkstyle>
            <Linkstyle as={Link} to="/contact" className={location.pathname==="/contact" && 'active'}><Para>Contact</Para></Linkstyle>
          </Nav>
          </Boxright>
          </Box>
      </Header>
      {/* content */}
      <Content>
        <Route path="/" exact component={HomePage} />
        <Route path="/about"  exact component={WorkPage} />
        <Route path="/resume" exact  component={ResumePage} />
        <Route path="/contact"  exact component={ContactPage} />
      
        {/* 动态路由，传递动态的id */}
        {/* <Route path="/works/:id"  exact component={ResumePage} /> */}
      </Content>
      {/* footer */}
      <Footer>
       <p>© 2021 All rights reserved. Designed by YangLIU</p>
      </Footer>
    </Wrap>
  );
}
}

export default withRouter(App);
