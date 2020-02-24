
 function towelSort (matrix) {
    if (arguments.length === 0){
        return [];
    }
    let arr = [];
    matrix.forEach((item, index) => {
        if ((index + 1) % 2 !== 0){
            arr.push(item);
        }
        else {
            arr.push(item.reverse());
        }
    })
    return arr.flat();
}

module.exports = towelSort;
