import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {handleChange, filter, type, price, minPrice, maxPrice, minSize
        , maxSize, capacity, breakfast, pets} = context;
    
    const getUnique = (items,value) => {
         return [...new Set(items.map(item => item[value]))]
    }
    // Room Type Display
    let types = getUnique(rooms,'type');
    // add all
    types = ['all',... types];
    // map to jsx
    types =  types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
        });
    
    // Guests Display
    let capacities = getUnique(rooms,'capacity');
    capacities = capacities.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    })
    
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type" 
                        id="type" 
                        value={type} 
                        className="form-control" 
                        onChange={handleChange}
                    >
                    {types}
                    </select>
                </div>
                {/* end select type */}
                {/* guest */}
                <div className="form-group">
                    <label htmlFor="guests">Guests</label>
                    <select
                        name="capacity" 
                        id="capacity" 
                        value={capacity} 
                        className="form-control" 
                        onChange={handleChange}
                    >
                    {capacities}
                    </select>
                </div>
                {/* end guest */}
                {/* price range */}
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input type="range" name="price" min={minPrice} 
                    max={maxPrice} id="price" value={price} className="form-control" 
                    onChange={handleChange}/>
                </div>
                {/* end price range */}
                {/* room size */}
                <div className="form-group">
                    <label htmlFor="size">min size</label>
                    <input type="number" name="minSize" id="size" 
                    value={minSize} onChange={handleChange} className="size-input"/>
                    <label htmlFor="size">max size</label>
                    <input type="number" name="maxSize" id="size" 
                    value={maxSize} onChange={handleChange} className="size-input"/>
                </div>
                {/* end room size  */}
                {/* extras  */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" 
                        checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" 
                        checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
