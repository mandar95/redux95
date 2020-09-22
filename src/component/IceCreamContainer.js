import React from 'react'
import { connect } from 'react-redux';
import { buyIceCream } from '../Redux/IceCream/icecreamAction'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>no of icecream - {props.noOFIceCream}</h2>
            <button onClick={props.buyIceCream}>by cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOFIceCream: state.iceCream.noOFIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
