import styled from 'styled-components';

export const Wrap = styled.div`
justify-content: center;
display: flex;
flex: 1;
`
export const Content = styled.div`
margin-top: 50px;
padding: 30px;
background-color: white;
width:900px;
height: auto;
margin-bottom: 120px;
border-radius: 20px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); 
`
export const  Textarea = styled.textarea`
resize: none;`
export const Title = styled.p`
marigin: 0 50px;
padding: 20px;
text-align: left;
font-weight: 600;
font-size: 20px;
text-shadow: 2px 2px 2px #007bff;
`


export const Label  = styled.label`
  text-align: left;
  width:100%;
  `
export const Button = styled.button`
  margin-top: 10px;
  border: 0;
  background: none;
  text-transform: uppercase;
  color: #007bff;
  font-weight: bold;
  position: relative;
  outline: none;
  padding: 10px 20px;
  box-sizing: border-box;
  width: 300px;
  font-size: 14px;
  
  &::before, &::after{
      box-sizing: inherit;
      position: absolute;
      content: "";
      border: 2px solid transparent;
      width: 0;
      height: 0;
  }
  &::after{
      bottom: 0;
      right: 0;
  }
  &::before{
      top: 0;
      left: 0;
  }
  &:hover::before, &:hover::after{
      width: 100%;
      height: 100%;
  }
   &:hover::after {
      border-bottom-color: #007bff;
      border-left-color: #007bff;
      transition: border-color 0s ease-out 0.4s, width 0.2s ease-out 0.4s, height 0.2s ease-out 0.6s;
  }
   &:hover::before{
      border-top-color: #007bff;
      border-right-color: #007bff;
      transition: width 0.2s ease-out, height 0.2s ease-out 0.2s;
  }`