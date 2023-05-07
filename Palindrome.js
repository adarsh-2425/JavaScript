function palindrome(str) {
    let n = str.length;
    for(let i = 0; i < Math.floor(n); i++) {
        if (str[i] !== str[n-1-i]) {
            return false;
        }
    }
    return true;
};

const str = 'racecar';
console.log(palindrome(str));
