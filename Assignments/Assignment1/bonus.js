/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init;
    let inc = () => ++count;
    let dec = () => --count;
    let res = () => count=init;
    
    return { increment: inc, decrement: dec, reset: res }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */