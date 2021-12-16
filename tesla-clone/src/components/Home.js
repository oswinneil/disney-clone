import React from 'react'
import styled from "styled-components"
import Section from './Section';

function Home() {
    return (
        <Container>
           <Section
           title="Model S"
           description="Order Online For Touchless Delivery"
           backgroungImg="model-s.jpg"
           leftBtnText="Custom Order"
           rightBtnText="Existing Inventory"
           />
           <Section  
           title="Model Y"
           description="Order Online For Touchless Delivery"
           backgroungImg="model-y.jpg"
           leftBtnText="Custom Order"
           rightBtnText="Existing Inventory" />

           <Section title="Model 3"
           description="Order Online For Touchless Delivery"
           backgroungImg="model-3.jpg"
           leftBtnText="Custom Order"
           rightBtnText="Existing Inventory"/>
           
           <Section title="Model X"
           description="Order Online For Touchless Delivery"
           backgroungImg="model-x.jpg"
           leftBtnText="Custom Order"
           rightBtnText="Existing Inventory"/>

           <Section title="Solar Panels"
           description="Lowest Cost Solar Panels in America"
           backgroungImg="solar-panel.jpg"
           leftBtnText="Order Now"
           rightBtnText="Learn More"/>

           <Section title="Solar Roof"
           description="Produce Clean Energy From Your Roof"
           backgroungImg="solar-roof.jpg"
           leftBtnText="Order Now"
           rightBtnText="Learn More"/>

        
          <Section title="Accessories"
           description=""
           backgroungImg="accessories.jpg"
           leftBtnText ="Shop Now"
           rightBtnText=""/>
         </Container>
    )
}

export default Home

const Container=styled.div`
height: 100vh;
`