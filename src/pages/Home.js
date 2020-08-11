import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

export const Home = () => {
    return (
        <>
            <Hero hero="defaultHero">
                <Banner title="Luxurious Room" subtitle="Deluxe room starting
                at $288">
                    <Link to="/rooms" className="btn-primary">Rooms</Link>  
                </Banner>  
            </Hero>
            <Services />
            <FeaturedRooms />
        </> 
    )
}

export default Home; 
