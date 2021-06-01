import styled from 'styled-components';



export const Wrap = styled.div `
flex:1;
width: 100%;
margin: 0 auto;
flex-flow: column wrap;
background-color: #f5e5f1;`

export const Brief = styled.div`
text-align: center;`

export const Photo = styled.img`
width: 260px;
height: 260px;
border-radius: 30px;
margin-top: 60px;
`

export const Title = styled.h1`
margin-top: 30px;
padding: 12px 0;
font-size: 30px;`

export const List = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
`
export const ListItem = styled.li`
    padding: 6px 10px;
    background-color: rgba(87,199,255,0.1);
    margin: 12px 5px;
    border-radius: 15px;
    font-size: 20px;
}
`
export const Para = styled.h2`
padding: 5px 0px;
color: rgba(0,0,0,0.7);
font-size: 20px;`

export const Button = styled.button`
margin-top: 30px;
margin-bottom: 130px;
padding: 15px 80px;
max-width: 250px;
border-radius: 15px;
border: transparent;
outline: transparent;
cursor: pointer;
user-select: none;
white-space: nowrap;
animation: glow 8s linear infinite;
color: white;
background: linear-gradient(90deg, #00dbde, #fc00ff, #00dbde);
background-size: 300%;
border-radius: 2em;
  &:hover {
  color : #0056b3;
    }

  &::before {
    content: "";
    top: -5px;
    left: -5px;
    bottom: -5px;
    right: -5px;
    z-index: -1;
    background: inherit;
    background-size: inherit;
    border-radius: 4em;
    opacity: 0;
    transition: 0.5s;
}
   &:hover::before {
    opacity: 1;
    filter: blur(20px);
    animation: glow 8s linear infinite;
   }
   @keyframes glow {
    to {
      background-position: 300%;
    }
  }
  }
`







