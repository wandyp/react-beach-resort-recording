import React, { Component } from 'react'
import Title from './Title'
import {FaBeer, FaShuttleVan, FaHiking, FaCocktail} from 'react-icons/fa'

export default class Services extends Component {
state = {
    services: [
        {
            icon: <FaHiking/>,
            title: "Endless Hiking",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, at!"
        },
        {
            icon: <FaCocktail/>,
            title: "Free Cocktails",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, at!"
        },
        {
            icon: <FaShuttleVan/>,
            title: "Free Shutle",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, at!"
        },
        {
            icon: <FaBeer/>,
            title: "Free Beer",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, at!"
        }
    ]
}

    render() {
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
