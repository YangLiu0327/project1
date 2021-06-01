import { faLink } from '@fortawesome/free-solid-svg-icons';
// import yangUrl from '../../assets/images/yang.jpg';
import React from 'react';
import {
    Wrap, Title, TimeLines, Experince, ResumeProject, TimeLine,
    ProjectTitle, Text, LiItem, Education, ResumeEdu, Info, Date, Container, Img 
} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ResumePage = () => {
    return (
        <Wrap>
            <Container>
                <Title>EXPERIENCE</Title>
                <TimeLines>
                    <Experince>
                        <TimeLine>
                            <ResumeProject>
                                <ProjectTitle>Project 1: Personal Website
                                    <Date>Mar 2021 - Apr 2021</Date>
                                </ProjectTitle>
                                <Text>
                                    <ul>
                                        <LiItem><a href=" "><FontAwesomeIcon icon={faLink} /> Demo url</a></LiItem>
                                        <LiItem>Website building with JavaScript, CSS, HTML, Jquery and Bootstrap.
                                        </LiItem>
                                        <LiItem>Enable message sending, download resuem, format verification and responsive layout
                                        </LiItem>
                                        {/* <Img src={yangUrl}></Img> */}
                                    </ul>
                                    
                                </Text>
                            </ResumeProject>
                        </TimeLine>
                        <TimeLine>
                            <ResumeProject>
                                <ProjectTitle>Project 2: Weather App
                                    <Date>Apr 2021 - May 2021</Date>
                                </ProjectTitle>
                                <Text>
                                    <ul>
                                        <LiItem><a href=" "><FontAwesomeIcon icon={faLink} /> Demo url</a></LiItem>
                                        <LiItem>
                                            Built a web app enables user to view the weather forecast. 
                                            User can switch weather condition for 5 days in the future or 10 days.
                                    </LiItem>
                                        <LiItem>Used React.js HTML5, CSS3, and JavaScript to build the front-end, 
                                            together with Responsive Design.</LiItem>
                                        <LiItem>Used Node.js, Express and RESTful API for back-end 
                                            development and conditionals.
                                   </LiItem>
                                    </ul>
                                </Text>
                            </ResumeProject>
                        </TimeLine>
                        <TimeLine>
                            <ResumeProject>
                                <ProjectTitle>Project 3: Business Project
                                    <Date>May 2021 - *** 2021</Date>
                                </ProjectTitle>
                                <Text>
                                    <LiItem><a href="#"><FontAwesomeIcon icon={faLink} /> Demo url</a></LiItem>
                                </Text>
                            </ResumeProject>
                        </TimeLine>
                    </Experince>
                </TimeLines>

                <Education>
                    <Title>EDUCATION</Title>
                    <TimeLines>
                        <TimeLine>
                            <ResumeEdu>
                                <Info>
                                    <ProjectTitle>University of Technology Sydney</ProjectTitle>
                                    <Date>Feb 2019 - Nov 2020</Date>
                                </Info>
                                <Info>
                                    <p>Master of Information Technology | Major in Data Analytics</p>
                                    <p>WAM 81.94</p>
                                </Info>
                            </ResumeEdu>
                        </TimeLine>
                    </TimeLines>
                </Education>
            </Container>
        </Wrap>
    )
}

export default ResumePage;

