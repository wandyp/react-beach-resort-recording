import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Error = () => {
    return (
        <Hero>
            <Banner title="404" subtitle="Page NOT Found Error">
                <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
        </Hero>
    )
}

export default Error;