import React, { Component } from 'react'
import LoadingGif from '../images/gif/loading-arrow.gif';

export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <h4>data is loading...</h4>
                <img src={LoadingGif} alt="loading gif"/>
            </div>
        )
    }
}
