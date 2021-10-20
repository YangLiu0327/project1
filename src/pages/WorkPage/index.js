import React, { Component } from 'react';
import { Wrap, Left, Right, Img, Title, P, Button, Socialmedia, Para, RightTitle, Skill, Liststyle, ListMedia, SKillItem } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faReact, faJava } from '@fortawesome/free-brands-svg-icons';
import { faCloud, faDatabase, faDownload, faTools } from '@fortawesome/free-solid-svg-icons';
import workurl from '../../assets/images/work.png';
import { Link } from 'react-router-dom';

class WorkPage extends Component {
    render() {
    // const download =() =>{
    //     const url = '/file/resume.pdf';
    //     window.location.href= url;
    // }
        return <Wrap>
            <Left>
                <Img src={workurl} alt=""></Img>
                <Socialmedia>
                    <a href="https://www.linkedin.com/in/yang-liu-a667b9208/" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="https://github.com/YangLiu0327" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                </Socialmedia>
                <Title>Title</Title>
                <P>Front end Developer</P>
                <Title>Location</Title>
                <P>Sydney, Australia</P>
                <Title>Email</Title>
                <P>liuyangyangyang1992@gmail.com</P>
                <Title>ATTACHMENT</Title>
                <Button>
                <Link 
                style={{textDecoration: 'none'}}
                to="/file/resume.pdf" target="_blank" download>
                    Download Resume 
                </Link>
                    <FontAwesomeIcon icon={faDownload}/ >
                </Button>
            </Left>
            <Right>
                <RightTitle >DESCRIPTION</RightTitle >
                <Para>Actively seeking internship or junior position jobs for web developer.</Para >
                <Para>I am a <strong> faster learner</strong> with strong self-learning ability and <strong>communication skills</strong>.</Para>
                <Para>I am also good at front-end development to design web pages.</Para >
                <RightTitle >SKILLS HIGHLIGHT</RightTitle >
                <Skill>
                    <SKillItem>
                        <ListMedia ><FontAwesomeIcon icon={faReact} /></ListMedia >
                        <Liststyle><strong>Front-end:</strong> HTML, CSS3, Sass/Less, JavaScript, ES6, Bootstrap, Material
                    Design, Reactjs, Redux, Styled-components, Typescript, Router, Webpack, NPM
                    Responsive Web Design, Storybook
                        </Liststyle>
                    </SKillItem>
                    <SKillItem>
                        <ListMedia ><FontAwesomeIcon icon={faJava} /></ListMedia >
                        <Liststyle><strong>Back-end:</strong> Node.js, Express.js, Java, MongoDB, JWT Token, Joi,  </Liststyle>
                    </SKillItem>
                    <SKillItem>
                        <ListMedia ><FontAwesomeIcon icon={faCloud} /></ListMedia >
                        <Liststyle><strong>Cloud Services:</strong> AWS EC2, S3, ECS, Lambda, Route 53, Docker, Azure, Netlify</Liststyle>
                    </SKillItem>
                    <SKillItem>
                        <ListMedia ><FontAwesomeIcon icon={faTools} /></ListMedia >
                        <Liststyle><strong>Develop Tools:</strong> Git, Bitbucket, JIRA, Kanban, Postman, Chrome DevTool, SourceTree </Liststyle>
                    </SKillItem>
                    <SKillItem>
                        <ListMedia ><FontAwesomeIcon icon={faDatabase} /></ListMedia > 
                        <Liststyle><strong>Other:</strong> Agile, Scrum, Kanban, Jest, RESTful APIs, SEO, Google Analytics </Liststyle>
                    </SKillItem>
                </Skill>
            </Right>
        </Wrap>
    }
}

export default WorkPage;