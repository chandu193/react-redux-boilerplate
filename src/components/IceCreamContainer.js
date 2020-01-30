import React from 'react'
import { connect } from 'react-redux'
import {
    buyIceCream,
    addIceCream
} from '../redux/iceCream/iceCreamActions'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfIceCreams} </h2>
            <button onClick={props.buyIceCream}> Buy Ice cream </button>
            <button onClick={props.addIceCream}> Add Ice cream </button>
        </div>
    )
}

const mapStateToProps = state => ({
    numOfIceCreams: state.iceCream.numOfIceCreams
})

const mapDispatchToProps = {
    buyIceCream,
    addIceCream
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
