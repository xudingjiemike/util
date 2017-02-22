/*
  回调
 */
const loop  = (() => {
    const recur = (callback , count , i = 0) => {
        if(i == count -1 ) return callback(i);
        callback(i);
        return recur(callback , count , i+1);
    };

    return (callback , count) => {
        if(count > 0) return recur(callback , count);
    }
})();

const func = n =>{
    console.log(n);
    return "Done";
}

loop(func,4);
