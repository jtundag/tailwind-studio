export const extractActionAndParamsFrom = (target) => {
    let extractedData = {
        module: null,
        action: null
    }
    let split = target.split('/')
    extractedData.module = split[0]
    extractedData.propName = split[1]
    return extractedData
}

export const createActionTypeFor = (str) => {
    return str.replace(/[\w]([A-Z])/g, (m) => {
        return m[0] + "_" + m[1]
    }).toUpperCase()
}