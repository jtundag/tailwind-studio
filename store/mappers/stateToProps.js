import { extractActionAndParamsFrom } from './_utils'

export default mapping => {
    return (state) => {
        let mapped = {}
        Object.keys(mapping).map(key => {
            let extractedData = extractActionAndParamsFrom(mapping[key])
            mapped[key] = state[extractedData.module][extractedData.propName]
        })
        return mapped
    }
}