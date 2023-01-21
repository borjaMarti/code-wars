// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

//   ·  There must be a function for each number from 0 ("zero") to 9 ("nine")
//   ·  There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//   ·  Each calculation consist of exactly one operation and two numbers
//   ·  The most outer function represents the left operand, the most inner function represents the right operand
//   ·  Division should be integer division. For example, this should return 2, not 2.666666...:

// eight(dividedBy(three()));

function zero(op) {
    if (!op) return 0;

    switch(op[0]) {
        case '+':
            return 0 + op[1];
        case '-':
            return 0 - op[1];
        case '*':
            return 0 * op[1];
        case '/':
            return Math.floor(0 / op[1]);
    }
}

function one(op) {
    if (!op) return 1;

    switch(op[0]) {
        case '+':
            return 1 + op[1];
        case '-':
            return 1 - op[1];
        case '*':
            return 1 * op[1];
        case '/':
            return Math.floor(1 / op[1]);
    }
}

function two(op) {
    if (!op) return 2;

    switch(op[0]) {
        case '+':
            return 2 + op[1];
        case '-':
            return 2 - op[1];
        case '*':
            return 2 * op[1];
        case '/':
            return Math.floor(2 / op[1]);
    }
}

function three(op) {
    if (!op) return 3;

    switch(op[0]) {
        case '+':
            return 3 + op[1];
        case '-':
            return 3 - op[1];
        case '*':
            return 3 * op[1];
        case '/':
            return Math.floor(3 / op[1]);
    }
}

function four(op) {
    if (!op) return 4;

    switch(op[0]) {
        case '+':
            return 4 + op[1];
        case '-':
            return 4 - op[1];
        case '*':
            return 4 * op[1];
        case '/':
            return Math.floor(4 / op[1]);
    }
}

function five(op) {
    if (!op) return 5;

    switch(op[0]) {
        case '+':
            return 5 + op[1];
        case '-':
            return 5 - op[1];
        case '*':
            return 5 * op[1];
        case '/':
            return Math.floor(5 / op[1]);
    }
}

function six(op) {
    if (!op) return 6;

    switch(op[0]) {
        case '+':
            return 6 + op[1];
        case '-':
            return 6 - op[1];
        case '*':
            return 6 * op[1];
        case '/':
            return Math.floor(6 / op[1]);
    }
}

function seven(op) {
    if (!op) return 7;

    switch(op[0]) {
        case '+':
            return 7 + op[1];
        case '-':
            return 7 - op[1];
        case '*':
            return 7 * op[1];
        case '/':
            return Math.floor(7 / op[1]);
    }
}

function eight(op) {
    if (!op) return 8;

    switch(op[0]) {
        case '+':
            return 8 + op[1];
        case '-':
            return 8 - op[1];
        case '*':
            return 8 * op[1];
        case '/':
            return Math.floor(8 / op[1]);
    }
}

function nine(op) {
    if (!op) return 9;

    switch(op[0]) {
        case '+':
            return 9 + op[1];
        case '-':
            return 9 - op[1];
        case '*':
            return 9 * op[1];
        case '/':
            return Math.floor(9 / op[1]);
    }
}

function plus(num) {
    return ['+', num];
}

function minus(num) {
    return ['-', num];
}

function times(num) {
    return ['*', num];
}

function dividedBy(num) {
    return ['/', num];
}

// ...and the easy way:

// const zero  = (func) => func ? func(0) : 0;
// const one   = (func) => func ? func(1) : 1;
// const two   = (func) => func ? func(2) : 2;
// const three = (func) => func ? func(3) : 3;
// const four  = (func) => func ? func(4) : 4;
// const five  = (func) => func ? func(5) : 5;
// const six   = (func) => func ? func(6) : 6;
// const seven = (func) => func ? func(7) : 7;
// const eight = (func) => func ? func(8) : 8;
// const nine  = (func) => func ? func(9) : 9;

// const plus      = (x) => (num) => num + x;
// const minus     = (x) => (num) => num - x;
// const times     = (x) => (num) => num * x;
// const dividedBy = (x) => (num) => Math.floor(num / x);