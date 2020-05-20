// Your code goes here
const str = prompt('enter your word',``);

if (/^\s*$/.test(str)) {
    alert('Invalid value');
} else {
    const half = 2;
    if (str.length % half === 0) {
        alert(`"${str[str.length / half - 1]}${str[str.length / half]}"`);
    } else {
        alert(`"${str[(str.length - 1) / half]}"`);
    }
}

