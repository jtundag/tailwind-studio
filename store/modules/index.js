import { createActionTypeFor } from './../mappers/_utils'
import { combineReducers } from 'redux'
const files = require.context('./', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
    if (key === './index.js') return
    let formattedName = key.replace(/(\.\/|\.js)/g, '')
    let mod = files(key)
    let actions = mod.actions || {}
    let reducers = {}
    Object.keys(actions).map(action => {
        let actionType = `${createActionTypeFor(formattedName)}::${createActionTypeFor(action)}`
        reducers[actionType] = actions[action].reducer
    })
    let initialState = mod.state || {}
    modules[formattedName] = (state = initialState, action) => reducers[action.type] ? reducers[action.type](state, action.payload) : state
})

const rootReducer = combineReducers(modules)

export default rootReducer