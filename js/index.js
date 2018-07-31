const a = parseInt(prompt('Enter a'));
const b = parseInt(prompt('Enter b'));
const c = parseInt(prompt('Enter c'));
// alert('a= ' + a );
// alert('b= ' + b );
// alert('c= ' + c );

function myfunc (a, b, c) {
    const d = b * b - 4 * a * c;
    var res = "";
    if (d < 0) {
        res = "No result";
    }
    else {
        const x1 = (-b + Math.sqrt(d)) / (2*a);
        const x2 = (-b - Math.sqrt(d)) / (2*a);
        res = "Result: x1="+ x1 + ", x2="+x2;
    }
    return res;
}

const result = myfunc(a,b,c);
alert(result);
