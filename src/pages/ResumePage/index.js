import { faLink } from '@fortawesome/free-solid-svg-icons';
import weatherUrl from '../../assets/images/weather.png';
import projectUrl from '../../assets/images/project.png';

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
                                        {/* <LiItem><a href=" "><FontAwesomeIcon icon={faLink} /> Demo url</a></LiItem> */}
                                        <LiItem>Bulied a personal website that introduces me and displays my projects.</LiItem>
                                        <LiItem>Website building with ReactJS, React router, styled-components and Bootstrap.
                                        </LiItem>
                                        <LiItem>Enable message sending, download resuem, format verification and responsive layout.
                                        </LiItem>
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
                                        <LiItem><a href="http://yang-weather-app-0327.s3-website-ap-southeast-2.amazonaws.com/"><FontAwesomeIcon icon={faLink} /> Demo url</a></LiItem>
                                        <LiItem>
                                        Designed an application with functionalities such as searching the daily weather by city name, getting weather forecast in 5 days, and getting local time.
                                    </LiItem>
                                        <LiItem>Implemented ReactJS, styled-components to build a single page application, 
                                            used openWeather API to grab data.</LiItem>
                                         <LiItem>Completed Search city via cityname, check cityname and responsive design.</LiItem>
                                    </ul>
                                      <Img src={weatherUrl} />
                                </Text>
                            </ResumeProject>
                        </TimeLine>
                        <TimeLine>
                            <ResumeProject>
                                <ProjectTitle>Project 3: Business Project
                                    <Date>May 2021 - Aug 2021</Date>
                                </ProjectTitle>
                                <Text>
                                    <ul>
                                    <LiItem><a href="http://bestravellers.com/"><FontAwesomeIcon icon={faLink} /> Demo url</a></LiItem>
                                    <LiItem>Worked in an agile team and cooperated with BA, UI, Devops and other developers to built a booking travel platform.</LiItem>
                                    <LiItem>key feathes: Authentication, Reset Password, Update personal information, Search and filter travel packages,
                                    Book travel packages, Payment via stripe payment integration, Rate and comment the travel package.
                                    </LiItem>
                                    <LiItem>Tech Stack: React.js Redux, React router, styled-components, Stripe, Mapbox,Redux-thunk,
                                    Express, Express-validator, Jsonwebtoken, Mongoose.
                                    </LiItem>
                                    <Img src={projectUrl} />
                                    </ul>
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

