import styled from 'styled-components';

export const Wrap= styled.div`
    display: flex;
    flex-direction: column;
`
export const Content = styled.div`
    background-color: #f5e5f1;
    flex: 1; 
    text-align: center;
    font-family: Poppins,sans-serif;`
export const Header = styled.div`
    z-index: 100;
    display: flex;
    height: 60px;
    box-shadow: 0 3px 6px 0 #d4d0d0;
`
export const Box = styled.div`
width: 80%;
height: 100%;
margin: 0 auto;
padding: 0 15px;
display: flex;
align-items: center;
justify-content: space-between;
&:hover {
    text-decoration: none;
}
`
export const Boxleft = styled.div`
font-size: 20px;
background: linear-gradient(to right, #fc00ff, #00dbde);
-webkit-background-clip: text;
color: transparent;

`
export const Boxright = styled.div`
display: inline-flex;
justify-content: flex-start;
`

export const Linkstyle = styled.div`
 &:hover{
    text-decoration: none;
    background-color: #f5e5f1;
    color: white;
    border-radius: 10px;
 }
 &.active{
   color: blueviolet;
 }
`




export const Para = styled.p`
    margin: 0 10px;
    font-size: 14px;
    padding: 5px 0;
    `

export const Footer = styled.div`
text-align: center;
padding: 20px 0;
color: #555;
background-color: white;
border-top: 1px solid #f2f2f2;
padding: 2px 0;`
