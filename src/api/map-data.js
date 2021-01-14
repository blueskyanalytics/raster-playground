
let source = {}

export const setSource = (mapSource) => {
    source = mapSource
    console.log(source)
}

export const getSource = () => {
    return source
}