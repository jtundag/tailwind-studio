import { extractActionAndParamsFrom, createActionTypeFor } from './_utils'
const files = require.context('./../modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
    if (key === './index.js') return
    let formattedName = key.replace(/(\.\/|\.js)/g, '')
    modules[formattedName] = files(key).actions
})

export default mapping => {
    return (dispatch) => {
        let mapped = {}
        Object.keys(mapping).map(key => {
            let extractedData = extractActionAndParamsFrom(mapping[key])
            let actionType = `${createActionTypeFor(extractedData.module)}::${createActionTypeFor(extractedData.propName)}`
            let handler = (...args) => {
                return dispatch => {
                    let hd = modules[extractedData.module][extractedData.propName].handler || function () { return null }
                    Promise.resolve(hd.apply(null, args))
                        .then((res) => {
                            dispatch({
                                type: actionType,
                                payload: res
                            })
                        })
                }
            }
            mapped[key] = (...args) => dispatch(handler.apply(null, args))
        })
        return mapped
    }
}