import React from 'react'
import styled from 'styled-components'
function Section({backgroungImg,title,description,leftBtnText,rightBtnText}) {
    return (
        <Wrap bgImage={backgroungImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
<ButonGroup>
    <LeftButton>
    {leftBtnText}
    </LeftButton>
    { rightBtnText &&  
        <RightButton>
        {rightBtnText}
        </RightButton>
    }
   
</ButonGroup>
<DownArrow src="down-arrow.svg"/>
</Buttons>
        </Wrap>
        
    )
}

export default Section
const Wrap = styled.div`
width:100vw;
height:100vw;
background-position:center;
background-repeat:no-repeat;
background-size: cover;
background-image:url('model-s.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:${props => `url("${props.bgImage}")`}
 `
 const ItemText = styled.div`
padding-top:15vh;
text-align:center;
 `
 const  ButonGroup= styled.div`
 display:flex;
 margin-bottom:30px;
 @media (max-width: 768px) {
     flex-direction:column;
 }

 `
 
 const LeftButton= styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
 `
 const RightButton = styled(LeftButton)`
 background:white;
 opacity:0.65;
 color:black;
  `

  const DownArrow = styled.img`
  height:40px;
  margin-top:20px;
  animation:animateDown infinite 1.5s;
  overflow-x:hidden;
  `
  const  Buttons = styled.div`
  `