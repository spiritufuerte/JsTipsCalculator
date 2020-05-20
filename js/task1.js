const checkNumber = parseFloat(prompt('enter your check', ''));
const tipNumber = parseFloat(prompt('enter your tip', ''));
const maxPercent = 100;
const fractionDigits = 2;
if (!isNaN(checkNumber) && !isNaN(tipNumber) && checkNumber > 0 && tipNumber >= 0 && tipNumber <= maxPercent) {
    const sumAmount = checkNumber * tipNumber / maxPercent;
    const totalSum = checkNumber + sumAmount;
    alert(`
Check number: ${checkNumber.toFixed(fractionDigits)} 
Tip: ${tipNumber.toFixed(fractionDigits)}% 
Tip amount: ${sumAmount.toFixed(fractionDigits)}
Total sum to pay ${totalSum.toFixed(fractionDigits)}`);
} else {
    alert('Invalid input data');
}

