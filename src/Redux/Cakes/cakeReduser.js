import { Buy_Cake } from './cakeType'

const initialState = {
    noOfCakes: 10
}

const cakeReduser = (state = initialState, action) => {
    switch (action.type) {
        case Buy_Cake: return {
            ...state,
            noOfCakes: state.noOfCakes - 1
        }
        default: return state
    }
}

export default cakeReduser;