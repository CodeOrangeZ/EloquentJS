

function mathMin (num1,num2) {
    if (num1 === -0 && num2 === 0) {
        console.log(num1);
    }
    else if (num2 === -0 && num1 === 0) {
        console.log(num2);
    }
    else if (num1 === num2) {
        console.log('error');
    }
    else if (num1 < num2) {
        console.log(num1);
    }
    else {
        console.log(num2);
    }
};

mathMin(1,5);


