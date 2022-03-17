let Complex = function (real, imag) {
    if (!(this instanceof Complex)) {
        return new Complex(real, imag);
    }

    if (typeof real === "string" && imag == null) {
        return Complex.parse(real);
    }

    this.real = Number(real) || 0;
    this.imag = Number(imag) || 0;
};

Complex.parse = function(string) {
    let real, imag, regex, match, a, b, c;
    
    regex = /^([-+]?(?:\d+|\d*\.\d+))?[-+]?(\d+|\d*\.\d+)?[ij]$/i;
    string = String(string).replace (/\s+/g, '');

    match = string.match (regex);
    if (!match) {
        throw new Error("Invalid input to Complex.parse, expecting a + bi format");
    }

    a = match[1];
    b = match[2];
    c = match[3];

    real = a != null ? parseFloat (a) : 0;
    imag = parseFloat ((b || "+") + (c || "1"));

    return new Complex(real, imag);
};

Complex.prototype.copy = function() {
    return new Complex (this.real, this.imag);
};

Complex.prototype.add = function(operand) {
    let real, imag;

    if (operand instanceof Complex) {
        real = operand.real;
        imag = operand.imag;
    } else {
        real = Number(operand);
        imag = 0;
    }
    this.real += real;
    this.imag += imag;

    return this;
};

Complex.prototype.subtract = function(operand) {
    let real, imag;

    if (operand instanceof Complex) {
        real = operand.real;
        imag = operand.imag;
    } else {
        real = Number(operand);
        imag = 0;
    }
    this.real -= real;
    this.imag -= imag;

    return this;
};
Complex.prototype.multiply = function(operand) {
    let real, imag, tmp;

    if (operand instanceof Complex) {
        real = operand.real;
        imag = operand.imag;
    } else {
        real = Number(operand);
        imag = 0;
    }

    tmp = this.real * real - this.imag * imag;
    this.imag = this.real * imag + this.imag * real;
    this.real = tmp;

    return this;
};

Complex.prototype.divide = function(operand) {
    let real, imag, denom, tmp;

    if (operand instanceof Complex) {
        real = operand.real;
        imag = operand.imag;
    } else {
        real = Number(operand);
        imag = 0;
    }

    denom = real * real + imag * imag;
    tmp = (this.real * real + this.imag * imag) / denom;
    this.imag = (this.imag * real - this.real * imag) / denom;
    this.real = tmp;

    return this;
};


let repl = require('repl');
repl.start().context.Complex = Complex;