function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    function namedFunction(){
        return `hi there`;
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        return "helloS"
    }
}

