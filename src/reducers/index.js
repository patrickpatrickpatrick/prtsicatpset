import { combineReducers } from 'redux'
import { itemsHasErrored, itemsIsLoading, items } from './items'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    itemsHasErrored,
    itemsIsLoading,
    items,
    routing: routerReducer
})
