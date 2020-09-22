import { combineReducers } from 'redux';
import cakeReduser from './Cakes/cakeReduser';
import iceCreamReduser from './IceCream/icecreamReduser';

debugger
const rootReduser = combineReducers({
    cake: cakeReduser,
    iceCream: iceCreamReduser,
  
})

export default rootReduser;