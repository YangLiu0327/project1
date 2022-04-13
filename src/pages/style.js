import styled, {css} from 'styled-components';

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
font-weight: 600;
`
export const LinkContainer = styled.div`
    margin: 0 10px;
    font-size: 16px;
    padding: 5px 0;
    text-decoration: none;  
   
  ${({ active }) => active && css`
        background-color: #f5e5f1;  
        border-radius: 10px;
  }
`}
 &:hover {
    text-decoration: none;
    background-color: #f5e5f1;
    border-radius: 10px;
 }

 @media screen and (max-width: 500px) {
     display: none;
 }
`
export const Icon = styled.a`
  @media screen and (min-width: 320px) {
    display: block;
    font-size: 18px;
    color: red;
    &:hover {
      color: red;
    }
  }
  @media screen and (min-width: 500px) {
    display: none;
  }
`

export const Footer = styled.div`
text-align: center;
padding: 20px 0;
color: #555;
background-color: white;
border-top: 1px solid #f2f2f2;
padding: 2px 0;`
