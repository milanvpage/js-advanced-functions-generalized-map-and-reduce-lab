// Add your functions here
function map(origArr, funcOper) {
    const newArr = [];
    for(let i = 0; i < origArr.length; i++) {
        newArr.push(funcOper(origArr[i]));
    };
    return newArr;
};

function reduce(origArr, funcOper, startPt) {
    let total;
    let i; 

    if (!!startPt) {
        total = startPt;
        i = 0;
    } else {
        total = origArr[0];
        i = 1;
    };

    for( ; i < origArr.length; i++) {
        total = funcOper(origArr[i], total);
    };
    return total;
} 