var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve,reject) => {
    setTimeout(resolve, 100 , 'foo');
})

Promise.all([p1,p2,p3]).then(values => {
    console.log(values);
})

Promise.reject(new Error('fail')).then(function(error) {
    console.log('1');
    console.log(error);
},function(error) {
    console.log('2');
    console.log(error);
})


Promise.resolve('Success').then(function(value) {
    console.log(value);
},function(){

})
