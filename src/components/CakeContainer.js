import React from 'react'
import { connect } from 'react-redux'
import {buyCake, addCake} from '../redux/cake/cakeActions'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes} </h2>
            <button onClick={props.buyCake}> Buy Cake </button>
            <button onClick={props.addCake}> Add Cake </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    numOfCakes: state.cake.numOfCakes
})

const mapDispatchToProps = {
    buyCake,
    addCake
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
