import React, { Component } from 'react';
import { Wrap, Left, Right, Img, Title, P, Button, Socialmedia, Para, RightTitle, Skill, Liststyle, ListMedia, SKillItem } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faReact, faJava } from '@fortawesome/free-brands-svg-icons';
import { faCloud, faDatabase, faDownload, faTools } from '@fortawesome/free-solid-svg-icons';
import workurl from '../../assets/images/work.png';


class WorkPage extends Component {
    render() {
    const download =() =>{
        const url='/file/jianli000.pdf';
        window.location.href= url;
    }
        return <Wrap>
            <Left>
                <Img src={workurl} alt=""></Img>
                <Socialmedia>
                    <a href="https://www.linkedin.com/in/yang-liu-a667b9208/" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="https://github.com/YangLiu0327" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                </Socialmedia>
                <Title>Title</Title>
                <P>Junior Web Developer</P>
                <Title>Location</Title>
                <P>Sydney, Australia</P>
                <Title>Email</Title>
                <P>yangliuwork0327@qq.com</P>
                <Title>ATTACHMENT</Title>
                <Button onClick={download}>
                    <FontAwesomeIcon icon={faDownload}/ > Download Resume</Button>
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
                        <Liststyle>HTML5, CSS3, Sass/Less, JavaScript, ES6, Bootstrap, Material
                    Design, Reactjs, Redux, Styled-components, RxJS, Typescript, React, Router,
                    jQuery, Responsive Web Design, Storybook
                        </Liststyle>
                    </SKillItem>
                    <SKillItem>
                        <ListMedia ><FontAwesomeIcon icon={faJava} /></ListMedia >
                        <Liststyle>Nodejs, Express, Java, Python, npm, webpack, Docker, LoopBack</Liststyle>
                    </SKillItem>
                    <SKillItem>
                        <ListMedia ><FontAwesomeIcon icon={faDatabase} /></ListMedia >
                        <Liststyle>SQL, NoSQL, MySQL, MongoDB</Liststyle>
                    </SKillItem>
                    <SKillItem>
                        <ListMedia ><FontAwesomeIcon icon={faCloud} /></ListMedia >
                        <Liststyle>AWS EC2, S3, ECS, CloudFront, Cognito, Lambda, Route 53, Docker, Azure</Liststyle>
                    </SKillItem>
                    <SKillItem>
                        <ListMedia ><FontAwesomeIcon icon={faTools} /></ListMedia >
                        <Liststyle>Git, Rollup, Bitbucket, JIRA, Chrome DevTool, Slack, SourceTree </Liststyle>
                    </SKillItem>
                </Skill>
            </Right>
        </Wrap>
    }
}

export default WorkPage;