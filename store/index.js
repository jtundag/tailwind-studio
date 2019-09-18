import modules from './modules'
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(modules, applyMiddleware(ReduxThunk))
export default store