import style from 'styled-components'

export const MainContainer = style.div`
background-color:#ffffff;
  width:100vw;
  height: 100vh;
  display:flex;
`

export const SubContainer1 = style.form`
margin:50px;
`

export const Heading = style.h1`
color:#35469c;
  font-size:35px;
  font-family: 'Open Sans';
  padding-left:20px;
`

export const ListContainer1 = style.ul`
list-style-type:none;
padding-left:20px;
margin:5px;
`
export const ListItem = style.li`
padding:5px;
display:flex;
flex-direction:column;
`
export const GenerateButton = style.button`
height:40px;
width:130px;
border-radius:10px;
background-color: #0b69ff;
border:0px solid;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#ffffff;
font-size:18px;
padding-left:20px;
margin-top:10px;
margin-left:70px;
font-family:"Open Sans";
`
export const MemeContainer = style.div`
background-image:url(${props => props.imageUrl});
height:70vh;
width:40vw;
display:flex;
flex-direction:column;
align-items:space-around;
justify-content:space-around;
margin:40px;
background-size:cover;
`
export const ImageHeading = style.p`
color:#ffffff;
font-size:(${props => props.fontSize})px;
font-family:"Roboto";
padding-left:50px;
`

export const Imagepara = style.p`
color:#ffffff;
font-size:(${props => props.fontSize})px;
font-family:"Roboto";
padding-left:50px;
`
