import React, { Component } from 'react';
import yangUrl from '../../assets/images/yang.jpg';
import {Link} from 'react-router-dom';
import {Wrap, Brief, Photo, Title, List, ListItem, Button } from './style';



class HomePage extends Component{
    render(){
        return <Wrap>
                 {/* introduce */}
                 <Brief>   
                     <Photo src={yangUrl} alt=""></Photo>
                     < Title> Yang LIU </ Title>
                     <List >
                         <ListItem > Front-end Developer</ListItem >
                         <ListItem > Full Stack Developer</ListItem >
                         <ListItem > React </ListItem >
                     </List >
                     
                    <Link to="/about">
                        <Button>Vcard style</Button>
                    </Link>
                 </Brief>
           </Wrap>
        
    }
}
export default HomePage;