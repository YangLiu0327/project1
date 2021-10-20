import styled from 'styled-components';


export const Wrap = styled.div`
  font-family: Poppins, sans-serif;
  justify-content: center;
  display: flex;
  flex: 1;
  `
export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 30px;
background-color: white;
border-radius: 20px;
width: 900px;
height: auto;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
margin-top: 50px;
margin-bottom: 100px;`

export const Text = styled.ul`
padding: 10px;
font-family: Poppins, sans-serif;
` 

export const ResumeProject= styled.div`
padding: 15px 20px 10px;
height: auto;
margin: 10px -5px 20px;
// background-color: #fff;
box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
&:hover{
    box-shadow: 0px 10px 20px 3px rgba(0, 0, 0, 0.2);
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
}
`

export const Img = styled.img`
display: flex;
padding: 30px 10px 10px 10px;
width: 100%;
height: auto;`

export const ResumeEdu = styled.div`
text-align: left;
padding: 15px 20px 10px;
height: auto;
margin: 10px -5px 20px;
background-color: #fff;
box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
&:hover{
    box-shadow: 0px 10px 20px 3px rgba(0, 0, 0, 0.2);
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
}`

export const ProjectTitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 16px;
font-weight: 600;`

export const TimeLines = styled.div`
cursor: pointer;
border-left: 2px solid #dadada;
margin-left: 25px;
padding: 8px 0 8px 48px;
& > div{
    margin-top: 5px;
    margin-bottom: 5px;
}` 

export const TimeLine = styled.div`
cursor: pointer;
position: relative;
padding: 16px 10px 16px 1px;
margin-left: 5px;

&::before{
    content: "";
    width: 40px;
    border-bottom: 2px solid #007bff;
    position: absolute;
    left: -45px;
    top: 50px;
}
&::after {
        content: "";
        position: absolute;
        left: -60px;
        width: 12px;
        height: 12px;
        border-radius: 100%;
        border: 2px solid #007bff;
        top: 45px;
        background: #007bff;
        box-shadow: 0 0 0 0.1875rem rgba(48, 76, 253, 0.25);
    }
}` 


export const Info = styled.div`
display: flex;
justify-content: space-between;`

export const Date = styled.p`
color: #007bff;
padding: 10px;
font-size: 12px;`


export const Experince = styled.div`
`
export const Education = styled.div`
`

export const  P = styled.p`
`
export const Title = styled.h3`
marigin: 10px 50px;
padding: 20px;
text-align: left;
font-weight: 600;
font-size: 20px;
text-shadow: 2px 2px 2px #007bff;
`

export const LiItem = styled.li`
    text-align: left;
    list-style-type:square;
    margin-top: 5px;
    `
