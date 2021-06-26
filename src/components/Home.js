import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section title="Model-S" backgroundImg="model-s.jpg" description="Online Order of Touchless Delivery"
                leftBtnText="Custom Orders" rightBtnText="Existing Inventory"/>
            <Section title="Model-Y" backgroundImg="model-y.jpg" description="Online Order of Touchless Delivery"
                leftBtnText="Custom Orders" rightBtnText="Existing Inventory"/>
            <Section title="Model-X" backgroundImg="model-x.jpg" description="Online Order of Touchless Delivery"
                leftBtnText="Custom Orders" rightBtnText="Existing Inventory"/>
            <Section title="Model-3" backgroundImg="model-3.jpg" description="Online Order of Touchless Delivery"
                leftBtnText="Custom Orders" rightBtnText="Existing Inventory"/>
            <Section title="Lowest Cost Solar Panels in America" backgroundImg="solar-panel.jpg"
                description="Money-back Guarantee" leftBtnText="Order Now" rightBtnText="Learn More"/>
            <Section title="Accessories" backgroundImg="accessories.jpg"
                description="" leftBtnText="Shop Now" rightBtnText=""/>
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: 10;
`
