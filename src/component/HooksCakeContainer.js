import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../Redux/Cakes/cakeAction'

function HooksCakeContainer() {
    const noOfCakes = useSelector(state => state.cake.noOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>(hooks)number of cake - {noOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>by cake</button>
        </div>
    )
}

export default HooksCakeContainer
