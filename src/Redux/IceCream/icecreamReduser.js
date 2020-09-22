import { Buy_IceCream } from './icecreamType'

const initialState = {
    noOFIceCream : 20
}

const iceCreamReduser = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case Buy_IceCream: return {
            ...state,
            noOFIceCream: state.noOFIceCream - 1
        }
        default: return state
    }
}

export default iceCreamReduser;