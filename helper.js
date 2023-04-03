exports.matrixMaker = (N,M) => {
    const countriesArray = ["India", "Nepal", "Germany", "Finland"];
    const totalCountries = countriesArray.length;
    const matrix = [];
    
    for(let i=0; i<N; i++) {
        let row = []
        for(let j=0; j<M; j++) {
            let randomIndex = Math.floor( Math.random()*totalCountries);
            row.push(countriesArray[randomIndex])
        }
        matrix.push(row)
    }
    return matrix
}

exports.majorityFinder = (arr) => {
    let currentElement = arr[0];
    let count = 1;
    let ans = {};
    let i=1;
    while(i <= arr.length) {
        if(arr[i] == currentElement) count++
        else {
            if(count > 1) ans[currentElement] = count
            count = 1;
            currentElement = arr[i]
        }
        i++
    }
    return Object.keys(ans).length > 0 ? ans : null
}