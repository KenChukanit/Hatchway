function average(array){
    let new_array = []
    for (let i = 0; i < array.length; i++){
        new_array[i] = parseInt(array[i])
    }
    return (new_array.reduce((a, b) => a + b) / new_array.length).toFixed(2)
};

export default average