import React, { Component } from 'react'
import {RoomContext} from '../context'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import StyledHero from '../components/StyledHero'
import defaultBcg from '../images/room-1.jpeg'

export default class SingleRoom extends Component {

    // constructor(props) {
    //     super(props);
    //     //console.log(props);
        
    // }

    state = {
        slug: this.props.match.params.slug,
        defaultBcg
    }

    static contextType = RoomContext;
    render() {
        const {getRoom} = this.context;
        let room = getRoom(this.state.slug);
        
        if (!room) {
            return <div className="error">
                <h3>page can not be found</h3>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </div>
        }

        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        
        console.log(room);
        const [mainImg, ...otherImg] = images;
        return (
            <>
            <StyledHero img={mainImg || defaultBcg}>
                <Banner title={`${name} room`} >
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            
            <div className="single-room">
                <section>
                    <div className="single-room-images">
                        {otherImg.map((image,index) => {
                            return <img key={index} src={image} alt={name} />
                        })}
                    </div>
                    
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: {size} sqft</h6>
                            <h6>max capacity: {" "}
                        {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                            </h6>
                            <h6>
                                {breakfast &&  "breakfast included" }
                            </h6>
                            <h6>
                                {pets &&  "pets are allowed" }
                            </h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>        
                        })}
                    </ul>
                </section>
            </div>

            
            </>

        )
    }
}
